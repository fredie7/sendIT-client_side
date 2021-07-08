import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Background, ImageBackground, Pressable } from 'react-native';


import Homescreen from './appComponents/Homescreen/Homescreen'
import Signupscreen from './appComponents/Signupscreen/Signupscreen'
import Signinscreen from './appComponents/Signinscreen/Signinscreen'
import Profilescreen from './appComponents/Profilescreen/Profilescreen'
import MakeOrderScreen from './appComponents/MakeOrderScreen/MakeOrderScreen'
import ViewOrder from './appComponents/ViewOrder/ViewOrder'
import CancelledOrders from './appComponents/CancelledOrders/CancelledOrders'
import DeliveredOrders from './appComponents/DeliveredOrders/DeliveredOrders'
import Admin from './appComponents/Admin/Admin'
import PendingOrders from './appComponents/PendingOrders/PendingOrders'
import Navigation from './appComponents/Navigation/Navigation'

const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerStyle: {
            backgroundColor: 'black'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textTransform: 'capitalize',
            // textAlign: 'center'
          }
        }}>
          <Stack.Screen name='Home' component={Homescreen} options={{title: 'Home'}}/>
          <Stack.Screen name='Profile' component={Profilescreen} options={{title: 'Profile'}}/>
          <Stack.Screen name='Signup' component={Signupscreen} options={{title: 'signup'}}/>
          <Stack.Screen name='Signin' component={Signinscreen} options={{title: 'signin'}}/>
          <Stack.Screen name='MakeOrder' component={MakeOrderScreen} options={{title: 'make order'}}/>
          <Stack.Screen name='ViewOrder' component={ViewOrder} options={{title: 'view order'}}/>
          <Stack.Screen name='Cancelled' component={CancelledOrders} options={{title: 'cancelled orders'}}/>
          <Stack.Screen name='Delivered' component={DeliveredOrders} options={{title: ''}}/>
          <Stack.Screen name='PendingOrders' component={PendingOrders} options={{title: 'pending orders'}}/>
          <Stack.Screen name='Navigation' component={Navigation} options={{title: 'bottom  navigations'}}/>
          <Stack.Screen name='Admin' component={Admin} options={{title: 'admin'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

