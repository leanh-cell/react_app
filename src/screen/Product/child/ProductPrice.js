import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useDataAppStore} from '../../../store/DataAppStore';
import SizedBox from '../../../components/SizedBox';
import {useTheme} from 'react-native-paper';
import {convertToMoney} from '../../../utils/apis/stringUtil';
import Row from '../../../components/Row';
import Container from '../../../components/Container';
import Column from '../../../components/Column';

const PriceProduct = ({product}) => {
  const {badge} = useDataAppStore();
  const theme = useTheme();

  const checkMinMaxPrice = price => {
    return product.product_discount
      ? price - price * (product.product_discount.value / 100)
      : price;
  };

  const moneyRose = () => {
    return product.type_share_collaborator_number === 0 ? (
      product.min_price !== product.max_price ? (
        <View style={styles.row}>
          <Text style={styles.money}>
            {checkMinMaxPrice(product.min_price) *
              (product.percentCollaborator / 100)}
          </Text>
          <Text style={styles.money}>-</Text>
          <Text style={styles.money}>
            {checkMinMaxPrice(product.max_price) *
              (product.percentCollaborator / 100)}
          </Text>
        </View>
      ) : (
        <View style={styles.row}>
          <Text style={styles.money}>
            {checkMinMaxPrice(product.min_price)}
          </Text>
        </View>
      )
    ) : (
      <View style={styles.row}>
        <Text style={styles.money}>{product.money_amount_collaborator}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    money: {
      // color: 'pink',
      fontWeight: '600',
      fontSize: 18,
    },
    moneyRose: {
      color: 'pink',
      fontWeight: '600',
      fontSize: 14,
      marginHorizontal: 5,
    },
    strikeThroughText: {
      textDecorationLine: 'line-through',
      color: 'grey',
      fontWeight: '600',
      fontSize: 13,
    },
    text: {
      color: theme.colors.primary,
    },
    discountText: {
      fontSize: 14,
      color: theme.colors.primary,
    },
    space: {
      width: 10,
    },
  });

  return (
    <Column>
      <Container
        paddingRight={10}
        paddingLeft={10}
        child={
          <Row>
            {product?.min_price !== product?.max_price ? (
              <Row>
                <Text>{checkMinMaxPrice(product.min_price)}</Text>
                <Text style={styles.money}>-</Text>
                <Text>{checkMinMaxPrice(product.max_price)}</Text>
                <SizedBox width={10}></SizedBox>
                {product?.product_discount && (
                  <View style={styles.row}>
                    <Text style={styles.strikeThroughText}>
                      ₫{convertToMoney(product.minPrice)}₫
                    </Text>
                    <Text style={styles.text}> - </Text>
                    <Text style={styles.strikeThroughText}>
                      ₫{convertToMoney(product.maxPrice)}₫
                    </Text>
                    <View style={styles.space} />
                    <Text style={styles.discountText}>
                      -{convertToMoney(product.product_discount)}%
                    </Text>
                  </View>
                )}
              </Row>
            ) : product.min_price === 0 ? (
              <Text style={styles.money}>Giá: Liên hệ</Text>
            ) : product.product_discount !== null ? (
              <Row crossAxisAlignment={'center'}>
                <Text style={styles.money}>
                  {convertToMoney(
                    product.product_discount?.discount_price ?? 0,
                  )}
                  ₫
                </Text>
                <SizedBox width={10}></SizedBox>
                <Text style={styles.strikeThroughText}>
                  {convertToMoney(product.max_price ?? 0)}₫
                </Text>
                <SizedBox width={10}></SizedBox>
                <Text style={{fontSize: 12, color: theme.colors.primary}}>
                  {`-${convertToMoney(product.product_discount?.value ?? 0)}%`}
                </Text>
              </Row>
            ) : (
              <Text style={styles.money}>
                {convertToMoney(product.max_price ?? 0)}
              </Text>
            )}
          </Row>
        }></Container>
      {badge.status_collaborator === 1 && (
        <View style={styles.row}>
          {moneyRose()}
          <Text style={styles.money}> (Hoa hồng)</Text>
        </View>
      )}
      {badge.status_agency === 1 && (
        <View style={styles.row}>
          {product.min_price_before_override !==
          product.max_price_before_override ? (
            <View style={styles.row}>
              <Text style={styles.money}>
                ₫
                {convertToMoney(
                  checkMinMaxPrice(product.min_price_before_override),
                )}
              </Text>
              <Text style={styles.money}>-</Text>
              <Text style={styles.money}>
                ₫
                {convertToMoney(
                  checkMinMaxPrice(product.max_price_before_override),
                )}
              </Text>
            </View>
          ) : (
            <Text style={styles.money}>
              ₫
              {convertToMoney(
                checkMinMaxPrice(product.min_price_before_override),
              )}
            </Text>
          )}
          <Text style={styles.money}> (Giá bán lẻ)</Text>
        </View>
      )}
      {badge.status_agency === 1 && product.percent_agency > 0 && (
        <View style={styles.row}>
          {product.min_price_before_override !==
          product.max_price_before_override ? (
            <View style={styles.row}>
              <Text style={styles.money}>
                ₫
                {convertToMoney(
                  checkMinMaxPrice(product.min_price_before_override) *
                    (product.percent_agency / 100),
                )}
              </Text>
              <Text style={styles.money}>-</Text>
              <Text style={styles.money}>
                ₫
                {convertToMoney(
                  checkMinMaxPrice(product.max_price_before_override) *
                    (product.percent_agency / 100),
                )}
              </Text>
            </View>
          ) : (
            <Text style={styles.money}>
              ₫
              {convertToMoney(
                checkMinMaxPrice(product.min_price_before_override) *
                  (product.percent_agency / 100),
              )}
            </Text>
          )}
          <Text style={styles.money}> (Hoa hồng giới thiệu)</Text>
        </View>
      )}
    </Column>
  );
};

export default PriceProduct;
