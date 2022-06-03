import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight, Linking, Pressable } from 'react-native';

export const BookCard = (props) => {
  return (
    <View style={styles.bookCard}>
      <Pressable onPress={props.nav}>
    <Image source={props.img} style={{ width: 150, height: 203 }} />
    </Pressable>
    <View style ={styles.textWrap}>
     <Text style={styles.h3}> {props.title}</Text>
     <Text style={styles.text}> {props.author}</Text>
     <Text style={styles.text}> {props.year}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

h3: {
fontSize:17,
paddingTop:10,
paddingBottom:2,
fontFamily:'Inter-Bold',
},

    bookCard: {
      flex:1,
      paddingRight:20,

    },
    textWrap: {
      flex:1,
      flexWrap:"wrap",
      width:150,
      flexDirection:"row"
    },

text: {
  fontSize:14,
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily:'Inter',
  paddingBottom:2,
},
});
