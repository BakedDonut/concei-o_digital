import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BackIcon from '../../assets/icons/sign-out.svg';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../@types/navigation';
import { theme } from '../../styles/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '../../assets/images/loginImage.jpeg';
import { loginUserApi } from '../../api/user';

export function LoginScreen() {
    const navigation = useNavigation<NavigationProps>(); 

    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    function handleSignOut() {
        navigation.openDrawer(); 
    }

    const insets = useSafeAreaInsets();

    async function handleSubmit() {
        try {
            if(validation()){
                return ;
            }
    
            const response = await loginUserApi(
                emailInput,
                passwordInput
            );

            //Armazena no storage os dados de user e armazena também na sessão
        } catch (error) {
            console.log(error);
            
        }
    }

    function validation(){
        setEmailError('');
        setPasswordError('');

        if (!emailInput) {
            setEmailError('O campo email é obrigatório');
        }
        if (!passwordInput) {
            setPasswordError('O campo senha é obrigatório');
        }

        return true;
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, { paddingTop: insets.top }]}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
            >
                <View style={styles.top}>
                    <TouchableOpacity onPress={handleSignOut} activeOpacity={0.7} style={styles.buttonBack}>
                        <BackIcon fill={theme.colors.label} width={25} height={25}/>
                        <Text style={styles.textBack}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Conceição Digital</Text>
                    <Image source={Logo} style={styles.image} />
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={setEmailInput} // Simplificação
                            value={emailInput}
                        />
                        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={setPasswordInput} // Simplificação
                            value={passwordInput}
                            secureTextEntry
                        />
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    </View>
                    
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
