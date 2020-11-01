import React from 'react';

function Card({ title, id, tasks, setTasks }) {

/* funcionalidad que pienso agregar despues
    const onUpdateTextTasks = (e) => {
        const value = e.target.value;
        console.log(value);
        const remainsTasks = tasks.map(task => {if(task.todo===value){ task.todo=value; }});
        setTasks(remainsTasks)
        console.log(tasks);
    }
    
*/

    const onDeleteTasks = () => {
         const remainsTasks = tasks.filter( task => task.id !== id )
         setTasks(remainsTasks)

    }


    return (
        <li>
            <p>icono abrir</p>
            <input type="text" defaultValue={title}/>
            <p onClick={onDeleteTasks}>icono de cerrar</p>
        </li>
    )
}

export default Card;
