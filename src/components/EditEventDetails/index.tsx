import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Event, EventTypes } from '../../@types/event';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CrossIcon from '../../assets/icons/cross.svg';
import { theme } from '../../styles/theme';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { SelectTypeEvent } from '../SelectTypeEvent';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import TrashIcon from '../../assets/icons/trash-fill.svg';
import { formatDate, formatDateToISO } from '../../utils/formatDate';
import { formatTime } from '../../utils/formatTime';
import { deleteEventApi, editEventApi } from '../../api/envents';

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
  end_date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Data deve estar no formato DD/MM/AAAA'),
  start_date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Data deve estar no formato DD/MM/AAAA'),
  time: z.string().regex(/^\d{2}:\d{2}$/, 'Hora deve estar no formato HH:MM').refine(validateTimeRange, 'Hora deve estar dentro do intervalo válido (00:00 a 23:59)'),
  eventType: z.string().min(1, 'Tipo de evento é obrigatório'),
});

type FormValues = z.infer<typeof eventSchema>;

const screenWidth = Dimensions.get('window').width;
const dimensionAdjustment = screenWidth - screenWidth * 0.9;

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

  const [selectedStartDate, setSelectedStartDate] = useState<string>('00/00/0000');
  const [selectedEndDate, setSelectedEndDate] = useState<string>('00/00/0000');
  const [openSelectDate, setOpenSelectDate] = useState({visible: false, typeDateUpdate: ''});
  
  const locationValue = watch('location');

  useEffect(() => {
    if (event) {
      setValue('title', event.title);
      setValue('subtitle', event.subtitle);
      setValue('description', event.description);
      setValue('location', event.location);
      setValue('start_date', formatDate(event.start_date));
      setValue('end_date', formatDate(event.end_date));
      setValue('time', formatTime(event.time));
      setValue('eventType', event.event_type.id.toString());
      setSelectedStartDate(formatDate(event.start_date));
      setSelectedEndDate(formatDate(event.end_date));
    }
  }, [event, setValue]);

  const onSubmit = (data: FormValues) => {
    const modifiedFields = [];
    
    if (data.title !== event.title) modifiedFields.push(`Título: → ${data.title}`);
    if (data.subtitle !== event.subtitle) modifiedFields.push(`Subtítulo: → ${data.subtitle}`);
    if (data.description !== event.description) modifiedFields.push(`Descrição: → modificada`);
    if (data.location !== event.location) modifiedFields.push(`Local: → ${data.location}`);
    if (data.start_date !== formatDate(event.start_date)) modifiedFields.push(`Data de início: → ${data.start_date}`);
    if (data.end_date !== formatDate(event.end_date)) modifiedFields.push(`Data de fim: → ${data.end_date}`);
    if (data.time !== event.time) modifiedFields.push(`Hora: → ${data.time}`);
    if (data.eventType !== event.event_type.name) modifiedFields.push(`Tipo de Evento: → ${data.eventType}`);
    
    const message = modifiedFields.length > 0 ? modifiedFields.join('\n') : 'Nenhuma alteração detectada.';

    Alert.alert('Tem certeza que quer modificar esse evento?', message, [
      { text: 'Voltar', onPress: () => console.log('Voltar pressionado') },
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Confirmar edição', onPress: () => confirmEditEvent(data)},
    ]);
  };

  async function confirmEditEvent(data: any){
    try {
      data.id = event.id //Coloquei aqui para não atrapalhar a tipagem do FormValues
      data.start_date = formatDateToISO(data.start_date);
      data.end_date = formatDateToISO(data.end_date);
      const response = await editEventApi(data);            
    } catch (error) {
      
    }
  }

  

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || new Date();
    const type = openSelectDate.typeDateUpdate;        
    setOpenSelectDate(prevState => ({
      ...prevState,
      visible: false
    }));
    const formattedDate = formatDate(currentDate);
    if(type === 'start'){
      setSelectedStartDate(formattedDate);
      setValue('start_date', formattedDate);
    }else{
        setSelectedEndDate(formattedDate);
        setValue('end_date', formattedDate);
    }
  };

  const handleDeleteEvent = () => {
    Alert.alert('Excluir evento?', 'Tem certeza que deseja excluir esse evento?', [
      { text: 'Voltar', onPress: () => console.log('Voltar pressionado') },
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', onPress: () => confirmDelete() },
    ]);
  };

  async function confirmDelete(){
    await deleteEventApi(event.id);
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={close}>
        <AntDesign name="left" size={22} color="#A59067" />
        <Text style={styles.textBtn}>Voltar</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          borderWidth: 1,
          borderColor: theme.colors.primary,
          padding: 10,
          borderRadius: 5,
        }}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.top}>
          <CrossIcon width={26} height={32} fill={theme.colors.primary} />
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
          {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}
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
                style={[styles.inputText, { height: 200, textAlignVertical: 'top' }]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
              />
            )}
          />
          {errors.description && <Text style={styles.errorText}>{errors.description.message}</Text>}
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
          {locationValue === undefined && (
            <Text style={styles.attentionText}>Caso não insira um local específico, será: Igreja Matriz</Text>
          )}
        </View>
        <View style={styles.dataTimeContainer}>
          <TouchableOpacity style={styles.inputContainer} onPress={() => setOpenSelectDate({visible: true, typeDateUpdate:'start'})}>
            <Text style={styles.label}>Data de início</Text>
            <Text style={styles.dataTimeText}>{selectedStartDate}</Text>
            {errors.start_date && <Text style={styles.errorText}>{errors.start_date.message}</Text>}
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputContainer} onPress={() => setOpenSelectDate({visible: true, typeDateUpdate:'end'})}>
            <Text style={styles.label}>Data de fim</Text>
            <Text style={styles.dataTimeText}>{selectedEndDate}</Text>
            {errors.end_date && <Text style={styles.errorText}>{errors.end_date.message}</Text>}
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Hora</Text>
          <Controller
            control={control}
            name="time"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.dataTimeText}
                placeholder="00:00"
                keyboardType="number-pad"
                onBlur={onBlur}
                onChangeText={(time) => {
                  const formattedTime = formatTime(time);
                  onChange(formattedTime);
                }}
                value={value}
              />
            )}
          />
          {errors.time && <Text style={[styles.errorText, { width: 120 }]}>{errors.time.message}</Text>}
        </View>
        
        <Controller
            control={control}
            name="eventType"
            render={({ field: { onChange, onBlur, value } }) => (
              <SelectTypeEvent
                onSelectEvent={(selected: EventTypes) => onChange(selected.id.toString())}
                eventDefaultSelected={event.event_type.name}
              />
            )}
          />
        {errors.eventType && <Text style={styles.errorText}>{errors.eventType.message}</Text>}
        <TouchableOpacity style={styles.containerCreateEvent} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.textCreateEvent}>Editar evento</Text>
        </TouchableOpacity>
        {openSelectDate.visible && (
          <RNDateTimePicker
            value={new Date()}
            mode="date"
            positiveButton={{ label: 'Selecionar', textColor: theme.colors.primary }}
            negativeButton={{ label: 'Voltar', textColor: theme.colors.primary }}
            style={{ flex: 1 }}
            onChange={onChangeDate}
          />
        )}
        <TouchableOpacity style={styles.deleteEventButton} onPress={handleDeleteEvent}>
          <TrashIcon width={26} height={32} fill={'white'} />
          <Text style={styles.textDeleteEventButton}>Excluir evento</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
