import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BooksScreen from './screens/Books';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View>
      <Text>Home</Text>
      <Text>Search</Text>
      <Text>My Books</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
