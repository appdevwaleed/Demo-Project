import {StyleSheet} from 'react-native';
import {style} from '../../utils';
import {colors} from '../../config';

export default (props: style.stylesFace) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    textT: {
      color: props.color.fourthcolor,
      fontSize: 20,
    },
  });

  return styles;
};
