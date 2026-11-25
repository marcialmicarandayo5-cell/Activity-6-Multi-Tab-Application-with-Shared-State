
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppProvider } from './AppContext';
import ShopScreen from './ShopScreen';
import CartScreen from './CartScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: true,

            headerStyle: {
              backgroundColor: '#2563EB',
            },

            headerTintColor: '#FFFFFF',

            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },

            tabBarIcon: ({ focused }) => {

              let icon;

              if (route.name === 'Shop') {
                icon = '🛍️';
              } else if (route.name === 'Cart') {
                icon = '🛒';
              }

              return (
                <Text style={{
                  fontSize: focused ? 25 : 22,
                }}>
                  {icon}
                </Text>
              );
            },

            tabBarActiveTintColor: '#2563EB',
            tabBarInactiveTintColor: '#94A3B8',

            tabBarStyle: {
              height: 70,
              paddingTop: 8,
              paddingBottom: 8,
              backgroundColor: '#FFFFFF',
              borderTopWidth: 1,
              borderTopColor: '#E2E8F0',
              elevation: 8,
            },

            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 'bold',
            },
          })}
        >

          <Tab.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              title: 'My Shop',
              tabBarLabel: 'Shop',
            }}
          />

          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              title: 'My Cart',
              tabBarLabel: 'Cart',
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
