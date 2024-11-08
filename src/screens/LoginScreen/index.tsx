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
import { saveUserStorage } from '../../storage/UserStorage';
import { User } from '../../@types/user';
import { saveAcessTokenStorage } from '../../storage/SessionStorage';
import { useAuth } from '../../providers/AuthContextProvider';

export function LoginScreen() {
    const navigation = useNavigation<NavigationProps>(); 

    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [errorLogin, setErrorLogin] = useState<string>();

    function handleSignOut() {
        navigation.openDrawer(); 
    }

    const insets = useSafeAreaInsets();

    const { setUser } = useAuth(); // Obtém o usuário e a função de logout

    async function handleSubmit() {
        try {
            const isvalid = validation();
            
            if(isvalid === false){
                throw 'error';
            }

            const response = await loginUserApi(
                emailInput,
                passwordInput
            );
            
            await saveUserStorage(response.user as User)
            await saveAcessTokenStorage(response.access_token as string)
            setUser(response.user as User)

        } catch (error) {
            setErrorLogin('Ocorreu algum erro, tente novamente mais tarde')
            if(error === 'error'){
                setErrorLogin('')
            }

            if(error === 'User not found'){
                setErrorLogin('Usuário não encontrado')
            }
            if(error === 'Email or password incorrect'){
                setErrorLogin('Email ou senha incorretos')
            }
        }
    }

    function validation(){
        setEmailError('');
        setPasswordError('');

        if (!emailInput) {
            setEmailError('O campo email é obrigatório');
            return false;
        }
        if (!passwordInput) {
            setPasswordError('O campo senha é obrigatório');
            return false;
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

                    {errorLogin ? <Text style={styles.errorText}>{errorLogin}</Text> : null}
                    
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
