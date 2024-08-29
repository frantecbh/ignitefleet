

import "./src/styles/global.css"
import { SingIn } from './src/screens/SingIn';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { StatusBar } from "expo-status-bar";





import {ANDROID_CLIENT_ID} from '@env'


export default function App() {

const [fontsLoaded] = useFonts({
  Roboto_400Regular,
  Roboto_700Bold
})

if(!fontsLoaded) {
  return <Loading /> 

}

  return (
    <>
     <SingIn />
     <StatusBar style="light"  />
    </>
     
  );
}


