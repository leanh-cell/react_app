// CounterScreen.js
import React, {useContext, useEffect} from 'react';
import {Button, Text, View, Image, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Card, Title} from 'react-native-paper';
import {observer} from 'mobx-react-lite';
import {useCounterStore} from '../store/CartStore';
import Scaffold from '../components/Scafold';
import IAppBar from '../components/AppBar';
import StoreCode from '../singletons/StoreCode';

export const SplashScreen = () => {
  return (
    <Scaffold
      // appbar={
      //   <IAppBar title={'ssss'} automaticallyImplyLeading={false}></IAppBar>
      // }
      body={
        <View style={styles.container}>
          <Card style={{borderRadius: 10}}>
            <Card.Content>
              <Image
                source={require('../../assets/images/favicon.png')}
                style={{resizeMode: 'cover'}}
              />
            </Card.Content>
          </Card>
          <Title style={{marginTop: 30}}>IKI CUSTOMER</Title>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
