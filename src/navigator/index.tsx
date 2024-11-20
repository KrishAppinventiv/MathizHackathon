import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {ScreenNames} from './screenNames';
import BottomTabNavigator from './bottomtab';
import SplashScreen from '../screens/splashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {TestScreen} from '../screens/test';
import Tutorial from '../screens/tutorial';
import {ResultScreen} from '../screens/result';
import Level from '../screens/level';
import Intro from '../screens/intro';

const Stack: any = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef: any = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          component={SplashScreen}
          name={ScreenNames.Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Tutorial}
          name={ScreenNames.Tutorial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={TestScreen}
          name={ScreenNames.TestScreen}
          options={{headerShown: true}}
        />

        <Stack.Screen
          component={ResultScreen}
          name={ScreenNames.Result}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Level}
          name={ScreenNames.Level}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Intro}
          name={ScreenNames.Intro}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Home}
          name={ScreenNames.Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
