import React from 'react'
import ResidentCard from './ResidentCard'
import './Styles/ResidentList.css'

const ResidentList = ({pagination}) => {
  return (
    <section className='ResidentList'>
      {
        pagination().map(residentUrl => <ResidentCard key={residentUrl} residentUrl={residentUrl} />)
      }
      </section>
  )
}

export default ResidentList