import React,{Suspense} from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './04-reducers';

//styles
import './App.css';
//constants
import PATHS from './05-constants/paths';
//components
import Header from './00-components/Header';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
//pages
const CatalogItem = React.lazy(() => import('./01-pages/Item'));
const Catalog = React.lazy(() => import('./01-pages/Catalog'));
const OutOfBounds = React.lazy(() => import('./01-pages/OutOfBounds'));


const COMPONENT_PATHS = [
  {Component:Catalog,path:PATHS.CATALOG},
  {Component:CatalogItem,path:PATHS.ITEM},
  {Component:OutOfBounds,path:PATHS.OUT_OF_BOUNDS}
]

const createReduxStore = () => {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  return createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));
};

function App() {
  return (
    <StoreProvider store={createReduxStore()}>
     <Header/>
     <BrowserRouter>
      <Switch>
        {COMPONENT_PATHS.map(({path,Component})=>(
          <Route path={path} exact key={path}>
            <Suspense fallback={<div>loading...</div>}>
              <Component/>
            </Suspense>
          </Route>
        ))}
          <Redirect to={PATHS.OUT_OF_BOUNDS}/>
      </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
