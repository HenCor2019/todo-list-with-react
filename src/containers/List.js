import React from 'react';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

function List( { setTitle, tasks, setTasks} ) {

   return (
       <div className='container mt-4'>
           <ul className='d-flex justify-content-center align-items-center flex-column px-2'>
               { tasks.map(task => <Card key={task.id} title={task.todo} id={task.id} tasks={tasks} setTasks={setTasks}/>
    )
               }
           </ul>
       </div>
    )
}

export default List;
