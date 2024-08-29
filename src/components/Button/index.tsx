import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';


type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export function Button({title, isLoading = false, ...rest}: Props) {
  return (
    <TouchableOpacity  
    disabled={isLoading} 
    activeOpacity={0.7} 
    className=''
    {...rest}
    >
      <View className='flex-1 min-h-14 max-h-14 rounded-md items-center justify-center bg-BRAND_MID'>

      {
        isLoading ? (
      
          <ActivityIndicator className='text-WHITE' /> 
       
        ): <Text className='text-WHITE text-MD font-BOLD'>{title}</Text>
      }
        </View>
      
    </TouchableOpacity>
  );
}