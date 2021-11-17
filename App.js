import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import TasksScreen from './src/screens/Tasks';


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <TasksScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
