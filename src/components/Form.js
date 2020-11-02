import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Form = ({tasks , setTasks, id, setId, title, setTitle }) => {


  /**
   *  funcion que se encarga de actualizar lo que se esta guardando
  */

  const inputTextHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    setTitle(value)
  }

  /**
   * Funcion que se encarga de enviar y actualizar las lista de todo. 
  */
  const submitTask = (e) => {
    e.preventDefault();

    if(title !== ''){
      
      const newTask = {
        id: id,
        todo: title, 
        done: false,
      } 

      const totalTask = tasks.concat(newTask)
      setTasks(totalTask)
      setTitle('')
      setId(id+1)
      
      }
  }

  /**
   * Estilo del boton 
  */
  const ButtonWrapper = styled.button`
      font-family: 'Oswald', sans-serif;
      background-color: #898b8a; 
      color: #eeeeee;

      :hover {
        background-color: #636363; 
        color: #eeeeee;
      }
  `;

    return(
      <form className='mx-auto container' >
        <div className="form-row justify-content-center align-items-center pl-4">
          <div className="col-6">
            <input 
              id="title"
              value={title}
              className='form-control'
              placeholder='Ingresa un tarea pendiente'
              onChange={inputTextHandler} />
            </div>
          <div className="col-2 d-flex justify-content-end pr-1 ">
            <ButtonWrapper type="submit" className='btn text-uppercase' onClick={submitTask}>Agregar</ButtonWrapper>
          </div>
        </div>
      </form>
    )
}

export default Form;
