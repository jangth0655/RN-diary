import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {StackParamList} from '../navigator';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

export default function Home({navigation: {navigate}}: Props) {
  return (
    <View>
      <Title>나의 여행</Title>
      <Button style={{elevation: 5}} onPress={() => navigate('Write')}>
        <ButtonText>
          <Icon name="add" color={'#fff'} size={30} />
        </ButtonText>
      </Button>
    </View>
  );
}

const View = styled.View`
  flex: 1;
  background-color: ${colors.bgColor};
  padding: 0px 25px;
  padding-top: 50px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 38px;
  margin-bottom: 70px;
`;
const Button = styled.Pressable`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;
const ButtonText = styled.Text`
  color: #fff;
`;
