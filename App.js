import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import TasksScreen from './src/screens/Tasks';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TasksScreen/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      paddingTop: 30,
      width:"100%",
      height:"100%",
    }
});
