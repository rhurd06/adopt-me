import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './details';

const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <Route path="/details/:id" >
          <Details />
        </Route>
        <Route path="/">
          <SearchParams />
        </Route>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <StrictMode>  
    <App />
  </StrictMode>, 
  document.getElementById("root")
);
