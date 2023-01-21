import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import PageName from '../../components/PageName/PageName'
import Event from './Event'

const Events = () => {
  return (
    <>
        <Navbar/>
        <PageName page_heading="Past Events"/>
        <Event />
    </>
  )
}

export default Events