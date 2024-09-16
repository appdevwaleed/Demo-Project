import React from 'react';
import {Image, View} from 'react-native';
import {useSelector} from 'react-redux';
import styleFun from './styles';
import {fonts, colors, appImages} from '../../config';
import Account from '../../screens/account/account';
import Games from '../../screens/games/games';
import Home from '../../screens/home/home';
import Media from '../../screens/media/media';
import Reports from '../../screens/reports/reports';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabsNavigator: React.FC<any> = props => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });
  const state = useSelector((state: any) => state.bottomTabs);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let imageNmae;
          console.log('event', focused);
          console.log('event', route);
          if (route.name === 'Home') {
            imageNmae = focused
              ? appImages.homeBlue
              : state?.currentTheme == 'light'
              ? appImages.homeBlue
              : appImages.homeWhite;
          } else if (route.name === 'Media') {
            imageNmae = focused
              ? appImages.mediaFilledWhite
              : state?.currentTheme == 'light'
              ? appImages.mediaBlack
              : appImages.mediaWhite;
          } else if (route.name === 'Games') {
            imageNmae = focused
              ? appImages.gameBlack
              : state?.currentTheme == 'light'
              ? appImages.gameBlack
              : appImages.gameWhite;
          } else if (route.name === 'Reports') {
            imageNmae = focused
              ? appImages.reportsBlack
              : state?.currentTheme == 'light'
              ? appImages.reportsBlack
              : appImages.reportsWhite;
          } else if (route.name === 'Account') {
            imageNmae = focused
              ? appImages.user
              : state?.currentTheme == 'light'
              ? appImages.user
              : appImages.user;
          }

          return (
            <View style={{alignItems: 'center'}}>
              {focused && (
                <View
                  style={[
                    styles.tabBar,
                    {
                      backgroundColor:
                        state?.currentTheme == 'light'
                          ? colors.thirdColor
                          : colors.primary,
                    },
                  ]}
                />
              )}
              <Image source={imageNmae} />
            </View>
          );
        },
        tabBarActiveTintColor:
          state?.currentTheme == 'light' ? colors.secondary : colors.primary,
        tabBarInactiveTintColor:
          state?.currentTheme == 'light' ? colors.secondary : colors.primary,
        tabBarStyle: {
          backgroundColor:
            state?.currentTheme == 'light' ? colors.primary : colors.secondary,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Media" component={Media} />
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
export default TabsNavigator;
