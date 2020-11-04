import React, {Fragment, useState} from 'react';
import Title from '../../components/Title';
import Form from '../../components/Form';
import List from '../List';
import { createGlobalStyle } from 'styled-components';
import Empty from '../../components/Empty';
import 'font-awesome/css/font-awesome.min.css';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Oswald', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     
}
`;

function App() {
  const [title, setTitle] = useState('');
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const titleApp = 'To do!'
  
  return (
    <Fragment>
      <GlobalStyle />
      <Title titleApp={titleApp} />
      <Form  
          tasks={tasks} 
          setTasks={setTasks}
          id={id}
          setId={setId}
          title={title}
          setTitle={setTitle}
      />
      {tasks.length === 0 ? <Empty /> : <List setTitle={setTitle} tasks={tasks} setTasks={setTasks}/>}
      
    </Fragment>
  );
}

export default App;
