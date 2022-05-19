import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { Pressable } from 'react-native';
import { Linking } from 'react-native';



export default function Sign_Up({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Standard Ebooks.</Text>
            <TextInput placeholder="  Name " style={styles.text} />
            <TextInput placeholder="  Email" style={styles.text} />
            <TextInput placeholder="  Password" secureTextEntry={true} style={styles.text} />

            <div className="topping" width="80%">
                <input type="checkbox" id="topping" name="topping"
                    value="Paneer"/>
                <Text style={styles.linkText} >
                I want to receive news and offers
            </Text>
            </div>

            <Text style={styles.linkText}>
                By creating an account you are agreeing our Terms and Services policies.
            </Text>
            <Pressable style={[styles.boton]}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={[styles.botonText]}>Create Account</Text>
            </Pressable>
            <Text style={styles.linkText}
                onPress={() => navigation.navigate('Log_In')}>
                Already have an account? Log In
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
        fontFamily: 'Inter',

    },
    boton: {
        height: 40,
        width: '50%',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#50B9E1',
        justifyContent: 'center',
        marginTop: 80, //MASMARGENJEJEJ
        borderWidth: 2,
    },
    botonText: {
        fontSize: 18,
        lineHeight: 40,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    linkText:
    {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 12,
        width: '80%',
    },
});
