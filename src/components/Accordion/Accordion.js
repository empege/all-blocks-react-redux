import React from 'react'
import './accordion.css'
import AccordionItem from './AccordionItem';

const Accordion = ({ data, theme }) => {

  return (
    <div className={`accordion accordion--theme--${theme}`}>
      {
        data.map(item => <AccordionItem key={item.id} {...item} />)
      }
    </div>
  )
}

export default Accordion
