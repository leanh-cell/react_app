import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import Column from '../../../components/Column';
import Container from '../../../components/Container';
import {useDataAppStore} from '../../../store/DataAppStore';
import {getDDMMYY} from '../../../utils/apis/stringUtil';
import SizedBox from '../../../components/SizedBox';

const PostNewCard = layout => {
  return (
    <Column>
      <Container
        padding={5}
        height={280}
        child={
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {layout?.list?.map((e, index) => {
              let categoryTitle = '';
              if (e?.categories != null && e?.categories.length > 0) {
                categoryTitle = e?.categories[0]?.title || '';
              }
              return (
                <Container
                  padding={5}
                  width={300}
                  child={
                    <Column>
                      <View style={styles.imageContainer}>
                        <Image
                          style={styles.postImage}
                          source={{
                            uri: e?.image_url || '',
                          }}
                          resizeMode="cover"
                        />
                      </View>
                      <SizedBox height={10}></SizedBox>
                      <Text numberOfLines={2}>{e?.title || ''}</Text>
                      <SizedBox height={5}></SizedBox>
                      <Text style={styles.textSub}>{categoryTitle || ''}</Text>
                      <SizedBox height={5}></SizedBox>
                      <Text style={styles.textSub}>
                        {getDDMMYY(e?.updated_at)}
                      </Text>
                    </Column>
                  }></Container>
              );
            })}
          </ScrollView>
        }></Container>
    </Column>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  postImage: {
    height: 180,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textSub: {
    fontSize: 11,

    color: 'grey',
  },
});

export default PostNewCard;
