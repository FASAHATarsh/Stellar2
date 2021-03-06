import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SpaceCrafts from "./screens/SpaceCrafts";
import DailyPic from "./screens/DailyPic";
import StarMap from "./screens/StarMap";
import Home from "./screens/Home";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='StarMap' component={StarMap}/>
        <Stack.Screen name='DailyPic' component={DailyPic}/>
        <Stack.Screen name='SpaceCrafts' component={SpaceCrafts}/>
        
      </Stack.Navigator>
    </NavigationContainer>
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
