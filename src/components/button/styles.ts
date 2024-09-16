import {StyleSheet, Dimensions} from 'react-native';
import {color, font, style} from '../../utils';
import {colors} from '../../config';
const {width, height} = Dimensions.get('window');
export default (props: style.stylesFace) => {
  const styles = StyleSheet.create({
    cardView: {
      width: width - 40,
      height: 80,
      backgroundColor: props.color.primary,
      borderRadius: 10,
      shadowColor: props.color.secondary,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 15,
      alignSelf: 'center',
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardLeft: {
      flex: 0.2,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.color.fourthcolor,
    },
    cardMiddle: {
      flex: 0.7,
      backgroundColor: props.color.fifthColor,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardRight: {
      flex: 0.1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.color.fifthColor,
      paddingRight: 5,
    },
    heartIcon: {
      width: 35,
      height: 35,
      resizeMode: 'contain',
    },
    arrowIcon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 14,
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: props.color.secondary,
    },
    diamondIconRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },
    subTitle: {
      fontSize: 14,
      // fontFamily: props.font.regular,
      alignSelf: 'center',
      textAlign: 'center',
      color: props.color.secondary,
    },
    diamondArrow: {
      width: 40,
      height: 13,
      resizeMode: 'stretch',
      marginLeft: 5,
    },
  });

  return styles;
};
