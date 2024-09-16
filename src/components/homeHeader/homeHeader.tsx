import React, {ReactElement} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {root} from '../../utils';
import styleFun from './styles';
import {fonts, colors, appImages} from '../../config';

interface props {}
const HomeHeader = (props: props) => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.leftView}>
          <Image source={appImages.mainLogo} style={styles.logo} />
        </View>
        <View style={styles.rightView}>
          <TouchableOpacity style={styles.btnClick}>
            <Image source={appImages.searchBlack} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnClick}>
            <Image source={appImages.chatIconBlack} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnClick}>
            <Image source={appImages.notificationBlack} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lineBottom} />
    </View>
  );
};
export default HomeHeader;
