import React, {useEffect} from 'react';
import {SafeAreaView, Text, Image, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {root} from '../utils';
import styleFun from './styles';
import {fonts, colors, appImages} from '../config';
import RootNavigator from '../navigator/rootNavigator/rootNavigator';
import {Provider} from 'react-redux';
import store from '../redux/store';

const Root: React.FC<root.rootFace> = props => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });
  useEffect(() => {
    let time = Platform.OS == 'android' ? 5000 : 1000;
    setTimeout(() => {
      SplashScreen.hide();
    }, time);
  }, []);
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default Root;
