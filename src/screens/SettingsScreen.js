import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }



const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})