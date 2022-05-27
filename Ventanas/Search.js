import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight, Linking, Pressable, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CategoryCard = (props) => {
  return (
    <View style={styles.categories}>
    <Image source={{ uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width: 150, height: 200 }} />
     <Text style={styles.text}> {props.name}</Text>
    </View>
  );
}

export default function Search({navigation}) {
  return (

  <SafeAreaView  style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.h1}>Search</Text>
      <TextInput placeholder="Search" style={styles.text} />
        <MaterialCommunityIcons name="home" color={"green"} size={26} />
      </View>
     <ScrollView style={styles.scrollView} contentContainerStyle={styles.body}>
     <Text style={styles.h2}>Categories</Text>
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
     <CategoryCard />
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
  scrollView:{

  },
  contentContainerStyle: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
        flex: 1,
          flexDirection:"row",
            flexWrap:"wrap",
    },
  categories: {
    justifyContent:"center",
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
