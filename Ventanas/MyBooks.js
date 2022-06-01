import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight, Linking, Pressable, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MyBookCard } from '../Ventanas/MyBookCard';
import Log_In from './Log_In';

export default function MyBooks({navigation}) {
  return (

  <SafeAreaView  style={styles.container}>
  <View style={styles.header}>

  <Text style={styles.h1}>My Books</Text>

  <Pressable style={[styles.boton]}
      onPress={() => navigation.navigate('Log In')}>
      <Image
            source={require('../src/imgs/UserPFP.jpg')}
            style={styles.pfp}
          />
  </Pressable>
  </View>

     <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
     <View style={styles.body} >
     <MyBookCard img={require('../src/imgs/L1.png')} title="Maru" author="Jonathan Pageau" year="1850" />
     <MyBookCard img={require('../src/imgs/L2.png')} title="The One" author="Jude Potter" year="1980" />
     <MyBookCard img={require('../src/imgs/L3.png')} title="Moby Dick" author="Jean Peter" year="1666" />
     <MyBookCard img={require('../src/imgs/L1.png')} title="Maru" author="Jonathan Pageau" year="1850" />
     <MyBookCard img={require('../src/imgs/L2.png')} title="The One" author="Jude Potter" year="1980" />
     <MyBookCard img={require('../src/imgs/L3.png')} title="Moby Dick" author="Jean Peter" year="1666" />
     </View>
     </ScrollView>
     <StatusBar style="auto" />

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
  pfp:{
    width:50,
    height:50,
    borderRadius:50,
    borderWidth:3,
  },
  header: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:20,
  },
  scrollView:{

  },
  contentContainerStyle: {
    backgroundColor: '#fff',
    justifyContent: 'center',
      padding: 20,
  },
  h1: {
    fontSize:35,
    fontFamily: 'Ohno',
  },
h2: {
  fontSize:20,
  paddingTop:20,
  paddingBottom:20,
  fontFamily:'Inter-Bold',
},
inputBox:{
  fontSize: 18,
  padding: 12,
  backgroundColor: 'white',
  marginBottom: 10,
  marginTop: 20,
  borderWidth: 2,
  borderRadius: 20,
  width: "80%", //JEJE
  fontFamily: 'Inter',
  width:"100%",
  flexDirection:"row",
},
    body: {
        flex: 1,
          flexDirection:"row",
            flexWrap:"wrap",
            justifyContent: 'center',
    },
  categories: {
    justifyContent:"center",
    padding:10,
  },
    bookCard: {
      flex:1,
      flexDirection:"column",
    },
    scrollView: {
      backgroundColor: '#fff',
    },
text: {
  fontSize:14,
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily:'Inter',
},
  logo: {
  },

  box: {
    width: 50,
    height: 50,
  },
});
