import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { PeakAPI } from '../api';
import Field from '../components/Field';
import theme from '../config/theme';
import Logo from '../components/Logo';
export default class SignInScreen extends React.Component{
  
  state;

  constructor(props) {
    super(props);
    this.state = {
      "email": "",
      "password": "",
      tabs: false
    }
  }
  signIn() {
    console.warn("before");
    //await PeakAPI.login(this.state.email,this.state.password);
    console.warn('after');
    this.props.onSignIn();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.palette.primary}}>
        <Logo/>
        <Field style={styles.text} value={this.state.email} placeholder="Enter your email" onChangeText={(text) => this.setState({ email: text })} />
        <Field style={styles.text} value={this.state.password} placeholder="Enter your password" onChangeText={(text) => this.setState({ password: text })} />
        <Button style={styles.buttonContainer} color={theme.palette.blue} title='Log In' onPress={this.signIn}></Button>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: theme.spacing.unit * 6,
    flex: 1,
  },
  text: {
    marginHorizontal: theme.spacing.unit * 6,
    color: theme.palette.black,
    alignItems: 'stretch',
    fontSize: theme.typography.fontSize.smallish,
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