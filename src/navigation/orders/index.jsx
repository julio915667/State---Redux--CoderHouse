import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import { Cart, Orders } from '../../screens'
const Stack = createNativeStackNavigator()
 const OrderNavigator = () => {
  return (
   
        <Stack.Navigator initialRouteName='Orders'>
            <Stack.Screen name="Orders" component={Orders}/>
        </Stack.Navigator>
   
  )
}
export default OrderNavigator