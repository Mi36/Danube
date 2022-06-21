import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EntryScreen from '../screens/EntryScreen';
import WebScreen from '../screens/WebScreen';

const Tab = createBottomTabNavigator();
const RouterStack = createNativeStackNavigator();

export const InnerStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="LOGIN"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarLabel: 'MyAccount',
          tabBarIcon: ({color, size}) => (
            <EvilIcons name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <RouterStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          screenOrientation: 'portrait',
        }}>
        <RouterStack.Screen name="ENTRY" component={EntryScreen} />
        <RouterStack.Screen name="WEB" component={WebScreen} />
        <RouterStack.Screen name="INNER" component={InnerStack} />
      </RouterStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
