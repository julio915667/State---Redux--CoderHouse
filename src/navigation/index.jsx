import { NavigationContainer } from '@react-navigation/native';
import TabsContainer from './tabs/index';


const NavegationContainer = () => {
  return (
    <NavigationContainer>
   <TabsContainer/>
    </NavigationContainer>
  );
};

export default NavegationContainer;
