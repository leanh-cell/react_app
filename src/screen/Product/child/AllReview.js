import React from 'react';
import {
    View,
    SafeAreaView,
    Animated,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    Text,
} from 'react-native';
import { observer } from 'mobx-react';
import Scaffold from '../../../components/Scafold';
import IAppBar from '../../../components/AppBar';
import Column from '../../../components/Column';
import Row from '../../../components/Row';
import Container from '../../../components/Container';
import SizedBox from '../../../components/SizedBox';
import IgnorePointer from '../../../components/IgnorePointer';
import { Rating } from 'react-native-ratings';
import { useProductStore } from '../../../store/ProductStore';
import ImageIKI from '../../../components/ImageIKI';
import { getDDMMYY, getHHMMSS } from '../../../utils/apis/stringUtil';
import Expanded from '../../../components/Expanded';


const { width: SCREEN_WIDTH } = Dimensions.get('screen');
const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

const AllReview = observer(({ route, navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const { averagedStars, listReview } = useProductStore();

    const { product } = route.params;
    function header() {
        return (
            <View style={styles.headercss}>
                <Column>
                    <Row>
                        <Container
                            flex={1}
                            paddingTop={10}
                            paddingBottom={10}
                            backgroundColor={'#F5F5F5'}
                            alignItems={'center'}
                            borderRadius={8}
                            child={
                                <Text>Tất cả</Text>
                            }
                        />
                        <SizedBox
                            width={10}
                        />
                        <Container
                            flex={1}
                            paddingTop={10}
                            paddingBottom={10}
                            backgroundColor={'#F5F5F5'}
                            alignItems={'center'}
                            borderRadius={8}
                            child={
                                <Text>Có hình ảnh</Text>
                            }
                        />
                    </Row>
                    <SizedBox
                        height={10}
                    />
                    <SizedBox
                    height={50}
                    width={windowWidth}
                    child={
                        <Row>
                        <Container
                            height={50}
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={5}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(5)</Text>
                                </Column>
                            } />
                        <Container
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={4}
                                                    ratingCount={4}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(4)</Text>
                                </Column>
                            } />
                        <Container
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={3}
                                                    ratingCount={3}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(3)</Text>
                                </Column>
                            } />
                        <Container
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={2}
                                                    ratingCount={2}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(2)</Text>
                                </Column>
                            } />
                        <Container
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={1}
                                                    ratingCount={1}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(1)</Text>
                                </Column>
                            } />
                    </Row>
                    }
                    />
                    {/* <Row>
                        <Container
                            height={50}
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={5}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(5)</Text>
                                </Column>
                            } />
                        <Container
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={4}
                                                    ratingCount={4}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(4)</Text>
                                </Column>
                            } />
                        <Container
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={3}
                                                    ratingCount={3}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(3)</Text>
                                </Column>
                            } />
                        <Container
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={2}
                                                    ratingCount={2}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(2)</Text>
                                </Column>
                            } />
                        <Container
                            width={(windowWidth / 5) - 11}
                            borderRadius={5}
                            backgroundColor={'#F5F5F5'}
                            padding={6}
                            marginRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Container
                                        marginBottom={5}
                                        child={
                                            <IgnorePointer>
                                                <Rating
                                                    // ratingBackgroundColor='#F5F5F5'
                                                    // ratingColor='#F5F5F5'
                                                    tintColor='#F5F5F5'
                                                    // ratingBackgroundColor={'#F5F5F5'}
                                                    showRating={false}
                                                    imageSize={13}
                                                    startingValue={1}
                                                    ratingCount={1}
                                                />
                                            </IgnorePointer>
                                        }
                                    />
                                    <Text>(1)</Text>
                                </Column>
                            } />
                    </Row> */}
                    <Text></Text>
                </Column>
            </View>
        );
    }
    return (
        <Scaffold
            appbar={
                <IAppBar
                    title={'Đánh giá'}
                />
            }
            body={
                <>
                    {header()}
                    <Container
                        height={10}
                        backgroundColor={'#F5F5F5'}
                        width={windowWidth}
                    />
                    <View style={styles.container}>
                        <ScrollView>
                            {(listReview ?? []).map((item, index) => {
                                return (
                                    <Container
                                        padding={10}
                                        child={
                                            <Row crossAxisAlignment="start">
                                                <ImageIKI
                                                    uri={item?.customer?.avatar_image ?? ''}
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                        borderRadius: 2,
                                                    }}></ImageIKI>
                                                <SizedBox width={10}></SizedBox>
                                                <Column crossAxisAlignment={'flex-start'}>
                                                    <Text>{item?.customer?.name ?? ''}</Text>
                                                    <SizedBox height={5}></SizedBox>
                                                    <IgnorePointer>
                                                        <Rating
                                                            showRating={false}
                                                            imageSize={13}
                                                            startingValue={item?.stars ?? 5}
                                                        />
                                                    </IgnorePointer>
                                                    <SizedBox height={5}></SizedBox>
                                                    <Text style={{ fontSize: 13 }}>{item?.content ?? ''}</Text>
                                                    <SizedBox height={5}></SizedBox>
                                                    <Text style={{ color: 'grey', fontSize: 12 }}>{`${getDDMMYY(
                                                        item?.created_at,
                                                    )} ${getHHMMSS(item?.created_at)}`}</Text>
                                                </Column>
                                            </Row>
                                        }></Container>
                                );
                            })}
                        </ScrollView>
                    </View>
                </>
            }

        >
        </Scaffold>
    );
});
const styles = StyleSheet.create(
    {
        headercss: {
            // flex: 2,
            backgroundColor: 'white',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT / 6,
            paddingLeft: 8,
            paddingRight: 8
        },
        container: {
            flex: 8,
            backgroundColor: 'white',
            width: SCREEN_WIDTH,
            // paddingLeft: 8,
            // paddingRight: 8
        }
    }
);
export default AllReview;