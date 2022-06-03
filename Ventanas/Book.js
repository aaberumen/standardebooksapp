import { StyleSheet, View, Image, Text, TextInput, Pressable, Linking, Button } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { MyBook } from './MyBookCard';


export default function Book({ navigation }) {
    return (
        <View style={styles.container}>

 

            <MyBook style={styles.myBookCard} img={require('../src/imgs/Classics.png')} />


            <View style={styles.containerbook}>
            <View style={[styles.boton_temas]}>
                <Text style={[styles.btn_temas]}>FICTION</Text>
            </View>
            <View style={[styles.boton_temas]}>
                <Text style={[styles.btn_temas]}>SATIRE</Text>
            </View>
              </View>




            <Text style={styles.titleText}>Moby Dick</Text>
            <Text style={styles.subTitleText}>Herman Melville</Text>




        


            <Text style={styles.sinopsis}>SINOPSIS</Text>
            <Text style={styles.sinopsistext}>“It is the horrible texture of a fabric that should be woven of ships’ cables and hawsers. A Polar wind blows through it, and birds of prey hover over it.”

            ore than just a novel of adventure, more than an encyclopaedia of whaling lore and legend, the book can be seen as part of its author’s lifelong meditation on America. Written with wonderfully redemptive humour, Moby-Dick is also a profound inquiry into character, faith, and the nature of perception.</Text>
            <Pressable style={[styles.boton]}>
                <Text style={[styles.btn_Download]}>Download</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: '10%',
        paddingTop: '4%',
    },
    titleText: {
        fontSize: 35,
        color: 'black',
        marginBottom: 8, //MARGEN TITULO
        fontFamily: 'Ohno',
        alignSelf: 'center',
    },
    subTitleText:
    {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Inter-Bold',
        alignSelf: 'center',
    },
    sinopsis: {
        fontSize: 13,
        color: 'black',
        fontFamily: 'Inter',
        textAlign: 'left',
        marginBottom: '4%',
        marginTop: '4%',

    },
    sinopsistext: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Inter',
        textAlign: 'justify',

    },
    boton: {
        height: 50,
        width: '55%',
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: '#FA784A',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20, //MASMARGENJEJEJ
    },
    btn_Download: {
        fontSize: 18,
        lineHeight: 48,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Inter',
    },
    boton_temas: {
        height: 35,
        width: '30%',
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: '#FFC600',
        marginHorizontal: '2%',
        marginTop: "2%",
    },
    btn_temas: {
        fontSize: 14,
        lineHeight: 34,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Inter',
    },
    myBookCard:
    {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100',
    },
    containerbook:
    {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    }

});
