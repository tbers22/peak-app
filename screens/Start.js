import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }



const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

