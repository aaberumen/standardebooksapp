import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight, Linking, Pressable } from 'react-native';
import { BookCard } from '../Ventanas/BookCard';
//import Log_In from './Log_In';


export default function Home({navigation}) {
  return (


  <SafeAreaView  style={styles.container}>
      <View style={styles.header}>

      <Text style={styles.h1}>Home</Text>
      <Pressable style={[styles.boton]}
          onPress={() => navigation.navigate('Log In')}>
          <Image
                source={require('../src/imgs/UserPFP.jpg')}
                style={styles.pfp}
              />
      </Pressable>

      </View>
     <ScrollView style={styles.scrollView} contentContainerStyle={styles.body} >
     <View style={styles.quoteCard}>
     <Text style={styles.text}>Daily Quote</Text>
     <Text style={styles.text}>"Be yourself, everyone else is already taken."</Text>
     <Text style={styles.text}>Oscar Wilde, 1983</Text>
     </View>
     <Text style={styles.h2}>Recommended</Text>
     <View>
     <ScrollView nestedScrollEnabled={true} horizontal={true}>
     <BookCard img={require('../src/imgs/L1.png')} title="The Picture of Dorian Grey" author="Oscar Wilde" year="1890" />
     <BookCard img={require('../src/imgs/L2.png')} title="Metamorphosis" author="Franz Kakfa" year="1915" />
     <BookCard img={require('../src/imgs/L3.png')} title="The Other Black Girl" author="Zayika D. Harris Peter" year="2021" />
     </ScrollView>
     </View>

     <Text style={styles.h2}>New Releases</Text>
     <View>
     <ScrollView nestedScrollEnabled={true} horizontal={true}>
     <BookCard img={require('../src/imgs/L6.png')} title="Atomic Habits" author="James Clear" year="2018" />
     <BookCard img={require('../src/imgs/L7.png')} title="Donde los Árboles Cantan" author="Laura Gallego" year="2011" />
     <BookCard img={require('../src/imgs/L8.png')} title="Little Women" author="Louisa May Alcott" year="1868" />
     <BookCard img={require('../src/imgs/L9.png')} title="Pride and Prejudice" author="Jane Austen" year="1813" />
     </ScrollView>
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

h3: {
fontSize:17,
paddingTop:10,
paddingBottom:2,
fontFamily:'Inter-Bold',
},
    body: {
      padding: 20,
    },
  quoteCard: {
    backgroundColor: '#50b9e1',
    justifyContent: 'center',
    alignSelf: 'center',
    padding:20,
    marginBottom:30,
    borderRadius:20,
    borderWidth:3,
  },
    bookCard: {
      flex:1,
      flexDirection:"column",
      paddingRight:20,
    },
    scrollView:{

    },
    contentContainerStyle: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
text: {
  fontSize:14,
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily:'Inter',
  paddingBottom:2,
},
  logo: {
  },

  box: {
    width: 50,
    height: 50,
  },
});
