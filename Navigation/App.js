import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import DetailsScreen from './Components/DetailsScreen/DetailsScreen';
import SettingsScreen from './Components/SettingsScreen/SettingsScreen';
import { Ionicons } from '@expo/vector-icons'; 
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let iconColor;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Details') {
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        iconColor = focused ? 'black' : color;

        return <Ionicons name={iconName} size={size} color={iconColor} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black', 
      inactiveTintColor: 'gray',
    }}
  >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Tab.Screen name="Details" component={DetailsScreen} options={{headerShown:false}} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;














// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SplashScreen from './Components/SplashScreen/SplashScreen';
// import LoginScreen from './Components/LoginScreen/LoginScreen';
// import SignUpScreen from './Components/SignUpScreen/SignUpScreen';
// import HomeScreen from './Components/HomeScreen/HomeScreen';
// import DetailsScreen from './Components/DetailsScreen/DetailsScreen';
// import SettingsScreen from './Components/SettingsScreen/SettingsScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function MainTabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Details" component={DetailsScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash">
//         <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;