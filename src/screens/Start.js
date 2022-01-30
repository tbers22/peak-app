import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../config/theme'
import Logo from '../components/Logo';
import Camera from '../../Camera';import {SafeAreaView} from 'react-native';

export default function Start() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.palette.primary}}>
        <Logo/>
        <Text color={theme.palette.orange}> Camera loading to take a picture of yourself to be identifiable on the slopes! </Text>
        <Camera/>
      </SafeAreaView>
    );
  }



const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

