import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default class Logo extends React.PureComponent {

  render() {
    return <Image
      style={[this.props.style,
        styles.logo,
        this.props.small ? styles.small : null]}
      source={require('../assets/peak_logo_4.png')}
    />
  }
}

const styles = StyleSheet.create({
  small: {
    height: theme.spacing.unit * 7,
  },
  logo: {
    height: theme.spacing.unit * 9,
    resizeMode: 'contain',
    margin: 50,
  }
})