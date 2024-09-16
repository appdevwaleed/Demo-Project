import React, {useEffect} from 'react';
import {root} from '../../utils';
import styleFun from './styles';
import {fonts, colors, appImages} from '../../config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabsNavigator from '../tabsNavigator/tabsNavigator';
const Stack = createNativeStackNavigator();

const RootNavigator: React.FC<root.rootFace> = props => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={'Tabs'}
          component={TabsNavigator}
          options={{headerShown: false, gestureEnabled: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
