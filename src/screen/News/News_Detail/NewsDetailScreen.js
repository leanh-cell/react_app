import {observer} from 'mobx-react';

const {default: Scaffold} = require('../../../components/Scafold');
import IAppBar from '../../../components/AppBar';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Column from '../../../components/Column';
import {Text} from 'react-native-paper';
import moment from 'moment';
import SizedBox from '../../../components/SizedBox';
import {useNewStore} from '../../../store/NewStore';
import {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native';
import ImageIKI from '../../../components/ImageIKI';

const NewsDetailScreen = observer(({route, navigation}) => {

  const {loadInitNew, itemNew, getOneNew} = useNewStore();

  const {newId} = route.params;
  useEffect(() => {
    getOneNew(newId);
  }, []);
  const {width} = useWindowDimensions();
  const currentDateTime = new Date();
  return (
    <Scaffold
      appbar={<IAppBar title={'Tin Tức'}></IAppBar>}
      body={
        loadInitNew ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            <ActivityIndicator />
          </View>
        ) : (
          <ScrollView>
            <Column padding={8}>
              <ImageIKI
                style={{
                  height: 250,
                }}
                uri={itemNew?.image_url ?? ''}></ImageIKI>
              <SizedBox height={10} />
              <Text>
                Tin tức ngày {moment(currentDateTime).format('DD-MM-YYYY')}
              </Text>
              <SizedBox height={10} />

              <RenderHtml
                contentWidth={width}
                source={{
                  html: itemNew?.content,
                }}
              />
            </Column>
          </ScrollView>
        )
      }></Scaffold>
  );
});

export default NewsDetailScreen;
