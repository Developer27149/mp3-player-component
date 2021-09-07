import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

const App = (
  <ChakraProvider>
    <div>app</div>
  </ChakraProvider>
)

ReactDOM.render(<App />, document.querySelector('#root'))