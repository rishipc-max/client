import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import {Provider as ReduxProvider} from "react-redux";
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    
    <ReduxProvider store={store}>
     <PersistGate loading={null} persistor={persistor}>
       <BrowserRouter>
          <App />
       </BrowserRouter>
     </PersistGate>
    </ReduxProvider>
  
 // </React.StrictMode>,
)
