import React from 'react';
import { ActivityIndicator, View } from 'react-native';



export function Loading() {
  return (
    <View className='flex-1 items-center justify-center bg-GRAY_800'>
      <ActivityIndicator className='text-BRAND_LIGHT' /> 
    </View>
  );
}




