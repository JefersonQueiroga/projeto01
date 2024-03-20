import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import { Item } from '../../components/item';

export function Home() {
    function handleSendData(){
        console.log("Test Function!!!!")
    }  

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Testando</Text>
            <StatusBar style="auto" />
            <View style={styles.form}>
                <TextInput style={styles.input}/>
                <TouchableOpacity onPress={handleSendData} style={styles.button}>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
            <Item name="Jeferson" color='green'/>
            <Item name="Carlos"/>
            <Item name="Pedro"/>


        </View>
    );
}

