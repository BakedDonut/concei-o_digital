import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { styles } from './styles';
import { SelectTypeEvent } from '../../../components/SelectTypeEvent';
import DateTimePicker from '@react-native-community/datetimepicker';

const validateTimeRange = (value: string) => {
    const [hours, minutes] = value.split(':').map(Number);
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return false;
    }
    return true;
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

export function CreateEventScreen() {
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
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

    const onSubmit = (data: FormValues) => {
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

    const onDateChange = (event: any, selectedDate: Date | undefined) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setSelectedDate(selectedDate);
            setValue('date', selectedDate.toLocaleDateString('pt-BR'));
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
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
                                style={[styles.inputText, { height: 200, textAlignVertical: 'top' }]}
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
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Data</Text>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={[styles.dataTimeText, { width: 100, textAlign: 'center' }]}
                                    placeholder="00/00/0000"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.date && <Text style={styles.errorText}>{errors.date.message}</Text>}
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Hora</Text>
                        <Controller
                            control={control}
                            name="time"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={[styles.dataTimeText, {  }]}
                                    placeholder="00:00"
                                    keyboardType="number-pad"
                                    onBlur={onBlur}
                                    onChangeText={(text) => onChange(formatTime(text))}
                                    value={value}
                                />
                            )}
                        />
                        {errors.time && <Text style={styles.errorText}>{errors.time.message}</Text>}
                    </View>
                </View>
                <SelectTypeEvent
                    onSelectEvent={(selected) => {
                        setSelectedEventType(selected);
                    }}
                />
                {errors.eventType && <Text style={styles.errorText}>{errors.eventType.message}</Text>}
                <TouchableOpacity style={styles.containerCreateEvent} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.textCreateEvent}>Criar evento</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
