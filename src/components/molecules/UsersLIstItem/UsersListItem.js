import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/Button';
import { Wrapper } from './UsersListItem.styles'
import Average from 'components/atoms/average/Average'
import NameAtt from 'components/atoms/NameAtt/NameAtt'
const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <Average value={average}/>
        <NameAtt name={name} att={attendance}/>
      <Button />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

