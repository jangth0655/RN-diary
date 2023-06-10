import styled from 'styled-components/native';
import {FeelingType} from '../types';
import colors from '../../colors';

type Props = {
  feeling: FeelingType;
};

export default function Record({feeling: {_id, emotion, message}}: Props) {
  return (
    <Container>
      <Emotion>{emotion}</Emotion>
      <Message>{message}</Message>
    </Container>
  );
}

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
