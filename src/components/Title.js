import React from 'react';
import styled from 'styled-components';


/*
 * Estilo del titulo principal de la app. 
*/
const H1 = styled.h1`
    font-family: 'Lobster' , Courier , cursive;
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
