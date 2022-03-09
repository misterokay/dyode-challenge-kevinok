import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import 'react-slidedown/lib/slidedown.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Collection from './pages/Collection';
import Home from './pages/Home';
import { mainNav } from './data';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerTransitioning: false,
      drawerOpen: false
    }
  }

  updateDrawer = (newState) => {
    this.setState(newState);
  }

  onCloseDrawer = () => {
    this.updateDrawer({
      drawerOpen: false
    });
  }
  
  render() {
    const transitioningClass = this.state.drawerTransitioning ? ' drawer-transitioning' : '';
    const drawerOpenClass = this.state.drawerOpen ? ' drawer-open' : '';

    const drawerStatusClass = `${transitioningClass}${drawerOpenClass}`;

    return (
      <div className={`App${drawerStatusClass}`}>
        <Routes>
          <Route 
            path="/" 
            element={<Layout 
              drawerTransitioning={this.state.drawerTransitioning}
              drawerOpen={this.state.drawerOpen}
              updateDrawer={this.updateDrawer}
              onCloseDrawer={this.onCloseDrawer}
            />}
          >
            {mainNav.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.linkPath}
                  element={<Collection collection={item.linkTitle} />}
                />
              )
            })}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
