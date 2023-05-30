import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/index';
import MainNavigator from './navigation/main';
import { styles } from './styles';
import { useFonts } from "expo-font"
import NavegationContainer from './navigation';
import { Provider } from 'react-redux';
import store from "./store/index"
export default function App() {
  const [loaded] = useFonts({
    'Oswald-Bold': require("../assets/fonts/Oswald-Bold.ttf"),
    'Oswald-ExtraLight': require("../assets/fonts/Oswald-ExtraLight.ttf")
  });
  return (
    <View style={styles.container}>
  <Provider store={store}>
    <NavegationContainer/>
  </Provider>
      <StatusBar style="auto"/>
    </View>
  );
}

