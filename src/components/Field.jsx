import React from 'react';
import { TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';
import theme from '../config/theme';

export default class Field extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    }
  }

  render() {
    return (
      <TextInput
        style={[styles.field,
          this.state.focused ? styles.focused : null,
          this.props.style
        ]}
        value={this.props.value}
        onFocus={() => this.setState({ focused: true })}
        onEndEditing={() => this.setState({ focused: false })}
        // keyboardType="text"
        placeholder={this.state.focused ? null : this.props.placeholder}
        placeholderTextColor={theme.palette.secondaryText}
        onChangeText={this.props.onChangeText}
      />
    )
  }
}

const styles = StyleSheet.create({
  field: {
    height: theme.spacing.unit * 10,
    borderWidth: 2,
    marginVertical: theme.spacing.unit * 0.5,
    borderRadius: theme.spacing.unit,
    borderColor: theme.palette.blue,
    textAlign: 'center',
    fontSize: theme.typography.fontSize.larger,
    fontFamily: theme.typography.fontFamily.semibold,
    color: theme.palette.primaryText,
  },
  focused: {
    borderColor: theme.palette.primary,
    borderWidth: theme.spacing.unit * 0.3,
  },
})