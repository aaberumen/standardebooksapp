import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight, Linking, Pressable, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CategoryCard } from '../Ventanas/CategoryCard';


export default function Search({navigation}) {
  return (

  <SafeAreaView  style={styles.container}>
      <View style={styles.header}>

      <Text style={styles.h1}>Search</Text>
      <View style={styles.inputBox}>
        <MaterialCommunityIcons name="magnify" color={"black"} size={26} />
        <TextInput placeholder= "Search" />
      </View>
      </View>
     <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
     <Text style={styles.h2}>Categories</Text>
     <View style={styles.body} >
     <CategoryCard  nav={() => navigation.navigate('Fiction')} img={require('../src/imgs/Classics.png')} />
     <CategoryCard  nav={() => navigation.navigate('Fiction')} img={require('../src/imgs/Fantasy.png')} />
     <CategoryCard  nav={() => navigation.navigate('Fiction')} img={require('../src/imgs/Fiction.png')} />
     <CategoryCard  nav={() => navigation.navigate('Fiction')} img={require('../src/imgs/Horror.png')} />
     <CategoryCard  nav={() => navigation.navigate('Fiction')} img={require('../src/imgs/Mistery.png')} />
     <CategoryCard  nav={() => navigation.navigate('Fiction')} img={require('../src/imgs/Romance.png')} />
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

    scrollView: {
      backgroundColor: '#fff',
    },
text: {
  fontSize:14,
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily:'Inter',
},

  box: {
    width: 50,
    height: 50,
  },
});
