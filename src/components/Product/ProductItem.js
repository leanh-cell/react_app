import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CartIcon from '../Icons/CartIcon';
import ImageErrorIcon from '../Icons/ImageErrorIcon';
import Row from '../Row';
import {useTheme} from 'react-native-paper';
import Column from '../Column';
import {useDataAppStore} from '../../store/DataAppStore';
import {convertToMoney} from '../../utils/apis/stringUtil';
import {useNavigation} from '@react-navigation/native';
import ModalDistributesProduct from './ModalDistributeProduct';
import {useCartStore} from '../../store/CartStore';

const ProductItem = ({product, width, height, showCart = true}) => {
  const theme = useTheme();

  const {badge, getBadge} = useDataAppStore();
  const {addItemCart} = useCartStore();

  const navigation = useNavigation();

  const [isShowDrawer, setShowDrawer] = useState(false);
  const [typeAddToCart, setTypeAddToCart] = useState('');

  function textMoney() {
    if (!product.product_discount) {
      return product.min_price === 0
        ? 'Liên hệ'
        : convertToMoney(product.min_price) + '₫';
    } else {
      return product.min_price === 0
        ? 'Liên hệ'
        : convertToMoney(
            product.min_price -
              (product.min_price * product.product_discount.value) / 100,
          ) + '₫';
    }
  }

  function textMoneyAgency() {
    if (!product.product_discount) {
      return product.min_price_before_override === 0
        ? 'Liên hệ'
        : convertToMoney(product.min_price_before_override) + '₫';
    } else {
      return product.min_price_before_override === 0
        ? 'Liên hệ'
        : convertToMoney(
            product.min_price_before_override -
              (product.min_price_before_override *
                product.product_discount.value) /
                100,
          ) + '₫';
    }
  }
  function checkMinMaxPrice(price) {
    return !product.product_discount
      ? price || 0
      : (price || 0) - (price || 0) * (product.product_discount.value / 100);
  }

  function priceRose() {
    return product.type_share_collaborator_number === 0
      ? convertToMoney(
          checkMinMaxPrice(product, product.min_price) *
            (product.percent_collaborator / 100),
        ) + '₫'
      : convertToMoney(product.money_amount_collaborator || 0) + '₫';
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          // chuyển sang màn hình chi tiết sản phẩm
          navigation.navigate('PRODUCT', {productId: product?.id});
        }}>
        <View style={[styles.container, {width, height}]}>
          <View style={styles.productContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.productImage}
                source={{
                  uri:
                    product.images && product.images.length > 0
                      ? product.images[0].image_url
                      : '',
                }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName} numberOfLines={2}>
                {product.name}
              </Text>
              <View style={{height: 10}}></View>
              <Row>
                <Column crossAxisAlignment={'flex-start'}>
                  {product.product_discount && (
                    <View style={styles2.discountContainer}>
                      <Text style={styles2.discountText}>
                        {product.min_price === 0
                          ? product.price === 0
                            ? 'Giảm'
                            : `${convertToMoney(
                                product.price,
                              )}₫ - ${convertToMoney(
                                product.product_discount?.value || 0,
                              )}%`
                          : `${convertToMoney(
                              product.min_price,
                            )}₫ - ${convertToMoney(
                              product.product_discount?.value || 0,
                            )}%`}
                      </Text>
                    </View>
                  )}
                  <View style={styles2.priceContainer}>
                    <Text style={styles2.priceText}>{textMoney() || ''}</Text>
                  </View>
                  {product.percent_collaborator != null &&
                    badge.status_collaborator === 1 && (
                      <View style={styles2.rowContainer}>
                        <View style={styles2.columnContainer}>
                          <Text style={styles2.label}>Hoa hồng</Text>
                          <Text style={styles2.value}>{priceRose()}</Text>
                        </View>
                      </View>
                    )}
                  {badge.status_agency === 1 && (
                    <View style={styles2.rowContainer}>
                      <View style={styles2.columnContainer}>
                        <Text style={styles2.label}>Giá bán lẻ</Text>
                        <Text style={styles2.value}>
                          {textMoneyAgency() || ''}
                        </Text>
                      </View>
                    </View>
                  )}
                </Column>
                {showCart && (
                  <TouchableOpacity
                    style={styles.cartIcon}
                    onPress={() => {
                      setShowDrawer(true);
                      setTypeAddToCart('ADD');
                    }}>
                    <CartIcon size={20} color={theme.colors.primary}></CartIcon>
                  </TouchableOpacity>
                )}
              </Row>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {isShowDrawer && (
        <ModalDistributesProduct
          isShowDrawer={isShowDrawer}
          product={product}
          onClose={() => {
            setShowDrawer(false);
          }}
          onSubmit={(quantity, product, distributesSelected, buyNow) => {
            console.log('distributesSelected', distributesSelected);
            console.log('quantity', quantity);
            console.log('product', product);
            console.log('buyNow', buyNow);
            setShowDrawer(false);
            addItemCart(product.id, quantity, [distributesSelected]);
            getBadge();

            if (buyNow == true) {
              navigation.navigate('CART', {automaticallyImplyLeading: true});
              // Get.to(() => CartScreen());
              // Get.to(() => ConfirmScreen());
            }
          }}></ModalDistributesProduct>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 20},
    width: 180,
    shadowRadius: 17.5,
    shadowOpacity: 0.01,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 0,
    flex: 1,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 12,
    fontWeight: '400',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
  },
  cartIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    marginTop: -10,
  },
  cartImage: {
    width: 20,
    height: 20,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  discountContainer: {
    paddingTop: 5,
    paddingRight: 5,
  },
  discountText: {
    fontSize: 11,
    textDecorationLine: 'line-through',
    fontWeight: '600',
    color: 'grey',
  },
  priceContainer: {
    paddingBottom: 5,
    paddingRight: 5,
  },
  priceText: {
    fontSize: 13,
    fontWeight: '600',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
  },
  label: {
    fontSize: 11,
    color: 'grey',
  },
  spacer: {
    flex: 1,
  },
  value: {
    fontSize: 13,
    fontWeight: '600',
    color: 'pink', // Hoặc màu khác tùy ý
  },
});

export default ProductItem;
