import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css';
import App from './app/App';
import { store } from './app/store'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  
      <Router>  
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
