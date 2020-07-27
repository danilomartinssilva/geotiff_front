import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MapContainer from '../map-container'
import Menu from '../menu'
import Load from '../tools/load'
import Identify from '../tools/identify'
import Download from '../tools/download'
import Histogram from '../tools/histogram'
import Max from '../tools/max'
import Mean from '../tools/mean'
import Median from '../tools/median'
import Min from '../tools/min'
import Mode from '../tools/mode'
import Sum from '../tools/sum'
import BandArithmetic from '../tools/band-arithmetic'
import RasterCalculator from '../tools/raster-calculator'
import Modal from '../modal'
import Loader from '../loader'
import Alert from '../alert'
import Login from '../auth/login'
import Register from '../auth/Register'
import { isAuthenticated } from '../../services/auth'
import Logout from '../auth/logout'
import ListAreasComponent from '../list-areas'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
)

const AppComponent = ({ layout, setLayout }) => (
  <div className='App' data-layout={layout}>
    <Alert />
    <Loader />
    <Switch>
      <PrivateRoute path='/download' component={Download} />
      <PrivateRoute path='/histogram' component={Histogram} />
      <PrivateRoute path='/identify' component={Identify} />
      <PrivateRoute path='/load' component={Load} />
      <PrivateRoute path='/max' component={Max} />
      <PrivateRoute path='/mean' component={Mean} />
      <PrivateRoute path='/median' component={Median} />
      <PrivateRoute path='/min' component={Min} />
      <PrivateRoute path='/mode' component={Mode} />
      <PrivateRoute path='/sum' component={Sum} />
      <PrivateRoute path='/band-arithmetic' component={BandArithmetic} />
      <PrivateRoute path='/raster-calculator' component={RasterCalculator} />
      <PrivateRoute path='/list-areas' component={ListAreasComponent} />
      <Route path='/register' component={Register} />

      <Route path='/logout' component={Logout} />
      <Route path='/login' component={Login} />
      <PrivateRoute component={Menu} />
    </Switch>
    {isAuthenticated() && <MapContainer />}
    {/* 
    {isAuthenticated() && <Modal />} */}
  </div>
)

export default AppComponent
