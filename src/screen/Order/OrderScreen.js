import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import IAppBar from '../../components/AppBar';
import OrderPageScreen from './OrderPage/OrderPageScreen';
import {ORDER_STATUS} from '../../constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import {useOrderStore} from '../../store/OrderStore';
import {is} from 'date-fns/locale';
import {useFocusEffect} from '@react-navigation/native';

const OrderScreen = observer(({route, navigation}) => {
  const {setClickTab, isClickTab, getAllOrderDeboucer, getAllOrder} = useOrderStore();

  function WAITING_FOR_PROGRESSING() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.WAITING_FOR_PROGRESSING}
      />
    );
  }
  function PACKING() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.PACKING}
      />
    );
  }
  function SHIPPING() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.SHIPPING}
      />
    );
  }
  function COMPLETED() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.COMPLETED}
      />
    );
  }
  function OUT_OF_STOCK() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.OUT_OF_STOCK}
      />
    );
  }
  function USER_CANCELLED() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.USER_CANCELLED}
      />
    );
  }
  function CUSTOMER_CANCELLED() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.CUSTOMER_CANCELLED}
      />
    );
  }
  function DELIVERY_ERROR() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.DELIVERY_ERROR}
      />
    );
  }
  function CUSTOMER_RETURNING() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.CUSTOMER_RETURNING}
      />
    );
  }
  function CUSTOMER_HAS_RETURNS() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.CUSTOMER_HAS_RETURNS}
      />
    );
  }
  function ALL() {
    return (
      <OrderPageScreen
        navigation={navigation}
        fieldByValue={ORDER_STATUS.ALL}
      />
    );
  }

  const Tab = createMaterialTopTabNavigator();

  const nameToStatus = {
    'Chờ xác nhận': ORDER_STATUS.WAITING_FOR_PROGRESSING,
    'Đang chuẩn bị hàng': ORDER_STATUS.PACKING,
    'Đang giao hàng': ORDER_STATUS.SHIPPING,
    'Đã hoàn thành': ORDER_STATUS.COMPLETED,
    'Hết hàng': ORDER_STATUS.OUT_OF_STOCK,
    'Shop huỷ': ORDER_STATUS.USER_CANCELLED,
    'Khách đã huỷ': ORDER_STATUS.CUSTOMER_CANCELLED,
    'Lỗi giao hàng': ORDER_STATUS.DELIVERY_ERROR,
    'Chờ trả hàng': ORDER_STATUS.CUSTOMER_RETURNING,
    'Đã trả hàng': ORDER_STATUS.CUSTOMER_HAS_RETURNS,
    'Tất cả': ORDER_STATUS.ALL,
  };

  useFocusEffect(
    React.useCallback(() => {
      getAllOrder(true, null, null,true);
    }, []),
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <IAppBar title={'Danh sách đơn hàng'}></IAppBar>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Tab.Navigator
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarLabelStyle: {fontSize: 12, color: 'black'},
            tabBarStyle: {backgroundColor: 'white'},
            tabBarItemStyle: {width: 'auto'},
          }}
          screenListeners={v => {
            if (isClickTab == false) {
              console.log('==========', v.route.name);
              getAllOrderDeboucer(
                true,
                nameToStatus[v.route.name],
                v.route.name,

              );
            }
          }}>
          <Tab.Screen name="Chờ xác nhận" component={WAITING_FOR_PROGRESSING} />
          <Tab.Screen name="Đang chuẩn bị hàng" component={PACKING} />
          <Tab.Screen name="Đang giao hàng" component={SHIPPING} />
          <Tab.Screen name="Đã hoàn thành" component={COMPLETED} />
          <Tab.Screen name="Hết hàng" component={OUT_OF_STOCK} />
          <Tab.Screen name="Shop huỷ" component={USER_CANCELLED} />
          <Tab.Screen name="Khách đã huỷ" component={CUSTOMER_CANCELLED} />
          <Tab.Screen name="Lỗi giao hàng" component={DELIVERY_ERROR} />
          <Tab.Screen name="Chờ trả hàng" component={CUSTOMER_RETURNING} />
          <Tab.Screen name="Đã trả hàng" component={CUSTOMER_HAS_RETURNS} />
          <Tab.Screen name="Tất cả" component={ALL} />
        </Tab.Navigator>
      </View>
    </View>
  );
});

export default OrderScreen;
