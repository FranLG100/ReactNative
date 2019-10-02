
import {
    StyleSheet 
} from 'react-native';
  
const styles = StyleSheet.create({
    container:{
        flex:1,
     },
     resultText:{
      fontSize:40,
      color:'black'
     },
     btntext:{
       fontSize:35,
       color:'white'
     },
     white:{
       color:'white'
     },
     btn:{
       flex:1,
       alignItems:"center",
       alignSelf:"stretch",
       justifyContent:'center'
     },
     calculationText:{
        fontSize:30,
        color:'black'
     },
     row:{
      flexDirection:'row',
      flex:1,
      justifyContent:'space-around',
      alignItems:'center'
     },
     result:{
       flex:2,
       backgroundColor:'white',
       justifyContent:'center',
       alignItems:'flex-end'
     },
     calculation:{
      flex:1,
      backgroundColor:'#9fd5d1',
      justifyContent:'center',
      alignItems:'flex-end'
    },
    buttons:{
      flexGrow:7,
      flexDirection:'row'
    },
    numbers:{
      flex:3,
      backgroundColor:'#434343',
     },
    operations:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'stretch',
      backgroundColor:'#636363'
    }
  });

  export default styles
  