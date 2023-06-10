import {useContext} from 'react';
import {RealmContext} from '../context/realmContext';

export const useDB = () => {
  const realm = useContext(RealmContext);
  return {
    connectionRealm: realm?.connection,
    realm: realm?.realmObj,
  };
};
