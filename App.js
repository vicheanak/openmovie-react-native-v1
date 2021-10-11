import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <Navigation />
          <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
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
