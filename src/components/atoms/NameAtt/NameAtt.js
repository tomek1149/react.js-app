import React from 'react'
import styled from 'styled-components';
const NameAtt = ({name, att}) => {
    return (
        <Wrapper>
        <p className="name">{name}</p>
        <p className="attendance">attendance: {att}</p>
      </Wrapper>
       
    )
}

export default NameAtt

const Wrapper = styled.div`
  margin-right: 10px;
  p {
      margin: 0;
      color: grey;
    }

  .name{
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: 700;
      line-height: 19px;
  }

  .attendance{
      font-size: ${({theme}) => theme.fontSize.s};
      font-weight: 400;
      line-height: 12px;
  }
`;