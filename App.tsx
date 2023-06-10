import AppInner from './AppInner';
import {RealmContextProvider} from './src/context/realmContext';

function App() {
  return (
    <RealmContextProvider>
      <AppInner />
    </RealmContextProvider>
  );
}

export default App;
