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
import Scaffold from '../../../components/Scafold';
import Coin from '../../../components/Icons/Coin';
import Column from '../../../components/Column';
import IAppBar from '../../../components/AppBar';
import { observer } from 'mobx-react';
import Container from '../../../components/Container';
import Row from '../../../components/Row';
import { TextInput } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import SizedBox from '../../../components/SizedBox';
import Stack from '../../../components/Stack';
import Expanded from '../../../components/Expanded';
const { width: SCREEN_WIDTH } = Dimensions.get('screen');
const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

const VourcherWallet = observer(({ }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [text, setText] = React.useState('');
    const [check, setCheck] = React.useState(true);

    const changeCheck = () => {
        setCheck(!check);
        console.log(check);
    }

    const clearInput = () => {
        setText('');
    };

    const itemvoucher = ({ vcCode, title, subTitle, des, time }) => {
        return <Container
            margin={15}
            // borderColor={'#E2E2E2'}
            child={
                <Row>
                    <Stack>
                        <Container
                            flex={1}
                            width={100}
                            backgroundColor={'blue'}
                            alignItems={'center'}
                            paddingTop={15}
                            paddingLeft={10}
                            paddingRight={10}
                            child={
                                <Column crossAxisAlignment={'center'}>
                                    <Text style={{ color: 'white', fontWeight: '500' }}>Mã :</Text>
                                    <Text style={{ color: 'white', display: 'flex', flexWrap: 'wrap' }}>{vcCode}</Text>
                                </Column>
                            }
                        />
                        <View style={{
                            backgroundColor: 'white',
                            borderRadius: 5,
                            height: 10,
                            width: 10,
                            position: 'absolute',
                            top: 13,
                            left: -5,
                        }}>
                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            borderRadius: 5,
                            height: 10,
                            width: 10,
                            position: 'absolute',
                            top: 33,
                            left: -5,
                        }}>
                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            borderRadius: 5,
                            height: 10,
                            width: 10,
                            position: 'absolute',
                            top: 53,
                            left: -5,
                        }}>
                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            borderRadius: 5,
                            height: 10,
                            width: 10,
                            position: 'absolute',
                            top: 73,
                            left: -5,
                        }}>
                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            borderRadius: 5,
                            height: 10,
                            width: 10,
                            position: 'absolute',
                            top: 93,
                            left: -5,
                        }}>
                        </View>
                    </Stack>
                    <Container
                        flex={2}
                        borderColor={'#E2E2E2'}
                        child={
                            <Row>
                                <TouchableOpacity
                                    onPress={changeCheck}
                                >
                                    <Container
                                        // margin={20}
                                        // minWidth={250}
                                        flex={1}
                                        paddingTop={15}
                                        paddingLeft={20}
                                        child={
                                            <Column>
                                                <Text style={{ fontSize: 16, fontWeight: '600' }}>{title}</Text>
                                                <SizedBox height={8} />
                                                <Text style={{ fontSize: 16, fontWeight: '600' }}>{subTitle}</Text>
                                                <SizedBox height={8} />
                                                <Text style={{ fontSize: 14, color: 'grey', display: 'flex', flexWrap: 'wrap' }}>{des}</Text>
                                                <SizedBox height={8} />
                                                <Text style={{ fontSize: 14, color: 'grey' }}>HSD: {time}</Text>
                                            </Column>
                                        }
                                    />
                                </TouchableOpacity>
                                <Container
                                    // flex={2}
                                    width={30}
                                    height={30}
                                    borderRadius={15}
                                    borderColor={'#E2E2E2'}
                                    backgroundColor={check ? 'white' : 'blue'}

                                />
                            </Row>
                        }
                    />
                </Row>
            }
        />
    }
    return (<Scaffold
        appbar={
            <IAppBar title={"Ví Voucher"}>
            </IAppBar>}
        body={
            <View style={styles.container} >
                <Column>
                    <Container
                        backgroundColor='white'
                        marginBottom={10}
                        padding={10}
                        child={
                            <Row>
                                <Container
                                    width={'75%'}
                                    borderRadius={4}
                                    // paddingTop={8}
                                    paddingLeft={10}
                                    // paddingBottom={8}
                                    paddingRight={20}
                                    marginRight={15}

                                    borderColor='blue'
                                    alignItems='left'
                                    justifyContent='center'
                                    child={
                                        <Row mainAxisAlignment={'start'}>
                                            <TextInput
                                                style={styles.input}
                                                activeUnderlineColor='transparent'
                                                selectionColor="black"
                                                underlineColor='transparent'
                                                placeholder='Nhập mã voucher'
                                                caretHidden={false}
                                                dense={true}
                                                numberOfLines={1}
                                                value={text}
                                                onChangeText={(value) => setText(value)}
                                            />
                                            <TouchableOpacity
                                                onPress={clearInput}
                                            ><Container
                                                    // marginRight={0}
                                                    width={15}
                                                    height={15}
                                                    borderRadius={7.5}
                                                    backgroundColor='grey'
                                                    paddingLeft={4.9}
                                                    paddingBottom={2}
                                                    child={
                                                        // <SizedBox height={0} width={0} >
                                                        <Text style={{ color: "white", fontSize: 11 }}>x</Text>
                                                        // </SizedBox>

                                                    }
                                                />
                                            </TouchableOpacity>
                                        </Row>
                                    }
                                />
                                <Container
                                    borderRadius={4}
                                    paddingTop={12}
                                    // paddingBottom={10}
                                    height={'100%'}
                                    paddingLeft={15}
                                    paddingRight={15}
                                    backgroundColor='blue'
                                    child={
                                        <Text style={{ color: 'white', fontWeight: '600' }} >Áp Dụng</Text>
                                    }
                                />
                            </Row>
                        } />
                    {/* <Container
                        width={windowWidth}
                        height={10}
                        backgroundColor={'#F5F5F5'} 
                        /> */}

                    <Container
                        backgroundColor={'white'}
                        height={windowHeight}
                        child={
                            <ScrollView>
                                <Column>
                                    {
                                        itemvoucher({
                                            vcCode: 'PSCCK10dcdccdcdcd',
                                            title: 'CK10',
                                            subTitle: 'còn lại 9988888',
                                            des: 'giảm giá cho toàn bộ sản phẩm ',
                                            time: '12:22:23'
                                        })
                                        
                                    }
                                    {
                                        itemvoucher({
                                            vcCode: 'PSCCK10dcdccdcdcd',
                                            title: 'CK10',
                                            subTitle: 'còn lại 9988888',
                                            des: 'giảm giá cho toàn bộ sản phẩm ',
                                            time: '12:22:23'
                                        })
                                        
                                    }
                                </Column>
                            </ScrollView>
                        }
                    />

                </Column>
            </View>
        }
        bottomNavigationBar={
            <Container
                backgroundColor={'blue'}
                alignItems={'center'}
                marginBottom={15}
                marginLeft={30}
                marginRight={30}
                paddingTop={15}
                paddingBottom={15}
                borderRadius={10}
                child={
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>Đồng ý</Text>
                }
            />
        }
    >
    </Scaffold>
    );
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        width: SCREEN_WIDTH
    },
    input: {
        width: '100%',
        backgroundColor: "transparent",
        // lineHeight:30
    }
});
export default VourcherWallet;