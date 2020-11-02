import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

function Card({ task, tasks, setTasks }) {


    const onDeleteTasks = () => {
         const remainsTasks = tasks.filter( todo => todo.id !== task.id )
         setTasks(remainsTasks)

    }

    const completeTask = () => {
        const updateTask = tasks.map(el => {
            if(el.id === task.id){
                return {
                    ...el,
                    done: !el.done,
                }
            }
            return el;
        }) 

        setTasks(updateTask)
    }

    const ITrash = styled.i`
        color: ${task.done ? '#fae0df;' : '#898b8a;'}
        font-size: 1.3em;
        cursor: pointer;

        :hover {
            font-size: 1.41em;
            color: #fa7f72;
        }
    `;

    const H5 = styled.h5`
        color: ${task.done ? '#e3e2de;' : '#fae0df;'}
        text-decoration: ${task.done ? 'line-through;' : 'none;'}
    `;

    const IState = styled.i`
        color: ${task.done ? '#f6f5f1;' : '#fae0df;'}
        font-size: 1.3em;
        cursor: pointer;

        :active {
            font-size: 1.4em;
        }

    `;

    const Li = styled.li`
        font-family: 'Oswald', sans-serif;
        background-color: ${task.done ? '#476473;' : '#214252;'}
        box-shadow: -1px 1px 3px #848484;
        border: 1px solid #BDBDBD;
        height: 3.34em;
    `;

    return (
        <Li className='text-truncate rounded text-decoration-none d-flex justify-content-between  align-items-center w-75 my-2'>
            <IState className={`pl-4 fa fa-${task.done ? 'check': 'square'}`} onClick={completeTask}  aria-hidden="true"></IState>
            <H5>{task.todo}</H5>
            <ITrash onClick={onDeleteTasks} className="fa fa-trash pr-4" aria-hidden="true"></ITrash>
        </Li>
    )
}

export default Card;
