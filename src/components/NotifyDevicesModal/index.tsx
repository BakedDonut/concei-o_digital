import React from 'react';
import { Text, View, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { styles } from './styles';
import { BackButton } from '../BackButton';
import { Button } from 'react-native';
import { sendNotificationForAllApi } from '../../api/notify';

const eventSchema = z.object({
  title: z.string().min(1, 'Título da notificação é obrigatório'),
  content: z.string().min(1, 'O conteúdo da notificação é obrigatório'),
});

type FormValues = z.infer<typeof eventSchema>;

type Props = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const InputField = ({ control, name, label, error, multiline = false }: { control: any; name: string; label: string; error?: string; multiline?: boolean }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={[styles.inputText, multiline && { height: 100, textAlignVertical: 'top' }]}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          multiline={multiline}
        />
      )}
    />
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

export function NotifyDevicesModal({ modalVisible, setModalVisible }: Props) {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await sendNotificationForAllApi(data.title, data.content);
      Alert.alert('','Notificação Enviada')
      setValue('content','')
      setValue('title','')
    } catch (error) {
      Alert.alert('','Erro ao enviar a notificação')
    }
  };

  return (
    <Modal animationType="fade" transparent visible={modalVisible}         onRequestClose={() => setModalVisible(false) }>
      <View style={styles.modalView}>
        <BackButton onPress={() => setModalVisible(false)} />

        <Text style={styles.title}>Enviar notificação</Text>
        <Text style={styles.subtitle}>Ao clicar em enviar notificação, enviará notificação para todos os dispositivos</Text>

        <InputField
          control={control}
          name="title"
          label="Título da notificação"
          error={errors.title?.message}
        />

        <InputField
          control={control}
          name="content"
          label="Conteúdo da notificação"
          error={errors.content?.message}
          multiline
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonNotify}>
          <Text style={styles.textButtonNotify}>Enviar notificação</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
