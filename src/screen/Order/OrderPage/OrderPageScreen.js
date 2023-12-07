import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  ActivityIndicator,
  TextInput,
  FlatList,
} from 'react-native';

import {observer} from 'mobx-react';

import OrderCPN from './child/OrderCPN';
import Scaffold from '../../../components/Scafold';
import {useOrderStore} from '../../../store/OrderStore';
import {useDataAppStore} from '../../../store/DataAppStore';

const OrderPageScreen = observer(({navigation, fieldByValue}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {appTheme, badge} = useDataAppStore();

  const {isLoading, loadInit, listOrder, getAllOrder} = useOrderStore();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {loadInit ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={listOrder}
          renderItem={({item, separators}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ORDER_DETAIL', {orderCode: item.order_code});
              }}>
              <OrderCPN order={item}></OrderCPN>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ListFooterComponent={isLoading ? <ActivityIndicator /> : <></>}
          //   onEndReached={getAllOrder(false, fieldByValue)}
          onEndThreshold={0}
        />
      )}
    </View>
  );
});

export default OrderPageScreen;
