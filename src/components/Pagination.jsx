import React from 'react'
import { numbersPage } from '../utils/handleChangePages'
import "./Styles/pagination.css";

const Pagination = ({setPage, RESIDENTS_PERPAGE, location} ) => {
  return (
    <div className='container__pagination'>
    <button className='btn__pagination'>
        {
          numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => <li onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
      </button>
      </div>
  )
}

export default Pagination