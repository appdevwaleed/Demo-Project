import {Dimensions, StyleSheet} from 'react-native';
import {color, font, style} from '../../utils';
const {width, height} = Dimensions.get('window');
export default (props: style.stylesFace) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      // alignItems: 'center',
    },
    mainMargin: {
      width: width - 20,
      height: '100%',
      marginHorizontal: 10,
    },

    topTxt: {
      fontSize: 20,
      // fontFamily: props.font.regular,
      alignSelf: 'center',
      textAlign: 'center',
      marginVertical: 10,
      color: props.color.secondary,
    },
    lineBottom: {
      width: width - 40,
      borderBottomColor: props.color.secondary,
      borderBottomWidth: 0.5,
      opacity: 0.2,
      marginTop: 30,
      alignSelf: 'center',
    },
    tapTxt: {
      fontSize: 18,
      fontWeight: 'normal',
      color: props.color.secondary,
    },

    videoIcon: {
      width: 25,
      height: 20,
      resizeMode: 'contain',
    },
    mediaIcon: {
      width: 15,
      height: 15,
      resizeMode: 'contain',
    },

    videoView: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    mediaTxt: {
      fontSize: 14,
      color: props.color.secondary,
      marginLeft: 10,
    },
    btnBottom: {
      flexDirection: 'row',
      width: '100%',
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: props.color.thirdColor,
      borderRadius: 5,
      marginTop: 20,
    },
    uploadBtn: {
      fontSize: 16,
      marginLeft: 10,
      color: props.color.primary,
    },
  });

  return styles;
};
