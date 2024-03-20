import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      padding: 25,
    },
    box:{
      backgroundColor:'#c68080',
      width: 200,
      alignItems: 'center'
    },
    texto:{
      fontSize: 20,
      marginTop: 30,
      fontWeight: 'bold',
      color: '#f1f4fb'
    },
    input:{
        flex:1,
        height:56,
        backgroundColor: '#FFF',
        padding: 4,
        fontSize: 16,
        marginRight: 12,
    },
    button:{
        backgroundColor:'#a6f5c5',
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form:{
        width: '100%',
        flexDirection: 'row'
    }
  
  });
  