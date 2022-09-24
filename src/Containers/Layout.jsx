import React from 'react'
import TheContent from './TheContent'
import TheFooter from './TheFooter'
import TheHeader from './TheHeader'

const Layout = () => {
  return (
    <React.Fragment>
      <TheHeader />
      <TheContent />
      <TheFooter/>
    </React.Fragment>
  )
}

export default Layout