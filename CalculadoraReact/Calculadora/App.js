/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Estilo from './Estilos'
import InputNumberButton from './InputNumberButton'



/*Fuera de las etiquetas se comenta asi*/
const App = () => {

  const buttons=[
    
  ]

  function renderButton(){

  }

  return (
    <Fragment>
    {/*Dentro de las etiquetas se comenta así*/}
    {/*Los View son como los div de HTML*/}
      <View style={Estilo.container}>
        <View style={Estilo.resultContainer}>
          <Text style={Estilo.resultText}>0</Text>
        </View>
        <View style={Estilo.inputContainer}>
        </View>
      </View>
      </Fragment>
  );
};





export default App;
