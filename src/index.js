import React from 'react';
import App from './App';
import ClientList from './routes/ClientList';
import InvoiceList from './routes/InvoiceList';
import Analytics from './routes/Analytics';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Analytics" element={<Analytics />} />
      <Route path="ClientList" element={<ClientList />} />
      <Route path="InvoiceList" element={<InvoiceList />} />
      <Route
        path="*"
        element={
          <main style={{ position: 'absolute', top: '30%', left: '30%', padding: '1rem' }}>
            <h1>Oops! Looks like we took a wrong turn.</h1>
            <a
              href="/"
              style={{
                position: 'absolute',
                left: '30%',
                margin: '2rem auto',
                textDecoration: 'none',
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
            >
              Return home!
            </a>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
