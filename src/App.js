// import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom'
import React from 'react';
import {Add} from './component/Add';
import {Edit} from './component/Edit';
import {User1} from './component/User1';

// import { createStore } from '@reduxjs/toolkit';

// const store =createStore(Store);

function App() {
  return (
    <div className="App">
    {/* <Provider store={store}> */}
      <Add/>
      <Edit/>
      <User1/>
    {/* </Provider> */}

    
    </div>
  );
}

export default App;
