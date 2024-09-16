import {StyleSheet} from 'react-native';
import {color, font, style} from '../utils';

export default (props: style.stylesFace) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // width: '100%',
      // height: '100%',
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: props.color.thirdColor,
    },
    textT: {
      color: props.color.fourthcolor,
      fontSize: 20,
    },
  });

  return styles;
};
