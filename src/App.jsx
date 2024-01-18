import { Button, ButtonGroup } from '@chakra-ui/react'
import Cards from './components/Cards'
import CardContainer from './components/CardContainer'
import NavBar from './components/NavBar'
import ProductStore from './store/ProductStore'


function App() {


  return (
    <>
      <NavBar />
      <CardContainer />
      <ProductStore />


    </>
  )
}

export default App
