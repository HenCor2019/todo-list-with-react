import React from 'react';

const Form = ({tasks , setTasks, id, setId, title, setTitle }) => {

  const inputTextHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    setTitle(value)
  }

  const submitTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: id,
      todo: title 
    } 

    const totalTask = tasks.concat(newTask)
    setTasks(totalTask)
    setTitle('')
    setId(id+1)
    
   // console.log(tasks);
  } 
    return(
      <form>
        <input id="title" value={title} onChange={inputTextHandler} />
        <button type="submit" onClick={submitTask}>Agregar</button>
      </form>
    )
}

export default Form;
