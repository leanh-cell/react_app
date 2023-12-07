import {Text, TouchableOpacity, View} from 'react-native';
import Row from '../../../components/Row';
import Container from '../../../components/Container';
import Expanded from '../../../components/Expanded';

const SectionTitle = ({key, title, subtitle}) => {
  return (
    <Container
      paddingBottom={0}
      paddingLeft={10}
      paddingRight={10}
      paddingTop={10}
      child={
        <Row>
          <Expanded
            child={
              <Text
                style={{
                  fontWeight: '500',
                }}>
                {title}
              </Text>
            }></Expanded>
          <TouchableOpacity key={key} onPress={() => {}}>
            <Text
              style={{
                fontWeight: '500',
                color: 'blue',
              }}>
              {subtitle}
            </Text>
          </TouchableOpacity>
        </Row>
      }></Container>
  );
};

export default SectionTitle;
