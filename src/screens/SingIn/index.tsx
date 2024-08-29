import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import backGroundImage from '../../assets/background.png'
import { Button } from '../../components/Button';


export function SingIn() {
  return (
   <ImageBackground 
   source={backGroundImage}
   className="flex-1 justify-center p-12 bg-GRAY_800"   
   >
      <Text className='text-BRAND_LIGHT text-XXXL font-BOLD text-center'>Ignite Fleet</Text>
      <Text className='text-gray-100 text-MD font-REGULAR text-center mb-8'>Gestão de Uso de Veículos</Text>
      <Button title='Entrar com Google' onPress={() => {console.log('clicou')}} />
   </ImageBackground>
  );
}

