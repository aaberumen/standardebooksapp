import { StyleSheet, View, Image, Text, TextInput, Pressable, Linking } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Log_In from './Log_In';
import Home from './Home';

export default function Sign_Up({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Standard Ebooks.</Text>
            <TextInput placeholder="  Name " style={styles.inputBox} />
            <TextInput placeholder="  Email" style={styles.inputBox} />
            <TextInput placeholder="  Password" secureTextEntry={true} style={styles.inputBox} />

            <View style={styles.checkboxContainer}>

            <BouncyCheckbox
  size={25}
  fillColor="#50b9e1"
  unfillColor="#fafafa"
  text="I want to receive news and offers"
  textStyle={{fontSize: 12, alignSelf:"center", textDecorationLine: "none", color:"black"}}
  iconStyle={{ borderColor: "grey" }}
  onPress={(isChecked: boolean) => {}}
/>

            </View>

            <Text style={styles.linkText}>
                By creating an account you are agreeing our Terms and Services policies.
            </Text>
            <Pressable style={[styles.boton]}
                onPress={() => navigation.navigate('Home')}>
                <Text style={[styles.botonText]}>Create Account</Text>
            </Pressable>
            <Text style={styles.linkText}
                onPress={() => navigation.navigate('Log In')}
                >
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
    inputBox: {
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
        marginTop: 50, //MASMARGENJEJEJ
        borderWidth: 2,
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
        fontSize: 12,
        width: '80%',
        marginTop: 20,

    },
    checkboxContainer: {
  flexDirection: "row",
  marginBottom: 20,
},
checkbox: {
  alignSelf: "center",
},
});
