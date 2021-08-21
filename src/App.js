import './App.scss';
import Homepage from './pages/homepage/homepage.component';
import Palette from './pages/palette/palette.component';
import Color from './pages/color/color.component';
import NewPalette from './pages/new-palette/new-palette.component';
import EditPalette from './pages/edit-palette/edit-palette.component';

import { Switch, Route } from 'react-router-dom';

const App = props => {
  return (
    <div className="App">      
      <Switch>        
        <Route 
          path='/palettes/view/:id' 
          exact
          component={Palette}
          />
        <Route 
          path='/colors/:id' 
          exact
          component={Color}
          />        
        <Route
          path='/palettes/new'
          exact
          component={NewPalette}
          />
        <Route
          path='/palettes/edit/:id'
          exact
          component={EditPalette}
          />
        <Route 
          path='/' 
          exact
          component={Homepage}
          />
      </Switch>
    </div>
  );
}

export default App;