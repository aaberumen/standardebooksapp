import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const BooksScreen() => {
  return (
    <View style={styles.container}>
      <Text>My Books</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bookCard: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
