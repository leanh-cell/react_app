import IAppBar from "../../../components/AppBar";
import Scaffold from "../../../components/Scafold";
import { StyleSheet, View, ScrollView, Dimensions, } from "react-native";
import Column from "../../../components/Column";
import Row from "../../../components/Row";

import { observer } from 'mobx-react';
import Container from "../../../components/Container";
import { Text } from "react-native-paper";
import SizedBox from "../../../components/SizedBox";
import Checklistnew from "../../../components/Icons/checklistnew";
import Coin from "../../../components/Icons/Coin";
import Ribbon3 from "../../../components/Icons/Ribbon3";
import GroupEmty from "../../../components/Icons/GroupEmty";
import CoinAccumulate from "../../../components/Icons/ CoinsAccumulate";
const { width: SCREEN_WIDTH } = Dimensions.get('screen');
const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

const AccumulatedCoins = observer(({ }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const item = (icon, title, subTitle, exam ) => {
        return <Column>
            <Row margin={10}>
                <Container
                // style={{}}
                    width={35}
                    height={35}
                    borderRadius={17.5}
                    paddingLeft={1}
                    borderColor='grey'
                    alignItems='center'
                    justifyContent='center'
                    child={
                        icon
                    }
                />
                <SizedBox width={10} />
                <Column>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>{title}</Text>
                    <Text style={{ color: 'green', fontSize: 16, marginBottom: 3 }} >{subTitle}</Text>
                    {exam && <Text style={{ fontSize: 14, color: '#A0A0A0', marginBottom: 3 }}>{exam}</Text>}
                </Column>
            </Row>
            <Container height={1}
                width={windowWidth}
                backgroundColor={'#DDDADA'} />
        </Column>
    }
    return (
        <Scaffold
            appbar={
                <IAppBar
                    title={'Xu Tích Luỹ'}
                >
                </IAppBar>
            }
            body={
                <View style={styles.container}>
                    <ScrollView>
                        <Column>
                            <Container
                                width={windowWidth}
                                margin={10}
                                child={
                                    <Row>
                                        <Container
                                            width={35}
                                            height={35}
                                            alignItems='center'
                                            justifyContent='center'
                                            borderRadius={20}
                                            borderColor='grey'
                                            child={
                                                <CoinAccumulate></CoinAccumulate>
                                            }
                                        />
                                        <SizedBox width={10} />
                                        <Text style={{ fontWeight: "600", fontSize: 17 }}>Xu tích luỹ :</Text>
                                    </Row>
                                } />
                            <SizedBox height={20} />
                            <Container
                                marginLeft={30}
                                marginRight={30}
                                borderColor='#FFE6B9'
                                alignItems='center'
                                paddingTop={20}
                                paddingBottom={20}
                                child={
                                    <Text
                                        style={styles.text}
                                    >0 Xu</Text>
                                }
                            />
                            <SizedBox
                                height={20} />
                            <Text style={{ textAlign: 'center', fontWeight: '500', textDecorationLine: 'underline' }}>lịch sử tích điểm</Text>
                            <SizedBox
                                height={15} />
                            <Container
                                height={10}
                                width={windowWidth}
                                backgroundColor='#F5F5F5'
                            />
                            <Row margin={10}>
                                <Container
                                    width={windowWidth}
                                    child={
                                        <Row>
                                            <Container
                                                width={35}
                                                height={35}
                                                borderRadius={17.5}
                                                alignItems='center'
                                                justifyContent='center'
                                                borderColor='grey'
                                                child={
                                                    <Coin></Coin>
                                                }
                                            />
                                            <SizedBox width={10} />
                                            <Text style={styles.text}>Chính sách tích xu</Text>
                                        </Row>
                                    }
                                />
                            </Row>
                            <SizedBox height={20} />
                            <Container
                                marginLeft={30}
                                marginRight={30}
                                borderColor='#FFE6B9'
                                alignItems='center'
                                paddingTop={20}
                                paddingBottom={20}
                                child={
                                    <Row>
                                        <Text style={styles.text}>1 Xu = </Text>
                                        <Text
                                            style={styles.text}
                                        >100.0 Xu</Text>
                                    </Row>
                                }
                            />
                            <SizedBox height={20} />
                            {item(
                                < Checklistnew ></Checklistnew>,
                        'Hoàn xu đơn hàng',
                        '0% giới hạn 500 xu',
                        'VD: 100k hoàn 10% = 10k = 10k Xu (1Xu = 1VNĐ)')
                            
                              }
                        {(item(
                            <Ribbon3></Ribbon3>,
                            'Đánh giá sản phẩm',
                            '+ 0 Xu'))}
                        {(item(
                            <GroupEmty></GroupEmty>,
                            'Giới thiệu bạn bè',
                            '+500 Xu'))}
                        <Container
                            height={10}
                            width={windowWidth}
                            backgroundColor='#F5F5F5'
                        />
                    </Column>
                </ScrollView>
                </View >
            }
        >
        </Scaffold >
    );

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text: {
        fontSize: 15,
        fontWeight: '600',
        color: '#00000'
    }
});
export default AccumulatedCoins;