import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categorys, Home} from "../../screens";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "../../themes/colors";
import Products from "../../screens/products";
import ProductsByCategoryScreen from "../../screens/CategoryFilter";


const Stack = createNativeStackNavigator()

const MainNavigator = ()=>{
    const nameApp = "Mayoristore";
    const homeTitle = `${nameApp} - Home`;
    const productsTitle = `${nameApp} - Products`;
    return(
    
        <Stack.Navigator initialRouteName="Home" screenOptions={
           {
            headerStyle:{
                backgroundColor: Colors.primary
            }, headerTintColor: Colors.text, headerTitleStyle:{
                fontFamily: "Oswald-ExtraLight"
            }
           }
        }>
        <Stack.Screen name="Home" component={Home} options={{ title: homeTitle}} />
            <Stack.Screen name="Categorias" component={Categorys}/>
            <Stack.Screen name="Productos" component={Products} options={{ title: productsTitle }}/>
            <Stack.Screen
  name="ProductsByCategory"
  component={ProductsByCategoryScreen}
  options={({ route }) => {
    const { name } = route.params;
    return {
      title: `Productos - ${name}`,
    };

  }}
/>

        </Stack.Navigator>
      
    )
}
export default MainNavigator