import {observer} from 'mobx-react';
import Scaffold from '../../components/Scafold';
import {
  Image,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import IAppBar from '../../components/AppBar';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Column from '../../components/Column';
import SizedBox from '../../components/SizedBox';
import {StyleSheet} from 'react-native';
import {useNewStore} from '../../store/NewStore';
import React, {useEffect, useRef} from 'react';

const NewScreen = observer(({route, navigation}) => {
  const {news, categoryNews, loading, getAllNews, getAllCategoryNews} =
    useNewStore();
  const [indexCategory, setIndexCategory] = React.useState(0);

  useEffect(() => {
    getData();
  }, []);
  getData = async () => {
    getAllNews();
    getAllCategoryNews();
  };
  const itemNew = news => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NEWS_DETAIL_SCREEN', {newId: news?.id});
        }}>
        <Container
          padding={10}
          alignItems="flex-start"
          child={
            <Row
              mainAxisAlignment={'flex-start'}
              crossAxisAlignment={'flex-start'}>
              <Image
                source={{
                  uri: news.image_url,
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
                resizeMode="cover"></Image>
              <SizedBox width={10}></SizedBox>
              <Text style={styles.textTitleNew}>{news.title}</Text>
            </Row>
          }></Container>
      </TouchableOpacity>
    );
  };

  const itemCategory = (category, index) => {
    return (
      <Container
        height={30}
        padding={5}
        margin={5}
        borderBottomColor={indexCategory == index ? 'blue' : null}
        borderBottomWidth={indexCategory == index ? 1 : null}
        child={
          <Row
            mainAxisAlignment={'flex-start'}
            crossAxisAlignment={'flex-startr'}>
            {category.image_url != null && (
              <Image
                source={{uri: category.image_url ?? ''}}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                }}
                resizeMode="cover"></Image>
            )}

            <Text>{category.title}</Text>
          </Row>
        }></Container>
    );
  };

  return loading ? (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <ActivityIndicator />
    </View>
  ) : (
    <Scaffold
      appbar={
        <IAppBar title={'Tin Tức'} automaticallyImplyLeading={false}></IAppBar>
      }
      body={
        <View style={{flex: 1}}>
          <ScrollView horizontal={true}>
            <Row>
              {(categoryNews ?? []).map((e, index) => {
                return itemCategory(e, index);
              })}
            </Row>
          </ScrollView>

          <ScrollView>
            <Column
              crossAxisAlignment={'flex-start'}
              mainAxisAlignment={'flex-start'}>
              {(news ?? []).map(e => {
                return itemNew(e);
              })}
            </Column>
          </ScrollView>
        </View>
      }></Scaffold>
  );
});

const styles = StyleSheet.create({
  textTitleNew: {
    fontSize: 16,
    fontWeight: '500',
  },
  container: {
    height: 10,
    backgroundColor: 'blue',
  },
});

export default NewScreen;
