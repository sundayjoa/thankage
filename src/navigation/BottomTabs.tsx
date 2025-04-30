import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Heart from '../screens/Heart';
import Camp from '../screens/Camp';
import Alert from '../screens/Alert';
import Settings from '../screens/Settings';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            if (route.name === '홈')
              return (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={size}
                  color={color}
                />
              );
          
            if (route.name === '하트획득')
              return (
                <FontAwesome
                  name={focused ? 'heart' : 'heart-o'}
                  size={size}
                  color={color}
                />
              );
          
            if (route.name === '캠프탐색')
              return (
                <Ionicons
                  name={focused ? 'speedometer' : 'speedometer-outline'}
                  size={size}
                  color={color}
                />
              );
          
            if (route.name === '알림')
              return (
                <Ionicons
                  name={focused ? 'notifications' : 'notifications-outline'}
                  size={size}
                  color={color}
                />
              );
          
            if (route.name === '설정')
              return (
                <Ionicons
                  name={focused ? 'settings' : 'settings-outline'}
                  size={size}
                  color={color}
                />
              );
          },

        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 10, fontWeight: focused ? 'bold' : 'normal', color: focused ? '#000' : '#888' }}>
            {route.name}
          </Text>
        ),
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
      })}
    >
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="하트획득" component={Heart} />
      <Tab.Screen name="캠프탐색" component={Camp} />
      <Tab.Screen name="알림" component={Alert} />
      <Tab.Screen name="설정" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
