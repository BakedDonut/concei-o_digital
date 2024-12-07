import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { styles } from './styles';
import { SelectTypeEvent } from '../../../components/SelectTypeEvent';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { theme } from '../../../styles/theme';
import { createEventApi } from '../../../api/events';
import { formatDate, formatDateToISO } from '../../../utils/formatDate';

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

export function CreateEventScreen() {
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        watch,
    } = useForm<FormValues>({
        resolver: zodResolver(eventSchema),
    });

    const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>('00/00/0000');
    const [openSelectDate, setOpenSelectDate] = useState<{ visible: boolean; typeDateUpdate: 'start' | 'end' }>({
        visible: false,
        typeDateUpdate: 'start'
    });
    const [selectedStartDate, setSelectedStartDate] = useState<string>('00/00/0000');
    const [selectedEndDate, setSelectedEndDate] = useState<string>('00/00/0000');

    const onSubmit = (data: FormValues) => {
        createEvent(data);
    };

    async function createEvent(data : any){
        try {
            if(data.location===undefined){
                data.location = 'Igreja Matriz';
            }
            data.start_date = formatDateToISO(data.start_date);
            data.end_date = formatDateToISO(data.end_date);
            
            await createEventApi(data);
            resetAllInputs();
        } catch (error) {
            console.log(error);

            throw (error);            
        }
    }

    function resetAllInputs() {
        reset({
            title: '',
            subtitle: '',
            description: '',
            location: '',
            start_date: '00/00/0000',
            end_date: '00/00/0000',
            time: '',
            eventType: ''
        });

        setSelectedEventType(null);
        setSelectedStartDate('00/00/0000');
        setSelectedEndDate('00/00/0000');
    }

    const locationValue = watch('location');

    const formatTime = (text: string) => {
        let formattedText = text.replace(/[^\d]/g, '');

        if (formattedText.length > 2) {
            formattedText = `${formattedText.slice(0, 2)}:${formattedText.slice(2, 4)}`;
        }

        return formattedText;
    };

    const onChangeDate = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || new Date();
        const type = openSelectDate.typeDateUpdate;
        setOpenSelectDate(prevState => ({
            ...prevState,
            visible: false
        }));
    
        const formattedDate = formatDate(currentDate);
    
        if (type === 'start') {
            setSelectedStartDate(formattedDate);
            setValue('start_date', formattedDate);
        } else {
            setSelectedEndDate(formattedDate);
            setValue('end_date', formattedDate);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={100} 
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
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
                        onSelectEvent={(selected) => {
                            setSelectedEventType(selected.id.toString());
                            setValue('eventType', selected.id.toString()); // Atualiza o valor do campo no formulário
                        }}
                    />
                    )}
                />
                {errors.eventType && <Text style={styles.errorText}>Tipo de evento é obrigatório</Text>}

                <TouchableOpacity style={styles.containerCreateEvent} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.textCreateEvent}>Criar evento</Text>
                </TouchableOpacity>
                {
                    openSelectDate.visible &&
                    <RNDateTimePicker 
                        value={new Date()}
                        mode="date" 
                        positiveButton={{label: 'Selecionar', textColor: theme.colors.primary}} 
                        negativeButton={{label: 'Voltar', textColor: theme.colors.primary}}
                        style={{flex: 1}} 
                        onChange={onChangeDate}
                    />
                }
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
