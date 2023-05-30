import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        
    },  containerTouchable: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",height:400, marginBottom:100,justifyContent:"center",alignItems: "center",
        shadowOffset: {
          width: 0,
          height: 1}}, textStyle:{
            fontSize:20, color:"black", fontFamily:"Oswald-Bold"
          }, text:{fontSize:20, color:"black", fontFamily:"Oswald-Bold"}
})