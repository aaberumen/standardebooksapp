import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight, Linking } from 'react-native';
import '../src/App.css';

const BookCard = (props) => {
  return (
    <View>
    <Image source={{ uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width: 200, height: 200 }} />
     <Text style={styles.text}> {props.title}</Text>
     <Text style={styles.text}> {props.author}</Text>
     <Text style={styles.text}> {props.year}</Text>
    </View>
  );
}

export default function Home({navigation}) {
  return (

  <SafeAreaView  style={styles.container}>
      <View style={styles.header}>

      <Text style={styles.h1}>Home</Text>
      <Image
            source={{
              uri:'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={styles.pfp}
          />
      </View>
     <ScrollView style={styles.body}>
     <View style={styles.quoteCard}>
     <Text style={styles.text}>Daily Quote</Text>
     <Text style={styles.text}>"Be yourself, everyone else is already taken."</Text>
     <Text style={styles.text}>Oscar Wilde, 1983</Text>
     </View>
     <Text style={styles.h2}>Recommended</Text>
     <View>
     <ScrollView horizontal="true">
     <BookCard title="Maru" author="Jonathan Pageau" year="1850" />
     <BookCard title="The One" author="Jude Potter" year="1980" />
     <BookCard title="Moby Dick" author="Jean Peter" year="1666" />
     <BookCard title="Killer Whale" author="Jon Pepper" year="2021" />
     </ScrollView>
     </View>

     <Text style={styles.h2}>New Releases</Text>
     <View>
     <ScrollView horizontal="true">
     <BookCard title="Maru" author="Jonathan Pageau" year="1850" />
     <BookCard title="The One" author="Jude Potter" year="1980" />
     <BookCard title="Moby Dick" author="Jean Peter" year="1666" />
     <BookCard title="Killer Whale" author="Jon Pepper" year="2021" />
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
    fontSize:25,
    fontFamily: 'Ohno',
  },
h2: {
  fontSize:20,
  fontWeight:"bold",
  paddingTop:20,
  paddingBottom:20,
  fontFamily:'Inter',
},
    body: {
      padding: 20,
    },
  quoteCard: {
    backgroundColor: 'lightblue',
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
    },
    scroll: {
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
},
  logo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
  },
});
