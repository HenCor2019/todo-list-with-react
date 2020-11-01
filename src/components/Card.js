import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

function Card({ title, id, tasks, setTasks }) {

    const unCheck = 'fa fa-square pl-4'
    const check = 'fa fa-check pl-4'

    const onDoneTask = () => {
        const state = document.getElementById('state')
        const currentState = state.className;

        if( currentState.includes(unCheck) ) {

            state.className = check;
            state.style.color='#825AC2'; 
            state.style.fontSize='1.3em';

        } else {

            state.className = unCheck;
            state.style.color='#A4A4A4'; 
            state.style.fontSize='1.3em';
        }

    }

    const onDeleteTasks = () => {
         const remainsTasks = tasks.filter( task => task.id !== id )
         setTasks(remainsTasks)

    }

    const ITrash = styled.i`
        color: #FD4040;
        font-size: 1.3em;
    `;


    const IState = styled.i`
        color: #A4A4A4;
        font-size: 1.3em;
    `;

    const Li = styled.li`
        background-color: #eeeeee;
        box-shadow: -3px 3px 6px #848484;
        border: 1px solid #BDBDBD;
        height: 2.34em;
    `;

    return (
        <Li className='rounded text-decoration-none d-flex justify-content-between  align-items-center w-75 my-2'>
            <IState className={unCheck} id='state' onClick={onDoneTask} aria-hidden="true"></IState>
            <h5>{title}</h5>
            <ITrash onClick={onDeleteTasks} className="fa fa-trash pr-4" aria-hidden="true"></ITrash>
        </Li>
    )
}

export default Card;
