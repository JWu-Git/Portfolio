import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Bubble from './pages/Sorting/Bubble';
import Insertion from './pages/Sorting/Insertion';
import Merge from './pages/Sorting/Merge';
import Quick from './pages/Sorting/Quick';
import AStar from './pages/Pathfinding/AStar';
import Bfs from './pages/Pathfinding/Bfs';
import Dfs from './pages/Pathfinding/Dfs';
import PageContainer from './components/PageContainer';
import './style.css';

export default function App() {
  return (
    <Router>
      <NavBar />
      <PageContainer>
        <Switch>
          <Route path="/bubble">
            <Bubble />
          </Route>
          <Route path="/insertion">
            <Insertion />
          </Route>
          <Route path="/merge">
            <Merge />
          </Route>
          <Route path="/quick">
            <Quick />
          </Route>
          <Route path="/astar">
            <AStar />
          </Route>
          <Route path="/bfs">
            <Bfs />
          </Route>
          <Route path="/dfs">
            <Dfs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </PageContainer>
    </Router>
  );
}
