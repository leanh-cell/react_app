import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import {BottomNavigation, useTheme} from 'react-native-paper';
import IAppbar from '../components/AppBar';
import Scaffold from '../components/Scafold';
import HomeScreen from './Home/HomeScreen';
import ProfileScreen from './Profile/ProfileScreen';
import NewScreen from './News/NewScreen';
import CartScreen from './Cart/CartScreen';

function NavigationScreen({navigation}) {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Trang chủ',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {key: 'news', title: 'Tin tức', focusedIcon: 'album'},
    {key: 'cart', title: 'Giỏ hàng', focusedIcon: 'cart'},
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const HomeRouter = () => <HomeScreen navigation={navigation} />;
  const NewRoute = () => <NewScreen navigation={navigation}></NewScreen>;
  const CartsRoute = () => <CartScreen navigation={navigation}></CartScreen>;

  const NotificationsRoute = () => (
    <ProfileScreen navigation={navigation}></ProfileScreen>
  );

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRouter,
    news: NewRoute,
    cart: CartsRoute,
    notifications: NotificationsRoute,
  });
  return (
    <View style={styles.screen}>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default NavigationScreen;
