import { BrowserRouter } from 'react-router-dom';

import MainRoutes from './components/MainRoutes';
import '../public/assets/styles/reset.css'
import '../public/assets/styles/index.css'


function App() {

  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
}

export default App;
