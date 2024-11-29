import React, { useEffect, useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import { styles } from './styles';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BackButton } from '../BackButton';
import { getUserStorage } from '../../storage/UserStorage';
import { User } from '../../@types/user';
import { updateUserApi } from '../../api/user';

const eventSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().min(1, 'Email é obrigatório'),
    password: z.string().min(1, 'Senha é obrigatório'),
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

export function EditUserModal({ modalVisible, setModalVisible }: Props) {
    const [dataUserStorage, setDataUserStorage] = useState<User>({
        name: '',
        email: '',
        is_admin: false,
        password: '',
        id: ''
    });

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm<FormValues>({
        resolver: zodResolver(eventSchema),
      });
    
    const onSubmit = async (data: FormValues) => {
        const response = await updateUserApi(dataUserStorage.id,data.name, data.email, data.password);
        console.log(response.data);
        
    };
    
    useEffect(() => {
        loadData();
    }, [modalVisible]);

    useEffect(() => {
        setValue('name', dataUserStorage.name);  
        setValue('email', dataUserStorage.email);
        setValue('password', dataUserStorage.password || '');
    }, [dataUserStorage]);

    async function loadData(){
        const data = await getUserStorage();
        if(data){
            setDataUserStorage(data);
        }
    }

  return (
    <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={styles.modalView}>
          <BackButton onPress={() => setModalVisible(false)} />
  
          <Text style={styles.title}>Editar informações do usário adiministrador</Text>
          <Text style={styles.subtitle}>As informações que você alterar aqui só irão refletir ao usuário atualmente usado</Text>
  
        <InputField
            control={control}
            name="name"
            label="Nome de usuário"
            error={errors.name?.message}
        />
  
        <InputField
            control={control}
            name="email"
            label="Email"
            error={errors.email?.message}
        />

        <InputField
            control={control}
            name="password"
            label="Senha"
            error={errors.password?.message}
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonNotify}>
            <Text style={styles.textButtonNotify}>Salvar dados</Text>
        </TouchableOpacity>
        </View>
      </Modal>
  );
}
  