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
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Estilo from './Estilos'

/*Fuera de las etiquetas se comenta asi*/
const InputNumberButton = () => {
  return (
    <Fragment>
        <TouchableOpacity style={Estilo.containerButton}>
        </TouchableOpacity>
    </Fragment>
  );
};

export default InputNumberButton;