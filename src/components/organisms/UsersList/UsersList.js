import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersLIstItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
