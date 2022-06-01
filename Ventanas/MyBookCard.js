import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight, Linking, Pressable } from 'react-native';

export const MyBookCard = (props) => {
  return (
    <View style={styles.myBookCard}>
    <Image source={props.img} style={{ width: 150, height: 203 }} />
     <Text style={styles.h3}> {props.title}</Text>
     <Text style={styles.text}> {props.author}</Text>
     <Text style={styles.text}> {props.year}</Text>
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
    myBookCard: {
      justifyContent:"center",
      padding:10,
    },

text: {
  fontSize:14,
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily:'Inter',
  paddingBottom:2,
},
});
