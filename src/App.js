import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NewCustomer from './NewCustomer';
import AllCustomer from './Kundenkartei'
import NewOrder from './NewOrder';
import Home from './Home';
import Status from './Status';
import Booking from './Booking';
import Retoure from './Retoure';
import OrderMaterial from './prod/OrderMaterial';
import UpdateProdStatus from './prod/UpdateProdStatus';
import SplitLargeOrders from './prod/SplitLargeOrders';
import GetCSV from './prod/getCSV';
import Kundenanfrage from './Kundenanfrage'
import Sending from './Sending'
import FAQ from './FAQ'

function App() {
  return (
    <>

      <Switch>

        <Route path="/home" component={Home} />
        <Route path="/newcustomer" component={NewCustomer} />
        <Route path="/allcustomer" component={AllCustomer} />
        <Route path="/neworder" component={NewOrder} />
        <Route path="/booking" component={Booking} />
        <Route path="/status" component={Status} />
        <Route path="/customerrequest" component={Kundenanfrage} />
        <Route path="/retoure" component={Retoure} />
        <Route path="/sending" component={Sending} />
        <Route path="/orderMaterial" component={OrderMaterial} />
        <Route path="/updateProdStatus" component={UpdateProdStatus} />
        <Route path="/splitLargeOrders" component={SplitLargeOrders} />
        <Route path="/getCSV" component={GetCSV} />
        <Route path="/faq" component={FAQ} />
        <Route path="/" component={Home} />
       

      </Switch>

    </>
  );
}

export default App;
