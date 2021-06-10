import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { MyButton } from '../../Components/MyButton/MyButton';


export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Text>Olá Bem vindo a HOME!</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        width: '100%',
        textAlign: 'center',
        marginBottom: 16
    },
    buttonClickMe: {
        marginTop: 16,
        backgroundColor: 'red',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonClickMe: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imcObesidadeIII: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18
    },
    imcNormal: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 18
    }
});
