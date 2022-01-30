import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Start from './screens/Start'
import FeedScreen from './screens/FeedScreen'
import ArchiveScreen from './screens/ArchiveScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import theme from './config/theme'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{showIcon: true}} screenOptions={{tabBarActiveTintColor: theme.palette.black}}>
        <Tab.Screen name="Archive" component={ArchiveScreen}  options={{ tabBarIcon:(tabInfo) => (<Ionicons name="folder-open-sharp" size={25} />)}}/>
        <Tab.Screen name="Feed" component={FeedScreen} options={{ tabBarIcon:(tabInfo) => (<Ionicons name="home-sharp" size={25} />)}}/>       
        <Tab.Screen name="Start" component={Start} options={{ tabBarIcon:(tabInfo) => (<Ionicons name="caret-forward-circle" size={35} />)}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon:(tabInfo) => (<Ionicons name="person-sharp" size={25} />)}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon:(tabInfo) => (<Ionicons name="ios-settings-sharp" size={25} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
