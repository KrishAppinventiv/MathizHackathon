import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import {ScreenNames} from '../screenNames';
import Profile from '../../screens/profile';
import Discover from '../../screens/discover';
import LeaderBoard from '../../screens/leaderboard';
import { Image, View } from 'react-native';
import { Images } from '../../assets';
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const route = useRoute();
  const name = route.params.name;
  console.log(name)
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        shadowColor: 'rgba(0,0,0,.1)',
        shadowOpacity: 6,
      },
    }}>
      <Tab.Screen
        component={Home}
        name={ScreenNames.Home}
        options={{tabBarIcon: ({focused}) => (
            
          <View style={{marginTop: 10}}>
            <Image source={Images.homeInact} style={{height: 20, width: 20, tintColor:focused? "black":"grey"}} resizeMode='contain'/>
          </View>
   ) }}
      />

<Tab.Screen
        component={Discover}
        name={ScreenNames.Discover}
        options={{tabBarIcon: ({focused}) => (
            
          <View style={{marginTop: 10}}>
            <Image source={Images.searchInact} style={{height: 20, width: 20, tintColor:focused? "black":"grey"}} resizeMode='contain'/>
          </View>
   ) }}
      />
       <Tab.Screen
        component={LeaderBoard}
        name={ScreenNames.LeaderBoard}
        options={{tabBarIcon: ({focused}) => (
            
          <View style={{marginTop: 10}}>
            <Image source={Images.leaderInact} style={{height: 20, width: 20, tintColor:focused? "black":"grey"}} resizeMode='contain'/>
          </View>
   ) }}
      />
      <Tab.Screen
        component={Profile}
        name={ScreenNames.Profile}
        options={{tabBarIcon: ({focused}) => (
            
          <View style={{marginTop: 10}}>
            <Image source={Images.profileInact} style={{height: 20, width: 20, tintColor:focused? "black":"grey"}} resizeMode='contain'/>
          </View>
   ) }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
