import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {StackParamList} from '../navigator';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDB} from '../hooks/useDB';
import {useEffect, useState} from 'react';
import {FEELING} from '../hooks/useAppReady';
import {FeelingType} from '../types';
import {FlatList, LayoutAnimation, Platform, UIManager} from 'react-native';
import Record from '../components/Record';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Home({navigation: {navigate}}: Props) {
  const {realm} = useDB();
  const [feelings, setFeelings] = useState<any>([]);

  useEffect(() => {
    const feelingsItem = realm?.objects<FeelingType>(FEELING);
    feelingsItem?.addListener((items, changes) => {
      LayoutAnimation.linear();
      setFeelings(items.sorted('_id', true));
    });
    return () => {
      feelingsItem?.removeAllListeners();
    };
  }, [realm]);

  const onPress = (id: string) => {
    realm?.write(() => {
      const findFeelings = realm.objectForPrimaryKey(FEELING, id);
      realm.delete(findFeelings);
    });
  };

  return (
    <View>
      <Title>나의 여행</Title>
      <FlatList
        style={{marginVertical: 100, width: '100%'}}
        data={feelings}
        contentContainerStyle={{paddingVertical: 10}}
        keyExtractor={feeling => feeling._id}
        renderItem={({item}) => <Record feeling={item} onPress={onPress} />}
        ItemSeparatorComponent={Separator}
      />
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

const Separator = styled.View`
  height: 10px;
`;
