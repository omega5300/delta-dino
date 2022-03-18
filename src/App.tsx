import { FC } from 'react';

import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

// components
import Menu from './components/Menu';
import Hardware from './pages/hardware';
import Lyrics from './pages/lyrics';
import Waifu from './pages/waifu';
import Crypto from './pages/crypto';
import About from './pages/about';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact({
  mode: "md"
});

const App: FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/lyric" />
            </Route>
            <Route path="/lyric" exact={true}>
              <Lyrics />
            </Route>
            <Route path="/hardware" exact={true}>
              <Hardware />
            </Route>
            <Route path="/crypto" exact={true}>
              <Crypto />
            </Route>
            <Route path="/waifu" exact={true}>
              <Waifu />
            </Route>
            <Route path="/about" exact={true}>
              <About />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
