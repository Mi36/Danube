import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EntryScreen from '../screens/EntryScreen';

const Tab = createBottomTabNavigator();
const RouterStack = createNativeStackNavigator();

export const InnerStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="LOGIN"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="HOME" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <RouterStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          screenOrientation: 'portrait',
        }}>
        <RouterStack.Screen name="ENTRY" component={EntryScreen} />
        <RouterStack.Screen name="INNER" component={InnerStack} />
      </RouterStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
