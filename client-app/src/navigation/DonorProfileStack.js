import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import PortfolioForm from '../screens/DonorProfile';

const DonorProfileStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Form" component={PortfolioForm} />
    </Stack.Navigator>
  );
};

export default DonorProfileStack;

const styles = StyleSheet.create({});
