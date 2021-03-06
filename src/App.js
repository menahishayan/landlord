import AddUser from './AddUser';
import React from 'react';
import Main from './Main';
import Edit from './Edit';
import Details from './Details';
import AddPay from './AddPay';
import {BrowserRouter as Router, Route}from'react-router-dom';

function App() {
   return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Main}/>
      <Route path="/AddUser" component={AddUser}/>
      <Route path="/Details" render={(props) => <Details {...props} />} />
      <Route path="/Edit" render={(props) => <Edit {...props} />} />
      <Route path="/AddPayment" render={(props) => <AddPay {...props} />} />
      </div>
      </Router>
   );
}


export default App;
