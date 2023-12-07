import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

import {observer} from 'mobx-react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDataAppStore} from '../../store/DataAppStore';
import Scaffold from '../../components/Scafold';
import IAppBar from '../../components/AppBar';
import {Image} from 'react-native';
import Column from '../../components/Column';
import Row from '../../components/Row';
import SizedBox from '../../components/SizedBox';
import Wrap from '../../components/Wrap';
import Container from '../../components/Container';
import WalletIcon from '../../components/Icons/Profile/WalletIcon';
import {Divider, useTheme} from 'react-native-paper';
import {hexToRgba, rgbaOpacity} from '../../utils/apis/colorsUtil';
import BoxProfileIcon from '../../components/Icons/Profile/BoxProfileIcon';
import TruckProfileIcon from '../../components/Icons/Profile/TruckProfileIcon';
import StarCircelIcon from '../../components/Icons/Profile/StarCircelIcon';
import NextArrowIcon from '../../components/Icons/NextArrowIcon';
import Expanded from '../../components/Expanded';
import CheckLoginCPN from '../../components/CheckLoginCPN';
const {width: SCREEN_WIDTH} = Dimensions.get('screen');
const {height: SCREEN_HEIGHT} = Dimensions.get('screen');

const ProfileScreen = observer(({route, navigation}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const insets = useSafeAreaInsets();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {badge, banner, homeApp} = useDataAppStore();
  const theme = useTheme();

  const cardCPN = () => {
    return (
      <View style={styles.card}>
        <Image
          source={require('../../../assets/images/card_profile.png')}
          style={styles.backgroundImage}
        />
        <View style={{width: windowWidth, flex: 1, padding: 30}}>
          <Column mainAxisAlignment={'space-between'}>
            <Row mainAxisAlignment={'space-between'}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                }}>
                Furniture
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#E2E2E2',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                }}>
                Nền tảng 0 đồng
              </Text>
            </Row>
            <Text style={styles.textCtv}>CỘNG TÁC VIÊN</Text>
            <Row mainAxisAlignment={'space-between'}>
              <Column>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#E2E2E2',
                    fontWeight: '500',
                  }}>
                  Họ và tên
                </Text>
                <SizedBox height={5}></SizedBox>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                  }}>
                  Đặng Phương Nam
                </Text>
              </Column>
              <Column crossAxisAlignment={'flex-end'}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#E2E2E2',
                    fontWeight: '500',
                  }}>
                  Ngày tham gia
                </Text>
                <SizedBox height={5}></SizedBox>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                  }}>
                  20/10/2023
                </Text>
              </Column>
            </Row>
          </Column>
        </View>
      </View>
    );
  };

  const functionItem = (icon, title) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Column flex={0}>
          <Container
            padding={15}
            flex={0}
            width={windowWidth}
            backgroundColor={'white'}
            child={
              <Row>
                <Image source={icon} style={{width: 22, height: 22}} />
                <SizedBox width={10}></SizedBox>
                <Expanded child={<Text>{title}</Text>}></Expanded>
                <NextArrowIcon></NextArrowIcon>
              </Row>
            }></Container>
          <Divider></Divider>
        </Column>
      </TouchableOpacity>
    );
  };

  return (
    <Scaffold
      appbar = {
        <IAppBar
          title={'TÀI KHOẢN'}
          automaticallyImplyLeading={false}></IAppBar>
      }
      body={
        <CheckLoginCPN
          child={
            <View style={styles.container}>
              <ScrollView>
                {cardCPN()}
                <Wrap>
                  <TouchableOpacity onPress={() => {
                    navigation.navigate('ORDER');
                  }}>
                  <Container
                    padding={0}
                    flex={0}
                    width={windowWidth / 4}
                    child={
                      <Container
                        padding={15}
                        backgroundColor={'white'}
                        child={
                          <Column crossAxisAlignment={'center'} gap={10}>
                            <Container
                              flex={0}
                              padding={10}
                              borderRadius={1000}
                              backgroundColor={rgbaOpacity(
                                theme.colors.primary,
                                0.1,
                              )}
                              child={
                                <WalletIcon
                                  color={theme.colors.primary}
                                  size={30}></WalletIcon>
                              }></Container>
                            <Text style={{color: '#64748B', fontSize: 10}}>
                              Chờ xác nhận
                            </Text>
                          </Column>
                        }></Container>
                    }></Container></TouchableOpacity>
                
                  <Container
                    padding={0}
                    flex={0}
                    width={windowWidth / 4}
                    child={
                      <Container
                        padding={15}
                        backgroundColor={'white'}
                        child={
                          <Column crossAxisAlignment={'center'} gap={10}>
                            <Container
                              flex={0}
                              padding={10}
                              borderRadius={1000}
                              backgroundColor={rgbaOpacity(
                                theme.colors.primary,
                                0.1,
                              )}
                              child={
                                <BoxProfileIcon
                                  color={theme.colors.primary}
                                  size={30}></BoxProfileIcon>
                              }></Container>
                            <Text style={{color: '#64748B', fontSize: 10}}>
                              Chờ lấy hàng
                            </Text>
                          </Column>
                        }></Container>
                    }></Container>
                  <Container
                    padding={0}
                    flex={0}
                    width={windowWidth / 4}
                    child={
                      <Container
                        padding={15}
                        backgroundColor={'white'}
                        child={
                          <Column crossAxisAlignment={'center'} gap={10}>
                            <Container
                              flex={0}
                              padding={10}
                              borderRadius={1000}
                              backgroundColor={rgbaOpacity(
                                theme.colors.primary,
                                0.1,
                              )}
                              child={
                                <TruckProfileIcon
                                  color={theme.colors.primary}
                                  size={30}></TruckProfileIcon>
                              }></Container>
                            <Text style={{color: '#64748B', fontSize: 10}}>
                              Đang giao
                            </Text>
                          </Column>
                        }></Container>
                    }></Container>
                  <Container
                    padding={0}
                    flex={0}
                    width={windowWidth / 4}
                    child={
                      <Container
                        padding={15}
                        backgroundColor={'white'}
                        child={
                          <Column crossAxisAlignment={'center'} gap={10}>
                            <Container
                              flex={0}
                              padding={10}
                              borderRadius={1000}
                              backgroundColor={rgbaOpacity(
                                theme.colors.primary,
                                0.1,
                              )}
                              child={
                                <StarCircelIcon
                                  color={theme.colors.primary}
                                  size={30}></StarCircelIcon>
                              }></Container>
                            <Text style={{color: '#64748B', fontSize: 10}}>
                              Đánh giá
                            </Text>
                          </Column>
                        }></Container>
                    }></Container>
                </Wrap>
                <Column crossAxisAlignment={'center'}>
                  <SizedBox height={20}></SizedBox>
                  <Image
                    source={require('../../../assets/images/code_ctv.png')}
                    style={{
                      width: windowWidth / 2,
                      height: 100,
                      objectFit: 'contain',
                    }}
                  />
                  <SizedBox height={20}></SizedBox>
                  <Container
                    padding={10}
                    borderRadius={10}
                    width="60%"
                    backgroundColor={theme.colors.primary}
                    alignItems={'center'}
                    child={
                      <Text style={{color: 'white'}}>Mã giới thiệu</Text>
                    }></Container>
                  <SizedBox height={20}></SizedBox>
                  {functionItem(
                    require('../../../assets/images/profile/register_ctv.png'),
                    'Sản phẩm',
                  )}
                  {functionItem(
                    require('../../../assets/images/profile/xu.png'),
                    'Xu tích luỹ',
                  )}
                  {functionItem(
                    require('../../../assets/images/profile/buy_again.png'),
                    'Mua lại',
                  )}
                  {functionItem(
                    require('../../../assets/images/profile/voucher_wallet.png'),
                    'Ví Voucher',
                  )}
                  {functionItem(
                    require('../../../assets/images/profile/heart_fill.png'),
                    'Sản phẩm yêu thích',
                  )}
                  {functionItem(
                    require('../../../assets/images/profile/location.png'),
                    'Địa chỉ của tôi',
                  )}
                  {functionItem(
                    require('../../../assets/images/profile/contact.png'),
                    'Liên hệ',
                  )}
                  {functionItem(
                    require('../../../assets/images/profile/web.png'),
                    'Website',
                  )}
                  {functionItem(
                    require('../../../assets/images/profile/post_new.png'),
                    'Tin tức',
                  )}
                  {functionItem(
                    require('../../../assets/images/profile/log_out.png'),
                    'Đăng xuất',
                  )}
                </Column>
              </ScrollView>
            </View>
          }></CheckLoginCPN>
      }></Scaffold>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  textCtv: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    textShadowOffset: {width: 0, height: 4}, // Độ phân tán theo chiều ngang và dọc
    textShadowRadius: 4, // Bán kính phân tán
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    width: SCREEN_WIDTH,
    marginTop: 10,
    height: 200,
  },
  backgroundImage: {
    position: 'absolute',
    borderRadius: 10,
    width: SCREEN_WIDTH - 20,
  },
});

export default ProfileScreen;
