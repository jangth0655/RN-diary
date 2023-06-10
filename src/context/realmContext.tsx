import {createContext, useState} from 'react';

type InitialValue = {
  realmObj: Realm | null;
  connection: (realm: Realm) => void;
};

export const RealmContext = createContext<InitialValue>({
  realmObj: null,
  connection: () => undefined,
});

type Props = {
  children: React.ReactNode;
};

export const RealmContextProvider = ({children}: Props) => {
  const [realmObj, setRealmObj] = useState<Realm | null>(null);

  const connection = (realm: Realm) => {
    setRealmObj(realm);
  };

  return (
    <RealmContext.Provider
      value={{
        realmObj,
        connection,
      }}>
      {children}
    </RealmContext.Provider>
  );
};
