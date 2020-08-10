import React from 'react';
import 'antd/dist/antd.css';

import CustomLayout from './containers/layout.js';
import ArticleListView from './containers/ArticleListView.js';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <ArticleListView />
      </CustomLayout>
    </div>
  );
}

export default App;
