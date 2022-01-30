import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../config/theme'
export default function FeedScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.palette.primary}}>
        <Text style={styles.title}>Home!</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'stretch',
      marginHorizontal: theme.spacing.unit * 6,
      flex: 1,
    },
    title: {
      color: theme.palette.primaryText,
      fontSize: theme.typography.fontSize.larger,
      fontFamily: theme.typography.fontFamily.semibold,
      textAlign: 'left',
      alignSelf: 'flex-start',
      marginVertical: theme.spacing.unit * 4,
    },
    buttonContainer: {
      justifyContent: 'flex-end',
      backgroundColor: theme.palette.black,
      paddingTop: theme.spacing.unit * 2,
      flex: 1,
    },
    button: {
      marginBottom: theme.spacing.unit * 4,
    }
  })