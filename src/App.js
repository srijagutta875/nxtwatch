import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
      <ProtectedRoute exact path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)
export default App
