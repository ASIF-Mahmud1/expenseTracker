import * as React from 'react';
import { Button, View ,Text, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { increment} from './src/features/expense.slice'

function HomeScreen({ navigation }) {
 // const count=0
   const count = useSelector(state => state.value)
  console.log(useSelector(state => state));
  const dispatch= useDispatch()  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Count {count}</Text>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <TouchableOpacity onPress={()=>{  dispatch(increment()) }}>
          <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}