import {StyleSheet, Dimensions} from 'react-native';
import {color, font, style} from '../../utils';
const {width, height} = Dimensions.get('window');

export default (props: style.stylesFace) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: height,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    textT: {
      color: props.color.fourthcolor,
      fontSize: 20,
    },

    listContent: {
      paddingVertical: 10,
    },
    itemContainer: {
      backgroundColor: '#ddd',
      padding: 20,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    itemText: {
      fontSize: 16,
      color: '#333',
    },
    loader: {
      marginVertical: 20,
    },

    videoContainer: {
      height: height - 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    video: {
      height: '100%',
      width: '100%',
    },
    overlay: {
      position: 'absolute',
      bottom: 50,
      right: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    topOverLay: {
      width: width,
      height: 100,
      position: 'absolute',
      top: 0,
      // alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0.2)',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      alignItems: 'flex-end',
      paddingBottom: 20,
    },
    description: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    likeTxt: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
      marginTop: 10,
    },
    commentTxt: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
      marginTop: 10,
    },
    likeIcon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    mediaTxt: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },

    commentIcon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
      marginTop: 20,
    },
    dotsIcon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
  });

  return styles;
};
