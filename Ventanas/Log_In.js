import { StyleSheet, View, Image, Text, TextInput, Pressable, Linking } from 'react-native';
import { Component } from 'react/cjs/react.production.min';


export default function Log_In({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Standard Ebooks.</Text>
            <TextInput placeholder="  Username or Email" style={styles.text} />
            <TextInput placeholder="  Password" secureTextEntry={true} style={styles.text} />
            <Pressable style={[styles.boton]}
                onPress={() => navigation.navigate('Home')}>
                <Text style={[styles.botonText]}>Log In</Text>
            </Pressable>
            <Text style={styles.linkText}
                onPress={() => navigation.navigate('Sign Up')}>
                Forgot your password? | Create an account
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 35,
        color: 'black',
        marginBottom: 80, //MARGEN TITULO
        fontFamily: 'Ohno',
    },
    text: {
        fontSize: 18,
        padding: 12,
        backgroundColor: 'white',
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 20,
        width: "80%", //JEJE
        fontFamily:'Inter',

    },
    boton: {
        height: 40,
        width: '50%',
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: '#FA784A',
        justifyContent: 'center',
        marginTop: 80, //MASMARGENJEJEJ
    },
    botonText: {
        fontSize: 18,
        lineHeight: 40,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Inter-Bold',
    },
    linkText:
    {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 40,
        fontSize: 12,
    },
});
