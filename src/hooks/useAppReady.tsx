import {useCallback, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Realm from 'realm';
import {useDB} from './useDB';

export const FEELING = 'Feeling';

const FeelingSchema = {
  name: FEELING,
  properties: {
    _id: 'string',
    emotion: 'string',
    message: 'string',
  },
  primaryKey: '_id',
};

export const useAppReady = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const {connectionRealm} = useDB();

  const prepareRealm = useCallback(async () => {
    const realm = await Realm.open({
      path: 'rnDiary',
      schema: [FeelingSchema],
    });
    if (realm) connectionRealm(realm);
  }, [connectionRealm]);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
    if (!appIsReady) return;
  }, [appIsReady]);

  const onReady = useCallback(async () => {
    try {
      await prepareRealm();
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }, [prepareRealm]);

  return {onReady, appIsReady};
};
