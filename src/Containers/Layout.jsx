import React from 'react'
import TheHeader from './TheHeader'
import TheContent from './TheContent'
import TheFooter from './TheFooter'

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