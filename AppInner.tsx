import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator';
import {useAppReady} from './src/hooks/useAppReady';

export default function AppInner() {
  const {onReady} = useAppReady();

  return (
    <NavigationContainer onReady={() => onReady()}>
      <Navigator />
    </NavigationContainer>
  );
}
