import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Write from './screens/Write';

export type StackParamList = {
  Home: undefined;
  Write: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: 'modal'}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Write" component={Write} />
    </Stack.Navigator>
  );
}
