
import { Button } from '@rneui/themed'
import { View, Text } from 'react-native'
import { styles } from './styles'

 const Home = ({navigation}) => {
  return (
   <View style={styles.container}>
    <Text style={styles.TextColorHead}> Mayoristore </Text>
  <Text style={styles.TextColor}> Mayoristore se compromete a brindar un servicio excepcional y productos de alta calidad a precios competitivos, lo que la convierte en una opción ideal para aquellos que buscan abastecer sus negocios con los mejores productos disponibles en el mercado.</Text>
    <Button title="Categorias" onPress={()=> navigation.navigate('Categorias')}/>
    <Button title="Productos" onPress={()=> navigation.navigate('Productos')}/>
    <Text style={styles.TextColor}>Julian Mendoza</Text>
   </View>
  )
}
export default Home
