import { useEffect, useState, useCallback } from "react";
import { Intro } from './Framework/Screens/Intro';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import {
  Montserrat_100Thin, Montserrat_200ExtraLight, Montserrat_300Light, Montserrat_400Regular,
  Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_900Black
} from "@expo-google-fonts/montserrat"
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { RootSiblingParent } from "react-native-root-siblings";
import Product from "./Framework/Screens/Pro";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./Framework/navigation/stackNavigator";
import { View } from "react-native";
import ProductA from "./Framework/Screens/Product";
import { AppProvider } from "./Framework/Components/GlobalVariables";
import { Preloader } from "./Framework/Components/Preloader";
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Pacifico_400Regular });
        await Font.loadAsync({ Montserrat_100Thin });
        await Font.loadAsync({ Montserrat_200ExtraLight });
        await Font.loadAsync({ Montserrat_300Light });
        await Font.loadAsync({ Montserrat_400Regular });
        await Font.loadAsync({ Montserrat_500Medium });
        await Font.loadAsync({ Montserrat_600SemiBold });
        await Font.loadAsync({ Montserrat_700Bold });
        await Font.loadAsync({ Montserrat_800ExtraBold });
        await Font.loadAsync({ Montserrat_900Black });
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <RootSiblingParent>
<AppProvider>
      <NavigationContainer>
      <StackNavigator/>
      <Preloader/>
      </NavigationContainer>
      </AppProvider>
    </RootSiblingParent>
    // <View style={{ flex: 1 }}>
    //   <ProductA />
    // </View>
  
  );
}