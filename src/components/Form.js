import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

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

  const ButtonWrapper = styled.button`
      background-color: #825AC2; 
      color: #eeeeee;
  `;

    return(
      <form className='mx-auto container'>
        <div className="form-row justify-content-center align-items-center pl-4">
          <div className="col-6">
            <input id="title" value={title} className='form-control' onChange={inputTextHandler} />
          </div>
          <div className="col-2 d-flex justify-content-end pr-1 ">
            <ButtonWrapper type="submit" className='btn' onClick={submitTask}>Agregar</ButtonWrapper>
          </div>
        </div>
      </form>
    )
}

export default Form;
