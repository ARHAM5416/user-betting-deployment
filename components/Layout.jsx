import React from 'react'
import Header from './sidebar/Sidebar'
import Topbar from './topbar/Topbar'

export default function layout({children}) {
  return (
    <>
    {/* <Topbar />
    <Header /> */}
    {children}
    </>
  )
}
