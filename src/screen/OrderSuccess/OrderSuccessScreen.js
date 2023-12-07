import React, {useEffect} from 'react';
import {Text, Dimensions} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDataAppStore} from '../../store/DataAppStore';
import Scaffold from '../../components/Scafold';
import IAppBar from '../../components/AppBar';
import Row from '../../components/Row';
import SizedBox from '../../components/SizedBox';
import Column from '../../components/Column';
import IButton from '../../components/IButton';
import SuccessIcon from '../../components/Icons/SuccessIcon';
import {observer} from 'mobx-react-lite';
import { convertToMoney } from '../../utils/apis/stringUtil';

const OrderSuccessScreen = observer(({route, navigation}) => {
  const insets = useSafeAreaInsets();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {appTheme, badge} = useDataAppStore();

  const {order} = route.params;

  return (
    <Scaffold
      appbar={<IAppBar title={''}></IAppBar>}
      body={
        <Column mainAxisAlignment={'center'} crossAxisAlignment={'center'}>
          <SuccessIcon></SuccessIcon>
          <SizedBox height={30} width={windowWidth}></SizedBox>
          <Text style={{fontSize: 25}}>Đặt hàng thành công</Text>
          <SizedBox height={30}></SizedBox>
          <Column flex={0} width={windowWidth} padding={10}>
            <Row mainAxisAlignment={'space-between'} padding={10}>
              <Text>Mã đơn hàng</Text>
              <Text>{`${order?.order_code}`}</Text>
            </Row>
            <Row mainAxisAlignment={'space-between'} padding={10}>
              <Text>Phương thức thanh toán</Text>
              <Text>{`${order?.payment_partner_name}`}</Text>
            </Row>
            <Row mainAxisAlignment={'space-between'} padding={10}>
              <Text>Tổng thanh toán</Text>
              <Text>{`${convertToMoney(order?.total_final)}`}</Text>
            </Row>
            <Row mainAxisAlignment={'space-between'} padding={10}>
              <Text>Trạng thái đơn hàng</Text>
              <Text>{`${order?.order_status_name}`}</Text>
            </Row>
            <Row mainAxisAlignment={'space-between'} padding={10}>
              <Text>Trạng thái thanh toán</Text>
              <Text>{`${order?.payment_status_name}`}</Text>
            </Row>
          </Column>
          <SizedBox height={30}></SizedBox>
          <IButton
            text={'TIẾP TỤC MUA SẮM'}
            width={windowWidth - 50}
            onPress={() => {}}></IButton>
        </Column>
      }></Scaffold>
  );
});

export default OrderSuccessScreen;
