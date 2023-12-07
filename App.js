import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  ActivityIndicator,
  MD3DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

import { configure } from 'mobx';

// Tắt cảnh báo strict mode trong MobX
configure({ enforceActions: 'never' });

const CombinedDefaultTheme = merge(NavigationDefaultTheme, PaperDefaultTheme);
const CombinedDarkTheme = merge(NavigationDarkTheme, PaperDarkTheme);
import Navigation from './src/navigation';
import UserUtil from './src/utils/apis/userUtil';
import {SplashScreen} from './src/screen/SplashScreen';
import {useDataAppStore} from './src/store/DataAppStore';
import StoreCode from './src/singletons/StoreCode';
import Toast from 'react-native-toast-message';

export default function App() {
  const theme = true ? CombinedDarkTheme : CombinedDefaultTheme;

  const [loading, setLoading] = useState(true);

  const {initData} = useDataAppStore();

  useEffect(() => {
    StoreCode.setStoreCode('zinzin');
    StoreCode.setStoreName('zinzin');
    loadApp();
  }, []);

  const loadApp = async () => {
    console.log('loadApp');
    setLoading(true);
    await UserUtil.init();
    await initData();
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <PaperProvider>
          <SafeAreaProvider>
            <Navigation theme={theme} />
            <StatusBar style={true ? 'light' : 'dark'} />
          </SafeAreaProvider>
        </PaperProvider>
      )}
       <Toast visibilityTime={1500}/>
    </>
  );
}
