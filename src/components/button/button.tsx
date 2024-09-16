import React, {ReactElement} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {root} from '../../utils';
import styleFun from './styles';
import {fonts, colors, appImages} from '../../config';

interface props {
  title: string;
  subTitle: string;
}
const Button = (props: props) => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });
  return (
    <TouchableOpacity style={styles.cardView}>
      <View style={styles.cardLeft}>
        <Image source={appImages.heartWhite} style={styles.heartIcon} />
      </View>
      <View style={styles.cardMiddle}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.diamondIconRow}>
          <Text style={styles.subTitle}>{props.subTitle}</Text>
          <Image source={appImages.diamondArrow} style={styles.diamondArrow} />
        </View>
      </View>
      <View style={styles.cardRight}>
        <Image source={appImages.arrowRight} style={styles.arrowIcon} />
      </View>
    </TouchableOpacity>
  );
};
export default Button;
