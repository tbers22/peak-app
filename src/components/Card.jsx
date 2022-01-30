import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../config/theme';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.white,
    paddingVertical: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    paddingHorizontal: theme.spacing.unit * 3,
    alignSelf: 'stretch',
  }
})