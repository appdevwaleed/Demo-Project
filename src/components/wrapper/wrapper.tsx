import React, {ReactElement} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {root} from '../../utils';
import styleFun from './styles';
import {fonts, colors} from '../../config';

interface props {
  children: React.ReactNode;
  barStyle: any;
  barColor: string;
}
const Wrapper = (props: props) => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={props.barColor} barStyle={props.barStyle} />
      {props.children}
    </SafeAreaView>
  );
};
export default Wrapper;
