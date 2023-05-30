import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import MainNavigator from '../main/index'
import OrderNavigator from '../orders/index'
import CartNavigator from '../cart/index'
import { Colors } from '../../themes/colors'
const BottonTab = createBottomTabNavigator()
 const TabsContainer = () => {
  return (
   <BottonTab.Navigator initialRouteName="MainPage" screenOptions={{tabBarStyle:{
    backgroundColor: Colors.primary
   }}}>
    <BottonTab.Screen component={MainNavigator} name='MainPage'
    options={{
      tabBarLabel:"Main",headerShown:false,tabBarActiveTintColor: Colors.Icons, tabBarInactiveTintColor: Colors.LigthGray, tabBarIcon:({focused, color, size}) => {
        return <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
      }
    }}/>
    <BottonTab.Screen name='OrdersPage' component={OrderNavigator} options={{
      tabBarLabel:"Orders", headerShown:false,tabBarActiveTintColor: Colors.Icons,tabBarInactiveTintColor: Colors.LigthGray, tabBarIcon: ({focused, color, size}) => {
        return <Ionicons name={focused ? "basket": "basket-outline"} size={size} color={color} />
      }
    }}/>
    <BottonTab.Screen name='CartPage' component={CartNavigator} options={{
      headerShown:false,tabBarLabel:"Cart", tabBarActiveTintColor: Colors.Icons, tabBarInactiveTintColor: Colors.LigthGray, tabBarIcon:({focused, color, size})=>{
       return <Ionicons name={focused ? "cart" : "cart-outline"} size={size} color={color} />
      }
    }}/>
   </BottonTab.Navigator>
  )
}
export default TabsContainer