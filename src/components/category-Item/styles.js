import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{flex:1, marginTop:30
    
    },  containerTouchable: {
        flex: 1,
        borderRadius: 1,
        shadowColor: "#000",height:200,marginBottom:50,justifyContent:"center",alignItems: "center",
        shadowOffset: {
          width: 0,
          height: 1}}, textStyle:{
            fontSize:20, color:"black", fontFamily:"Oswald-Bold"
          }
})