import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/container/Home';
import NewExpense from './src/component/home/NewExpense';
import Category from './src/container/Category';

////////////////////////////////////////////////////////////////////////////////////

const Stack = createNativeStackNavigator();

function HomeStack() {
  return ( <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}   options={{headerShown:false}}/>
        <Stack.Screen name="NewExpense" component={NewExpense}   options={{headerShown:false}} />
      </Stack.Navigator>
  );
}

//////////////////////////////////////////////////////////////////////////////////

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="Category" component={Category} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}