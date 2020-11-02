import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

function Card({ task, tasks, setTasks }) {

  /**
   * Funcion que se encarga de borrar las tareas actuales.
  */
    const onDeleteTasks = () => {
         const remainsTasks = tasks.filter( todo => todo.id !== task.id )
         setTasks(remainsTasks)

    }

  /**
   * Funcion que se encarga de cambiar el estado de la carta, ya sea completadad o no.
  */
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

  /**
   * Estilo de el icono de borrar
  */
    const TodoDelete = styled.i`
        color: ${task.done ? '#fae0df;' : '#898b8a;'}
        font-size: 1.3em;
        cursor: pointer;

        :hover {
            font-size: 1.41em;
            color: #fa7f72;
        }
    `;

  /**
   * Estilo del titulo principal.
  */
    const TodoTitle = styled.h5`
        color: ${task.done ? '#e3e2de;' : '#fae0df;'}
        text-decoration: ${task.done ? 'line-through;' : 'none;'}
    `;

  /**
   * Estilo de el icono del stado de la carta (chequeada o no chequedada.)
  */
    const TodoStatus = styled.i`
        color: ${task.done ? '#f6f5f1;' : '#fae0df;'}
        font-size: 1.3em;
        cursor: pointer;

        :active {
            font-size: 1.4em;
        }

    `;

  /**
   * Estilo general de la carta del todo.
  */
    const TodoContent = styled.li`
        font-family: 'Oswald', sans-serif;
        background-color: ${task.done ? '#476473;' : '#214252;'}
        box-shadow: -1px 1px 3px #848484;
        border: 1px solid #BDBDBD;
        height: 3.34em;
        text-decoration: none;
    `;

    return (
        <TodoContent className='text-truncate rounded  d-flex justify-content-between  align-items-center w-75 my-2'>
            <TodoStatus className={`pl-4 fa fa-${task.done ? 'check': 'square'}`} onClick={completeTask}  aria-hidden="true"></TodoStatus>
            <TodoTitle>{task.todo}</TodoTitle>
            <TodoDelete onClick={onDeleteTasks} className="fa fa-trash pr-4" aria-hidden="true"></TodoDelete>
        </TodoContent>
    )
}

export default Card;
