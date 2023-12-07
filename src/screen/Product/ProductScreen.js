import React, {useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Animated,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';

import {observer} from 'mobx-react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import SizedBox from '../../components/SizedBox';
import CartIcon from '../../components/Icons/CartIcon';
import ArrowBackIcon from '../../components/Icons/ArrowBackIcon';
import Container from '../../components/Container';
import Carousel from 'react-native-snap-carousel-v4';
import {useProductStore} from '../../store/ProductStore';
import Scaffold from '../../components/Scafold';
import Column from '../../components/Column';
import PriceProduct from './child/ProductPrice';
import Row from '../../components/Row';
import HeartIcon from '../../components/Icons/HeartIcon';
import HeartFillIcon from '../../components/Icons/HeartFillIcon';
import {Rating} from 'react-native-ratings';
import IgnorePointer from '../../components/IgnorePointer';
import ShareIcon from '../../components/Icons/ShareIcon';
import {Button, Divider} from 'react-native-paper';
import BoxIcon from '../../components/Icons/BoxIcon';
import ShieldIcon from '../../components/Icons/ShieldIcon';
import CarIcon from '../../components/Icons/CarIcon';
import DecriptionProduct from './child/DecriptionProduct';
import ReviewProduct from './child/ReviewProduct';
import ProductItem from '../../components/Product/ProductItem';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');
const {height: SCREEN_HEIGHT} = Dimensions.get('screen');

const ProductScreen = observer(({route, navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const insets = useSafeAreaInsets();
  const {
    product,
    loading,
    averagedStars,
    totalReview,
    listProductSimilar,
    getProductDetail,
    favoriteProduct,
    getReviewProduct,
    getSimilarProduct,
  } = useProductStore();
  const {productId} = route.params;

  useEffect(() => {
    console.log('productId', productId);
    getProductDetail(productId);
    getReviewProduct(productId);
    getSimilarProduct(productId);
  }, []);

  function header() {
    return (
      <View style={[styles.header, {top: insets.top, paddingHorizontal: 15}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Container
            padding={10}
            backgroundColor={'#00000040'}
            borderRadius={15}
            child={<ArrowBackIcon></ArrowBackIcon>}></Container>
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Container
            padding={8.5}
            backgroundColor={'#00000040'}
            borderRadius={15}
            child={<CartIcon color="white" size={20}></CartIcon>}></Container>
        </TouchableOpacity>
      </View>
    );
  }

  const bannerCPN = ({item, index}) => {
    console.log('item', item);

    return (
      <View
        style={{
          backgroundColor: 'floralwhite',

          height: windowHeight * 0.45,
          width: windowWidth,
        }}>
        <Image
          source={{
            uri: item,
          }}
          style={{flex: 1, borderRadius: 10}}
          resizeMode="cover"
        />
      </View>
    );
  };

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  return loading ? (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <ActivityIndicator />
    </View>
  ) : (
    <Scaffold
      body={
        <>
          {header()}
          <View style={{height: SCREEN_HEIGHT, width: SCREEN_WIDTH}}>
            <ScrollView>
              <Carousel
                layout={'default'}
                autoplay={true}
                data={
                  product?.video_url == null
                    ? [...(product?.images ?? []).map(e => e.image_url)]
                    : [
                        product.video_url,
                        ...(product?.images ?? []).map(e => e.image_url),
                      ]
                }
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                renderItem={bannerCPN}
                onSnapToItem={index => setIndex(index)}
              />
              <View style={styles.container}>
                <Column>
                  <Container
                    child={
                      <Column>
                        <SizedBox height={10}></SizedBox>
                        <Container
                          padding={10}
                          child={
                            <Text style={{fontSize: 16}}>{product?.name}</Text>
                          }></Container>
                      </Column>
                    }></Container>
                  <Row>
                    <PriceProduct product={product} />
                    <View style={{flex: 1}}></View>
                    <Container
                      flex={0}
                      paddingRight={10}
                      child={
                        <TouchableOpacity
                          onPress={() => {
                            console.log(
                              'product.is_favorite',
                              product?.is_favorite,
                            );
                            if ((product?.is_favorite ?? true) === true) {
                              favoriteProduct(product.id, false);
                            } else {
                              favoriteProduct(product.id, true);
                            }
                          }}>
                          {!(product?.is_favorite ?? true) ? (
                            <HeartIcon size={20}></HeartIcon>
                          ) : (
                            <HeartFillIcon size={20}></HeartFillIcon>
                          )}
                        </TouchableOpacity>
                      }></Container>
                  </Row>
                  <Divider style={{marginVertical: 5}} />
                  <Container
                    padding={10}
                    child={
                      <Row crossAxisAlignment={'center'}>
                        <Row>
                          <IgnorePointer>
                            <Rating
                              showRating={false}
                              onFinishRating={ratingCompleted}
                              imageSize={15}
                              startingValue={
                                averagedStars == 0 ? 5 : averagedStars
                              }
                            />
                          </IgnorePointer>
                        </Row>
                        <Divider
                          style={{
                            width: 1,
                            height: '100%',
                            marginHorizontal: 10,
                          }}
                        />
                        <Text style={{color: 'grey', fontSize: 12}}>{`Đã xem ${
                          product?.view ?? 0
                        }`}</Text>
                        <View style={{flex: 1}}></View>
                        <ShareIcon size={20}></ShareIcon>
                      </Row>
                    }></Container>
                  <Divider style={{marginVertical: 5}} />
                  <Container
                    padding={10}
                    child={
                      <Row>
                        <Container
                          flex={1}
                          child={
                            <Row>
                              <BoxIcon size={20}></BoxIcon>
                              <Text style={{fontSize: 11, marginLeft: 2}}>
                                Dễ dàng mua sắm
                              </Text>
                            </Row>
                          }></Container>
                        <Container
                          flex={1}
                          child={
                            <Row>
                              <ShieldIcon size={20}></ShieldIcon>
                              <Text style={{fontSize: 11, marginLeft: 2}}>
                                Chính hãng 100%
                              </Text>
                            </Row>
                          }></Container>
                        <Container
                          flex={1}
                          child={
                            <Row>
                              <CarIcon size={20}></CarIcon>
                              <Text style={{fontSize: 11, marginLeft: 2}}>
                                Giao hàng miễn phí
                              </Text>
                            </Row>
                          }></Container>
                      </Row>
                    }></Container>
                  <DecriptionProduct
                    product={product}
                    isCollapsed={isCollapsed}
                    onPress={v => {
                      setIsCollapsed(v);
                    }}></DecriptionProduct>
                  <ReviewProduct product={product}></ReviewProduct>
                  <Row>
                    <Text style={{flex: 1, fontWeight: '500'}}>
                      {'  '}
                      Sản phẩm tương tự
                    </Text>
                    <Button
                      onPress={() => {}}
                      style={{margin: 4, fontSize: 12, color: 'grey'}}
                      contentStyle={{flexDirection: 'row-reverse'}}>
                      Xem tất cả
                    </Button>
                  </Row>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {listProductSimilar?.map((e, index) => {
                      return (
                        <ProductItem
                          key={index}
                          product={e}
                          width={170}></ProductItem>
                      );
                    })}
                  </ScrollView>
                </Column>
              </View>
            </ScrollView>
          </View>
        </>
      }></Scaffold>
  );
});

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: SCREEN_HEIGHT * 0.35,
    // zIndex: 9999,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderColor: 'rgba(128, 128, 128, 0.5)',
    borderWidth: 0.5,
    width: SCREEN_WIDTH,
    shadowColor: 'rgba(128, 128, 128, 0.3)',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 7,
    shadowOpacity: 1,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    left: 0,
    zIndex: 9999,
  },
  title: {
    marginVertical: 16,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default ProductScreen;
