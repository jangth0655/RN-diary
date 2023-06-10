import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {StackParamList} from '../navigator';
import colors from '../../colors';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useDB} from '../hooks/useDB';
import {FEELING} from '../hooks/useAppReady';
import uuid from 'react-native-uuid';

type Props = NativeStackScreenProps<StackParamList, 'Write'>;

export default function Write({navigation: {goBack}}: Props) {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [feelings, setFeelings] = useState('');
  const {realm} = useDB();

  const onChangeText = (text: string) => setFeelings(text);
  const onEmotionPress = (face: string) => setSelectedEmotion(face);
  const onSubmit = () => {
    if (feelings === '' || selectedEmotion === null) {
      return Alert.alert('Please complete form.');
    }
    if (realm !== null && realm) {
      console.log('realm not undefined');
      realm.write(() => {
        realm.create(FEELING, {
          _id: uuid.v4(),
          emotion: selectedEmotion,
          message: feelings,
        });
      });

      goBack();
    }
  };

  return (
    <Container>
      <Title>How do you feel today?</Title>
      <Emotions style={{elevation: 5}}>
        {emotions.map((emotion, index) => (
          <Emotion
            selected={emotion === selectedEmotion}
            key={index}
            onPress={() => onEmotionPress(emotion)}>
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        returnKeyLabel="save"
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        value={feelings}
        placeholder="Write your feelings..."
      />
      <Button onPress={onSubmit}>
        <ButtonText>Save</ButtonText>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
  padding: 0px 10px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

const TextInput = styled.TextInput`
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.btnColor};
  margin-top: 20px;
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

const Emotion = styled.Pressable<{selected: boolean}>`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  border-width: ${(props: any) => (props.selected ? '2px' : '0px')};
  border-color: rgba(0, 0, 0, 0.5);
`;

const EmotionText = styled.Text``;

const Emotions = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const emotions = ['😀', '😂', '😇', '😍', '🤪', '🥵', '😱', '🙄'];
