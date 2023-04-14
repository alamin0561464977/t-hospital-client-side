import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './folder/pages/HomePage/Home/Home';
import { router } from './folder/router/router';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
