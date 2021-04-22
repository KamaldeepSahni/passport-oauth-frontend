import React, { createContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export const myContext = createContext({});

const Context = ({ children }: any) => {
  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    axios
      .get('https://o-auth-backend-0910.herokuapp.com/get-user', {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setUserObject(res.data);
        }
      });
  }, []);

  return <myContext.Provider value={userObject}>{children}</myContext.Provider>;
};

export default Context;
