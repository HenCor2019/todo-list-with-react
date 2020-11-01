import React from 'react';

/*
import styled from 'styled-components';

const H1 = styled.h1`
    font-family: 'Courier New' , Courier , Monospace;
    font-size: 3em;
    padding: 4%;

`;
*/

function Title({titleApp}){
    return(
        <h1>
            {titleApp}
        </h1>
    );
};


export default Title;
