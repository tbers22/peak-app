import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Camera from '../Camera';import {SafeAreaView} from 'react-native';

export default function Start() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.palette.primary}}>
        <Camera/>
      </View>
    );
  }



const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

