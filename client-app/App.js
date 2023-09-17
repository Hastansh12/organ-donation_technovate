import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {Navigator} from './src/navigation/navigator';
import PortfolioForm from './src/screens/DonorProfile';
import { RecipientNav } from './src/navigation/recipientnav';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigator />;
};
