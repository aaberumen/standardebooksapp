import { StyleSheet, View, Image, Text, TextInput, Pressable, Linking, Button } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { MyBook } from './MyBookCard';


export default function Book({ navigation }) {
    return (
        <View style={styles.container}>



            <MyBook style={styles.myBookCard} img={require('../src/imgs/L2.png')} />


            <View style={styles.containerbook}>
            <View style={[styles.boton_temas]}>
                <Text style={[styles.btn_temas]}>FICTION</Text>
            </View>
            <View style={[styles.boton_temas]}>
                <Text style={[styles.btn_temas]}>SATIRE</Text>
            </View>
              </View>




            <Text style={styles.titleText}>Metamorphosis</Text>
            <Text style={styles.subTitleText}>Franz Kakfa</Text>


            <Text style={styles.sinopsis}>SINOPSIS</Text>
            <Text style={styles.sinopsistext}>“Gregor Samsa, a traveling salesman living with his family in Prague, wakes up one day to find himself transformed, without rhyme or reason, into an indescribable creature. Understandably, Gregor Samsa's life changes abruptly and dramatically and the novel focuses in how this change affects the mind of the protagonist and the ones around him".</Text>
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
        fontSize: 30,
        color: 'black',
        marginBottom: 8, //MARGEN TITULO
        fontFamily: 'Ohno',
        alignSelf: 'center',
    },
    subTitleText:
    {
        fontSize: 18,
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
        padding: 15,
        width: '50%',
        borderRadius: 50,
        borderWidth: 2,
        backgroundColor: '#FA784A',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20, //MASMARGENJEJEJ
    },
    btn_Download: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Inter',
        justifyContent:'center',
    },
    boton_temas: {
        height: 35,
        width: '25%',
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: '#FFC600',
        marginHorizontal: '2%',
        marginTop: "2%",
        justifyContent:'center',
    },
    btn_temas: {
        fontSize: 11,
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
