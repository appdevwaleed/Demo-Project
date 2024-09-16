import {StyleSheet, Dimensions} from 'react-native';
import {color, font, style} from '../../utils';
import {colors} from '../../config';
const {width, height} = Dimensions.get('window');
export default (props: style.stylesFace) => {
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: 60,
      backgroundColor: props.color.primary,
    },
    subContainer: {
      width: width - 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    leftView: {},
    rightView: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    btnClick: {
      marginHorizontal: 10,
    },
    lineBottom: {
      width: width,
      borderBottomColor: colors.secondary,
      borderBottomWidth: 0.5,
      opacity: 0.5,
    },
    logo: {
      width: 180,
      height: 45,
      resizeMode: 'contain',
    },
    icon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
  });

  return styles;
};
