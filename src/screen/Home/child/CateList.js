import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Wrap from '../../../components/Wrap';
import SizedBox from '../../../components/SizedBox';
import Container from '../../../components/Container';

const CateList = layout => {
  const checkHeight = () => {
    const cateNumber = layout.list.length;
    if (cateNumber < 7) {
      return Dimensions.get('window').width / 4.5 + 20;
    } else {
      return (Dimensions.get('window').width / 4.5 + 20) * 2;
    }
  };

  const checkWidth = () => {
    const cateNumber = layout.list.length;
    if (cateNumber < 7) {
      return cateNumber * (Dimensions.get('window').width / 4.5) + 1;
    } else {
      const ca2 = Math.ceil(cateNumber / 2);
      return ca2 * (Dimensions.get('window').width / 4.5) + 1;
    }
  };

  return (
    <Container paddingTop={10} child={<View style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{width: Dimensions.get('window').width}}>
      <View
        style={{
          height: checkHeight(),
          width: checkWidth(),
          flexDirection: 'column',

          justifyContent: 'space-between',
          marginTop: 10,
        }}>
    
        {
          <Wrap runSpacing={10}>
            {layout.list.map((e, index) => (
              <TouchableOpacity
                key={e.id}
                onPress={() => {}}
                style={{
                  width: Dimensions.get('window').width / 4.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: Dimensions.get('window').width / 6,
                    height: Dimensions.get('window').width / 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: 25,
                  }}
                  source={{uri: e.image_url || ''}}
                />
                <SizedBox height={10}></SizedBox>
                <View style={{height: 30, paddingLeft: 3, paddingRight: 3}}>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: 'center',
                    }}
                    numberOfLines={2}>
                    {e.name || ''}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </Wrap>
        }
      </View>
    </ScrollView>
  </View>}></Container>
  );
};

export default CateList;
