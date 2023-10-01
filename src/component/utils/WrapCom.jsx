import React from 'react'
import AccessBar from '../pages/AccessBar'
import Sidebar from '../layout/Sidebar'

const WrapCom = ({Comp}) => {
  return (
    <div>
        <Sidebar/>
        <AccessBar/>
        <Comp/>
        </div>
        )
}

export default WrapCom