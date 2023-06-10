import styled from 'styled-components/native';
import {FeelingType} from '../types';
import colors from '../../colors';

type Props = {
  feeling: FeelingType;
  onPress: (id: string) => void;
};

export default function Record({
  feeling: {_id, emotion, message},
  onPress,
}: Props) {
  return (
    <Pressible onPress={() => onPress(_id)}>
      <Container>
        <Emotion>{emotion}</Emotion>
        <Message>{message}</Message>
      </Container>
    </Pressible>
  );
}

const Pressible = styled.Pressable``;

const Container = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${colors.cardColor};
`;
const Emotion = styled.Text`
  font-size: 26px;
`;
const Message = styled.Text`
  font-size: 20px;
`;
