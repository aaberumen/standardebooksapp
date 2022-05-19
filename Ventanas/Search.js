import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight, Linking, Pressable } from 'react-native';
import '../src/App.css';

const CategoryCard = (props) => {
  return (
    <View>
    <Image source={{ uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width: 200, height: 200 }} />
     <Text style={styles.text}> {props.name}</Text>
    </View>
  );
}

export default function Search({navigation}) {
  return (

  <SafeAreaView  style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.h1}>Search</Text>
      </View>
     <ScrollView style={styles.body}>
     <Text style={styles.h2}>Categories</Text>
     <View style={styles.categories}>
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
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
    justifyContent: 'flex-start',
    padding:20,
  },
  h1: {
    fontSize:35,
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
  categories: {
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
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
  },

  box: {
    width: 50,
    height: 50,
  },
});
