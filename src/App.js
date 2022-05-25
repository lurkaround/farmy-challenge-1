import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Error } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddSalad, AllSalads, SharedLayout } from './pages/dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<AllSalads />} />
          <Route path='add-salad' element={<AddSalad />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
