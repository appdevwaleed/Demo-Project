import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {root} from '../../utils';
import styleFun from './styles';
import {fonts, colors} from '../../config';

const Account: React.FC<root.rootFace> = props => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textT}>Account screen</Text>
    </SafeAreaView>
  );
};
export default Account;
