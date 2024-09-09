import { Text, TouchableOpacity, View, Linking, ScrollView } from "react-native";
import { styles } from "./styles";
import WhatsappIcon from '../../../assets/icons/whatsapp-logo.svg'
import FacebookIcon from '../../../assets/icons/facebook-logo-fill.svg'
import InstagramIcon from '../../../assets/icons/instagram-logo.svg'
import BrowserIcon from '../../../assets/icons/browser-bold.svg'


const colorIcon = '#fff';
const sizeIcon = 30;

export function AboutSreen(){

    return(
        <ScrollView style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>Nossa senhora Imaculada da Conceição</Text>
                <Text style={styles.text}>Com uma bela arquitetura eclética, a Igreja Matriz de Nossa Senhora Imaculada Conceição, Catedral, ou Igreja Matriz como ainda é chamada pela população local, está localizada no centro de Teófilo Otoni. As duas grandes pilastras na fachada da igreja representam São Pedro e São Paulo, alicerces da Igreja católica. Complementando a decoração, há pinturas executadas por padre Lázaro, um belo púlpito e os vitrais. O início da construção da Igreja de Nossa Senhora da Imaculada Conceição foi em 1892, pelo Padre Virgulino</Text>
            </View>
            <View style={styles.buttons}>
                <Text style={styles.title}>Contatos:</Text>
                <TouchableOpacity onPress={()=>Linking.openURL('https://wa.me/3335223278')} style={[styles.button, {backgroundColor: '#80A460'}]}>
                    <WhatsappIcon fill={colorIcon} width={sizeIcon} height={sizeIcon}/>
                    <Text style={styles.textButton}>Secretaria (33) 35223278</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Linking.openURL('https://instagram.com/catedralteo/')} style={[styles.button, {backgroundColor: '#8D4EBE'}]}>
                    <InstagramIcon fill={colorIcon} width={sizeIcon} height={sizeIcon}/>
                    <Text style={styles.textButton}>Instagram @catedralteo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Linking.openURL('https://www.facebook.com/catedralteo/?locale=pt_BR')} style={[styles.button, {backgroundColor: '#6B9ED9'}]}>
                    <FacebookIcon fill={colorIcon} width={sizeIcon} height={sizeIcon}/>
                    <Text style={styles.textButton}>Facebook @catedralteo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Linking.openURL('https://dioceseteofilotoni.com.br')} style={[styles.button, {backgroundColor: '#AA9A48'}]}>
                    <BrowserIcon fill={colorIcon} width={sizeIcon} height={sizeIcon}/>
                    <Text style={styles.textButton}>dioceseteofilotoni.com.br</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}