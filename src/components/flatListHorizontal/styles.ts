import {StyleSheet, Dimensions} from 'react-native';
import {color, font, style} from '../../utils';
import {colors} from '../../config';
const {width, height} = Dimensions.get('window');

export default (props: style.stylesFace) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      paddingHorizontal: 10,
      marginTop: 20,
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
      height: height - 60,
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
      left: 20,
    },
    description: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    imgStyle: {
      width: width / 2,
      height: 200,
      resizeMode: 'cover',
      borderRadius: 15,
      marginRight: 10,
    },
  });

  return styles;
};
