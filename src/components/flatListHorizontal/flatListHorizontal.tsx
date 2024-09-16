import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';

import styleFun from './styles';
import {fonts, colors} from '../../config';
import {fetchData, clearCache} from '../../redux/slices/apiSlice';
import {useDispatch, useSelector} from 'react-redux';
import {createThumbnail} from 'react-native-create-thumbnail';

const {width, height} = Dimensions.get('window');
const FlatListHorizontal = (props: any) => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });
  const dispatch = useDispatch();
  const {data, status, error} = useSelector((state: any) => state.api);
  const [thumbNaisData, setThumbNailData] = useState<any[]>(data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
    createThumbNail();
  }, [status, dispatch]);

  const createThumbNail = async () => {
    if (data?.length > 0) {
      data?.map((link: any, index: number) => {
        createThumbnail({
          url: link?.urls?.mp4,
          timeStamp: 10000,
          format: 'png',
          dirSize: 100,
        })
          .then(response => {
            const thumbnailPath =
              Platform.OS === 'ios' ? `file://${response.path}` : response.path;
            let updatedArray = data.map((item: any) =>
              item.id === link?.id ? {...item, link: thumbnailPath} : item,
            );
            setThumbNailData(updatedArray);
          })
          .catch(err => {});
      });
    }
  };

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Media', {
          focused: item.id,
        });
      }}>
      <Image style={styles.imgStyle} source={{uri: item?.link}} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          width: width - 20,
        }}
        style={{width: '100%'}}
        data={thumbNaisData}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
        scrollEnabled
        getItemLayout={(data, index) => ({
          length: width / 2,
          offset: (width / 2) * index,
          index,
        })}
      />
    </View>
  );
};
export default FlatListHorizontal;
