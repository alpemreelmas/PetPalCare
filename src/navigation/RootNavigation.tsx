import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {StyleSheet} from 'react-native';
import {
  HomeIcon as HomeIconOutline,
  Squares2X2Icon as Square2X2IconOutline,
  ListBulletIcon as ListBulletIconOutline,
} from 'react-native-heroicons/outline';
import {
  HomeIcon as HomeIconSolid,
  Squares2X2Icon as Square2X2IconSolid,
  ListBulletIcon as ListBulletIconSolid,
} from 'react-native-heroicons/solid';
import {
  BottomNavIconSize,
  BottomNavActiveColor,
  BottomNavInActiveColor,
} from '../lib/constants';
import Header from '../components/Header';

const RootNavigator = () => {
  const RootStack = createBottomTabNavigator();

  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => <Header />,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#000000',
          bottom: 25,
          left: 50,
          right: 50,
          borderRadius: 30,
          height: 60,
          ...styles.shadow,
        },
        tabBarShowLabel: false,
      }}>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeIconSolid
                size={BottomNavIconSize}
                color={BottomNavActiveColor}
              />
            ) : (
              <HomeIconOutline
                size={BottomNavIconSize}
                color={BottomNavInActiveColor}
              />
            ),
        }}
      />
      <RootStack.Screen
        name="Services"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Square2X2IconSolid
                size={BottomNavIconSize}
                color={BottomNavActiveColor}
              />
            ) : (
              <Square2X2IconOutline
                size={BottomNavIconSize}
                color={BottomNavInActiveColor}
              />
            ),
        }}
      />
      <RootStack.Screen
        name="History"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <ListBulletIconOutline
                size={BottomNavIconSize}
                color={BottomNavActiveColor}
              />
            ) : (
              <ListBulletIconSolid
                size={BottomNavIconSize}
                color={BottomNavInActiveColor}
              />
            ),
        }}
      />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default RootNavigator;
