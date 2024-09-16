import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {root} from '../../utils';
import styleFun from './styles';
import {fonts, colors, appImages} from '../../config';
import {
  Wrapper,
  HomeHeader,
  Button,
  FlatListHorizontal,
} from '../../components';
import {en} from '../../assets/languages/en';

const Home: React.FC = ({navigation}: any) => {
  const styles = styleFun({
    color: colors,
    font: fonts,
  });
  const state = useSelector((state: any) => state.bottomTabs);
  return (
    <Wrapper barStyle={'dark-content'} barColor={colors.primary}>
      <HomeHeader />
      <View style={styles.container}>
        <View style={styles.mainMargin}>
          <Text style={styles.topTxt}>{en.helloTxt}</Text>
          <Text style={styles.tapTxt}>{en.subHeadTxt}</Text>
          <Button title={en.fontTxt} subTitle={en.subTitle} />
          <View style={styles.lineBottom} />
          <View style={styles.videoView}>
            <Image
              source={appImages.mediaFilledBlack}
              style={styles.mediaIcon}
            />
            <Text style={styles.mediaTxt}>{en.mediaTxt}</Text>
          </View>

          <View
            style={{
              width: '100%',
              height: '100%',
            }}>
            <FlatListHorizontal navigation={navigation} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Media', {
                  focused: 2,
                });
              }}
              style={styles.btnBottom}>
              <Image
                source={appImages.videoFilledWhite}
                style={styles.videoIcon}
              />
              <Text style={styles.uploadBtn}>{en.uploadBtn}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Wrapper>
  );
};
export default Home;
