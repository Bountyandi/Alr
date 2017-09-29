import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import styles from './styles.css'

import UserPage from '../components/UserPage'
import AdminPage from '../components/AdminPage'

const Router = () => (
  <BrowserRouter>
    <div>
      <Link
        className={styles.menuItem}
        to='/'>User</Link>
      <Link
        className={styles.menuItem}
        to='/admin'>Admin</Link>

      <hr/>

      <Route exact path='/' component={UserPage}/>
      <Route exact path='/admin' component={AdminPage}/>
    </div>
  </BrowserRouter>
);

export default Router

