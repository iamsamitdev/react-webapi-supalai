import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Analytics from './containers/Analytics/Analytics';
import Content from './containers/Content';
import Customization from './containers/Customization';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import ProtectedRoute from './router/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path='/content' element={
            <ProtectedRoute>
              <Content />
            </ProtectedRoute>
          } />
          <Route path='/analytics' element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>} />
          <Route path='/customization' element={
            <ProtectedRoute>
              <Customization />
            </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App