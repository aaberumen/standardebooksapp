import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight, Linking, Pressable } from 'react-native';

export const CategoryCard = (props) => {
  return (
    <View style={styles.categories}>
    <Pressable onPress={props.nav}>
    <Image source={props.img} style={{ width: 150, height: 203 }} />
     <Text style={styles.text}> {props.name}</Text>
     </Pressable>
    </View>
  );
  }

const styles = StyleSheet.create({

  categories: {
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
