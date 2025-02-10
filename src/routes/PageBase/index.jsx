import { Outlet } from 'react-router-dom'
import { Container } from './style.js'

import Header from '../../shared/components/Header'

const PageBase = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}

export default PageBase
