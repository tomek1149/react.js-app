import React from 'react';
import styled from 'styled-components';


const Average = ({value}) => {
    return (
        <Wrapper value={value}>
            {value}
        </Wrapper>
    )
}

export default Average


const Wrapper = styled.div`
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-right:25px;
    font-size: ${({theme}) => theme.fontSize.m};
    font-weight: 700;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme, value}) => {
        if(value > 4) return theme.colors.success;
        if(value < 4 && value > 3) return theme.colors.warning;
        if(value < 3 ) return theme.colors.error;
    }};
`;

