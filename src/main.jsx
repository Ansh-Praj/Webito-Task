import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './Index.css';
import { createBrowserRouter, createRoutesFromChildren, Route, Routes, RouterProvider, createRoutesFromElements } from 'react-router';
import Form from './components/Form.jsx';
import Callback from './components/Callback.jsx';
import Context from './components/Context.jsx';
import Effect from './components/Effect.jsx';
import Memo from './components/Memo.jsx';

const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />

      <Route path="/form" element={<Form />} />
      <Route path="/effect-ref" element={<Effect />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/memo" element={<Memo />} />
      <Route path="/context" element={<Context />} />
    </>
  
);

const router = createBrowserRouter(routes, {
    basename: "/Webito-Task"
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
