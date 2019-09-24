import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

 const styles = StyleSheet.create({
    container:{
        /*Cada flex divide la pantalla de forma propocional entre todos los flex de su nivel.    
        Ej. Si tenemos un View de flex 1 y un View de flex 2, el primero ocupa 1/3 y el segundo, 2/3, ya
        que flex 1+flex2=3 partes*/
        flex:1,
     },

    resultContainer:{
      flex:2,
      backgroundColor:"#1E1240",
      justifyContent:'center'
    },

    inputContainer:{
      flex:8,
      backgroundColor:"#3D0075"
    },

    resultText:{
      color:'white',
      fontSize:80,
      fontWeight:"bold",
      padding:20,
      textAlign:'right'
    },

    containerButton:{
      flex:1,
      margin:1,
      backgroundColor:'rgba(255,255,255,0.1)',
      justifyContent="center",
      alignItems:"center"
    }
  });

export default styles;