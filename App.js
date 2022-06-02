import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Search from './Ventanas/Search';
import Log_In from './Ventanas/Log_In';
import Sign_Up from './Ventanas/Sign_Up';
import Home from './Ventanas/Home';
import MyBooks from './Ventanas/MyBooks';
import { render } from 'react-dom';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await fetchFonts();
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <NavigationContainer>
        <View onLayout={onLayoutRootView}></View>
        <TabBar />
    </NavigationContainer>
  );
}


const Tab = createMaterialBottomTabNavigator();


function TabBar()  {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fafafa"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#50B9E1', paddingTop: 15 }}
    >
      <Tab.Screen
        name="Home_Books"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MyBooks"
        component={MyBooksStack}
        options={{
          tabBarLabel: 'My Books',
          tabBarStyle: {display: "none"},
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-multiple" color={color} size={26}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();



function HomeStack() {
  return (
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="Log In" component={Log_In} />
        <Stack.Screen name="Sign Up" component={Sign_Up} />
      </Stack.Navigator>

      )
}

function MyBooksStack() {
  return (
    
      <Stack.Navigator initialRouteName="MyBooks">
        <Stack.Screen options={{headerShown: false}} name="My Books" component={MyBooks} />
        <Stack.Screen name="Log In" component={Log_In} />
        <Stack.Screen name="Sign Up" component={Sign_Up} />
      </Stack.Navigator>
  );
}





const fetchFonts = () => {
  return Font.loadAsync({
    'Inter': require('./src/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./src/fonts/Inter-Bold.ttf'),
    'Ohno': require('./src/fonts/OhnoBlazeface-12Point.ttf')
  });
};


