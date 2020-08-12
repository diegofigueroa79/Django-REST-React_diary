import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './routes.js'
import 'antd/dist/antd.css';

import CustomLayout from './containers/layout.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
