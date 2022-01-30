import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PeakAPI } from './src/api';
import Start from './src/screens/Start';
import FeedScreen from './src/screens/FeedScreen';
import ArchiveScreen from './src/screens/ArchiveScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SignInScreen from './src/screens/SignInScreen';
import theme from './src/config/theme'

export default class App extends React.Component {
  state = {};
  

  constructor(props) {
      super(props);
      this.state = {
        loading: true,
        loggedIn: false,
      }
    }
    


  async componentDidMount() {
    // await AsyncStorage
    // if (PeakAPI.loadAccessToken()){
    //   this.setState({ loading: false, loggedIn: true })
    // }
    this.setState({loading:false, loggedIn: false})
  }

  onSignIn(){
    console.warn("onsignin")
    this.setState({ loading: false, loggedIn: true })
  }

    
  render() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer style={styles.container}>
      {this.state.loading ? (
        <Text>LOADING</Text>
      ) : this.state.loggedIn ? (
      <Tab.Navigator tabBarOptions={{showIcon: true, backgroundColor: theme.palette.white}} screenOptions={{tabBarActiveTintColor: theme.palette.black}}>
        <Tab.Screen name="Archive" component={ArchiveScreen}  options={{ tabBarIcon:(tabInfo) => (<Ionicons name="folder-open-sharp" size={25} />)}}/>
        <Tab.Screen name="Feed" component={FeedScreen} options={{ tabBarIcon:(tabInfo) => (<Ionicons name="home-sharp" size={25} />)}}/>       
        <Tab.Screen name="Start" component={Start} options={{ tabBarIcon:(tabInfo) => (<Ionicons name="caret-forward-circle" size={35} />)}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon:(tabInfo) => (<Ionicons name="person-sharp" size={25} />)}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon:(tabInfo) => (<Ionicons name="ios-settings-sharp" size={25} />)}}/>
      </Tab.Navigator>
    
      ) : (
        <SignInScreen onSignIn={this.onSignIn} />
      )}
     </NavigationContainer>
  );
} }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
