import React from 'react';
import empty_list from '../img/empty_list.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Empty() {

    return(
        <div className='container d-flex flex-column align-items-center'>
            <h3 className='text-center mt-3 pt-1 text-uppercase'>no tienes tareas pendientes</h3>
            <img className='w-50 pl-3 mt-4' src={empty_list} alt='no tareas' />
        </div>

    );
}

export default Empty;