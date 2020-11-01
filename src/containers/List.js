import React from 'react';
import Card from '../components/Card';

function List( { setTitle, tasks, setTasks} ) {

   return (
       <div>
           <ul>
               { tasks.map(task => <Card key={task.id} title={task.todo} id={task.id} tasks={tasks} setTasks={setTasks}/>
    )

               }
           </ul>
       </div>
    )
}

export default List;
