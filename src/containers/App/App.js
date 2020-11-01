import React, {useState} from 'react';
import Title from '../../components/Title';
import Form from '../../components/Form';
import List from '../List';


function App() {
  const [title, setTitle] = useState('');
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const titleApp = 'To do!'


  return (
    <div>
      <Title titleApp={titleApp} />
      <Form tasks={tasks} setTasks={setTasks} id={id} setId={setId} title={title} setTitle={setTitle}  />
      <List setTitle={setTitle} tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
