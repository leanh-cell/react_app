import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import * as routes from './routes';
import {Theme} from '@react-navigation/native/lib/typescript/src/types';
import {Platform} from 'react-native';

import NavigationScreen from '../screen/NavigationScreen';
import ProductScreen from '../screen/Product/ProductScreen';
import LoginScreen from '../screen/Login/LoginScreen';
import NewsDetailScreen from '../screen/News/News_Detail/NewsDetailScreen';
import CartScreen from '../screen/Cart/CartScreen';
import ConfirmScreen from '../screen/Confirm/ConfirmScreen';
import AddressReceiverScreen from '../screen/Address/AddressReceiverScreen';
import NewAddressScreen from '../screen/Address/NewAddressScreen';
import ChooseAddressScreen from '../screen/Address/ChooseAddressScreen';
import AddressScreen from '../screen/Address/AddressScreen';
import ShipmentScreen from '../screen/Shipment/ShipmentScreen';
import VoucherScreen from '../screen/Voucher/VoucherScreen';
import ConditionScreen from '../screen/Voucher/ConditionScreen';
import PaymentScreen from '../screen/Payment/PaymentScreen';
import OrderScreen from '../screen/Order/OrderScreen';
import OrderDetailScreen from '../screen/Order/OrderDetail/OrderDetailScreen';
import OrderSuccessScreen from '../screen/OrderSuccess/OrderSuccessScreen';
export default function Navigation({theme}: {theme: Theme}) {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routes.HOME}
      screenOptions={{
        header: props => <></>,
        presentation: Platform.select({
          ios: 'card',
          android: 'transparentModal',
        }),
      }}>
      <Stack.Screen
        name={routes.HOME}
        component={NavigationScreen}
        //options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.PRODUCT}
        component={ProductScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.NEWS_DETAIL_SCREEN}
        component={NewsDetailScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.CART}
        component={CartScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.CONFIRM}
        component={ConfirmScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.ADDRESS_RECEIVER}
        component={AddressReceiverScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.NEW_ADDRESS}
        component={NewAddressScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.CHOOSE_ADDRESS_API}
        component={ChooseAddressScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.MY_ADDRESS}
        component={AddressScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.SHIPMENT}
        component={ShipmentScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.VOUCHER}
        component={VoucherScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.CONDITION_VOUCHER}
        component={ConditionScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.PAYMENT}
        component={PaymentScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.ORDER}
        component={OrderScreen}
        // options={{title: 'New Class', headerShown: false}}
      />
      <Stack.Screen
        name={routes.ORDER_DETAIL}
        component={OrderDetailScreen}
        // options={{title: 'New Class', headerShown: false}}
      /> 
      <Stack.Screen
        name={routes.ORDER_SUCCESS}
        component={OrderSuccessScreen}
        // options={{title: 'New Class', headerShown: false}}
      /> 
    </Stack.Navigator>
  );
}
