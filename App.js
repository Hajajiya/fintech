
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Components/SplashScreen';
import RegisterScreen from './Components/RegisterScreen';
import LoginScreen from './Components/LoginScreen';
import SigninScreen from './Components/SigninScreen';
import DashboardScreen from './Components/DashboardScreen';

const Stack = createNativeStackNavigator();



function App() {
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='splashScreen'>
      <Stack.Screen name='splashScreen' component={SplashScreen} options={{headerShown: false}} gestureEnabled={false}/> 
      <Stack.Screen name='registerScreen' component={RegisterScreen} options={{headerShown: false}} gestureEnabled={false}/> 
      <Stack.Screen name='loginScreen' component={LoginScreen} options={{headerShown: false}}/> 
      <Stack.Screen name='signinScreen' component={SigninScreen} options={{headerShown: false}}/> 
      <Stack.Screen name='dashboard' component={DashboardScreen} options={{headerShown: false}}/> 
      </Stack.Navigator>
  </NavigationContainer>
)
}

export default App;