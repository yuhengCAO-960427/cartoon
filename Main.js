/**
 * react-native相关的路由都在这里
 */
import React from 'react'

import { Router, Stack, Scene } from 'react-native-router-flux'
import App from './App'

const Main = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="app" component={App} hideNavBar={true} />
      </Stack>
    </Router>
  )
}

export default Main