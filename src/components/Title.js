import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-family: 'Courier New' , Courier , Monospace;
    font-size: 7em;
    text-align: center;
    padding: 3%;
    margin: 0;

`;

function Title({titleApp}){
    return(
        <H1>
            {titleApp}
        </H1>
    );
};


export default Title;
