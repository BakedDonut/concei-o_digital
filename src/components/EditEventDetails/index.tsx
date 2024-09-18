import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Event } from '../../@types/event';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CrossIcon from '../../assets/icons/cross.svg';
import { theme } from '../../styles/theme';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { SelectTypeEvent } from '../SelectTypeEvent';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import TrashIcon from '../../assets/icons/trash-fill.svg'

interface Props {
  close: () => void;
  event: Event;
}

const validateTimeRange = (value: string) => {
  const [hours, minutes] = value.split(':').map(Number);
  return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
};

const eventSchema = z.object({
  title: z.string().min(1, 'Título do evento é obrigatório'),
  subtitle: z.string().optional(),
  description: z.string().min(1, 'Descrição completa é obrigatória'),
  location: z.string().optional(),
  date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Data deve estar no formato DD/MM/AAAA'),
  time: z.string().regex(/^\d{2}:\d{2}$/, 'Hora deve estar no formato HH:MM').refine(validateTimeRange, 'Hora deve estar dentro do intervalo válido (00:00 a 23:59)'),
  eventType: z.string().min(1, 'Tipo de evento é obrigatório'),
});

type FormValues = z.infer<typeof eventSchema>;

const screenWidth = Dimensions.get('window').width;

const diminueDimention = screenWidth - screenWidth * 0.9

export default function EditEventDetails({ close, event }: Props) {

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
      resolver: zodResolver(eventSchema),
  });

  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('00/00/0000');
  const [openSelectDate, setOpenSelectDate] = useState(false);

  const onSubmit = (data: FormValues) => {
    const modifiedFields = [];

    // Comparar com os valores originais do evento
    if (data.title !== event.title) modifiedFields.push(`Título: → ${data.title}`);
    if (data.subtitle !== event.subtitle) modifiedFields.push(`Subtítulo: → ${data.subtitle}`);
    if (data.description !== event.description) modifiedFields.push(`Descrição:  → modificada`);
    if (data.location !== event.location) modifiedFields.push(`Local: → ${data.location}`);
    if (data.date !== dateToString(event.date)) modifiedFields.push(`Data: → ${data.date}`);
    if (data.time !== event.time) modifiedFields.push(`Hora: → ${data.time}`);
    if (data.eventType !== event.event_type.name) modifiedFields.push(`Tipo de Evento: → ${data.eventType}`);

    // Criação da mensagem do Alert
    const message = modifiedFields.length > 0 ? modifiedFields.join('\n') : 'Nenhuma alteração detectada.';

    Alert.alert('Tem certeza que quer modificar esse evento?', message, [
        {
            text: 'Voltar',
            onPress: () => console.log('Ask me later pressed'),
        },
        {
            text: '',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {
            text: 'Confirmar edição',
            onPress: () => console.log('OK Pressed'),
        },
    ]);
    console.log(data);
    // Handle form submission here
  };


  const locationValue = watch('location');

  const formatTime = (text: string) => {
      let formattedText = text.replace(/[^\d]/g, '');

      if (formattedText.length > 2) {
          formattedText = `${formattedText.slice(0, 2)}:${formattedText.slice(2, 4)}`;
      }

      return formattedText;
  };

  const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  };

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
      const currentDate = selectedDate || new Date();
      setOpenSelectDate(false);
      setSelectedDate(formatDate(currentDate));
      setValue('date', formatDate(currentDate));
  };
  
  useEffect(() => {
    if (event) {
      setValue('title', event.title);
      setValue('subtitle', event.subtitle);
      setValue('description', event.description);
      setValue('location', event.location);
      setValue('date', dateToString(event.date)); 
      setValue('time', event.time);
      setValue('eventType', event.event_type.name);
      setSelectedDate(dateToString(event.date));
      setSelectedEventType(event.event_type.name);
    }
  }, [event, setValue]);

  function dateToString(date: Date | String){
    return typeof date === 'string' ? date : formatDate(new Date(date as Date));
  }

  function handleDeleteEvent(){
    Alert.alert('Excluir evento?', 'Tem certeza que deseja excluir esse evento', [
      {
        text: 'Voltar',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: '',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Excluir', onPress: () => console.log('OK Pressed')},
    ]);
  }

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
    >
      <TouchableOpacity style={styles.header} onPress={close}>
          <AntDesign
            name="left"
            size={22}
            color="#A59067"
          />
          <Text style={styles.textBtn}>Voltar</Text>
        </TouchableOpacity>
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, borderWidth: 1, borderColor: theme.colors.primary, padding: 10, borderRadius: 5 }}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.top}>
              <CrossIcon width={26} height={32} fill={theme.colors.primary}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Título do evento</Text>
                <Controller
                    control={control}
                    name="title"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputText}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.title && <Text style={styles.errorText}>Título do evento é obrigatório</Text>}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Subtítulo do evento</Text>
                <Controller
                    control={control}
                    name="subtitle"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputText}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Descrição completa</Text>
                <Controller
                    control={control}
                    name="description"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.inputText, { height: 200, textAlignVertical: 'top' }] }
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            multiline
                        />
                    )}
                />
                {errors.description && <Text style={styles.errorText}>Descrição completa é obrigatória</Text>}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Local</Text>
                <Controller
                    control={control}
                    name="location"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputText}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.location && <Text style={styles.errorText}>{errors.location.message}</Text>}
                {locationValue === undefined && <Text style={styles.attentionText}>Caso não insira um local específico, será: Igreja Matriz</Text>}
            </View>
            <View style={styles.dataTimeContainer}>
                <TouchableOpacity style={styles.inputContainer} onPress={() => setOpenSelectDate(true)}>
                    <Text style={styles.label}>Data prevista</Text>
                    <Text style={[styles.dataTimeText]}>
                        {selectedDate}
                    </Text>
                    {errors.date && <Text style={styles.errorText}>{errors.date.message}</Text>}
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Hora</Text>
                    <Controller
                        control={control}
                        name="time"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[styles.dataTimeText]}
                                placeholder="00:00"
                                keyboardType="number-pad"
                                onBlur={onBlur}
                                onChangeText={(text) => onChange(formatTime(text))}
                                value={value}
                            />
                        )}
                    />
                    {errors.time && <Text style={[styles.errorText, {width: 120}]}>{errors.time.message}</Text>}
                </View>
            </View>
            <SelectTypeEvent
                onSelectEvent={(selected) => {
                    setSelectedEventType(selected);
                    setValue('eventType', selected); // Atualiza o valor do campo no formulário
                }}
                eventDefaultSelected={event.event_type.name}
            />
            {errors.eventType && <Text style={styles.errorText}>Tipo de evento é obrigatório</Text>}
            <TouchableOpacity style={styles.containerCreateEvent} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.textCreateEvent}>Editar evento</Text>
            </TouchableOpacity>
            {
                openSelectDate &&
                <RNDateTimePicker 
                    value={new Date()}
                    mode="date" 
                    positiveButton={{label: 'Selecionar', textColor: theme.colors.primary}} 
                    negativeButton={{label: 'Voltar', textColor: theme.colors.primary}}
                    style={{flex: 1}} 
                    onChange={onChangeDate}
                />
            }
            <TouchableOpacity style={styles.deleteEventButton} onPress={()=>handleDeleteEvent()}>
              <TrashIcon width={26} height={32} fill={'white'}/>
              <Text style={styles.textDeleteEventButton}>Excluir evento</Text>
            </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}