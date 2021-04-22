import React, { useContext } from 'react';
import { myContext } from '../../Context';

import { IUser } from '../../types/mainTypes';

const HomePage = () => {
  const userObject = useContext(myContext) as IUser;

  return (
    <div>
      {userObject ? (
        <h1>Welcome back {userObject.username}</h1>
      ) : (
        <h1>Welcome to my website</h1>
      )}
    </div>
  );
};

export default HomePage;
