import React, {
  useEffect,
  useState,
  useRef,
  Component,
  ComponentProps,
} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {root} from '../../utils';
import styleFun from './styles';
import {fonts, colors, appImages} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {toggleTheme} from '../../redux/slices/bottomTabs';
import Video from 'react-native-video';
import {number} from 'prop-types';

const {width, height} = Dimensions.get('window');

const Media: React.FC = ({route}: any) => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data, status, error} = useSelector((state: any) => state.api);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      dispatch(toggleTheme({currentTheme: 'dark'}));
      if (route?.params?.focused !== undefined) {
        setActiveVideoIndex(route.params?.focused);
        console.log('data', data);
        data.map((item: any, index: number) => {
          if (item.id == route?.params?.focused) {
            flatListRef.current?.scrollToIndex({
              animated: true,
              index: index,
            });
          }
        });
      }
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      dispatch(toggleTheme({currentTheme: 'light'}));
      console.log('Media screen is unfocused');
    });
    console.log('data', data);
    console.log('params', route?.params);

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation, route?.params]);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const handleViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      const newActiveIndex = viewableItems[0].index;
      setActiveVideoIndex(newActiveIndex);
    }
  }).current;
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 80,
  }).current;

  const renderItem = ({item, index}: any) => (
    <View style={styles.videoContainer}>
      <Video
        source={{uri: item?.urls?.mp4}}
        style={styles.video}
        paused={activeVideoIndex !== index} // Only play the active video
        resizeMode="stretch"
        repeat
      />
      <View style={styles.topOverLay}>
        <Text style={styles.mediaTxt}>Media</Text>
        <Image source={appImages.videoWhite} style={styles.dotsIcon} />
      </View>
      <View style={styles.overlay}>
        <Image source={appImages.heartRedFilled} style={styles.likeIcon} />
        <Text style={styles.likeTxt}>{item.likes_count}</Text>
        <Image
          source={appImages.commentsFilledWhite}
          style={styles.commentIcon}
        />
        <Text style={styles.commentTxt}>{item.comments_count}</Text>
        <Image
          source={appImages.threeDotsFilledWhite}
          style={styles.commentIcon}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      initialNumToRender={1}
      keyExtractor={item => item.id}
      pagingEnabled
      snapToAlignment="start"
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      getItemLayout={(data, index) => ({
        length: height - 80,
        offset: (height - 80) * index,
        index,
      })}
    />
  );
};
export default Media;
