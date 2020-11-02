import React from 'react';
import Card from '../components/Card';
import { Container } from 'react-bootstrap';


function List( { setTitle, tasks, setTasks} ) {

   return (
       <Container className='mt-4'>
           <ul className='d-flex justify-content-center align-items-center flex-column px-2'>
               { tasks.map(task => <Card key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
    )
               }
           </ul>
       </Container>
    )
}

export default List;
