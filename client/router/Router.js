// from  https://reacttraining.com/react-router/web/example/basic

import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import UserPage from '../components/UserPage'
import AdminPage from '../components/AdminPage'

const Router = () => (
  <BrowserRouter>
    <div>
      <Link to='/'>User</Link>
      <Link to='/admin'>Admin</Link>

      <hr/>

      <Route exact path='/' component={UserPage}/>
      <Route exact path='/admin' component={AdminPage}/>
    </div>
  </BrowserRouter>
);

export default Router

