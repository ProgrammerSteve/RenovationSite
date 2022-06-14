import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import {
  IonApp,
  IonCardHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonCard,
  IonItem,
  IonTabsContext,
  IonTab,
  IonImg,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, homeOutline, mailOutline, hammerOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>



        <IonTabBar color="dark" slot="top">

          


          <IonTabButton>
            {/* <IonImg src="/assets/zayavertical.svg"/>  */}
            <IonIcon size="large" icon="/assets/zayaicon.svg"/>
            {/* <IonLabel>ZAYA RENOVATIONS</IonLabel> */}
          </IonTabButton>

          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={hammerOutline} />
            <IonLabel>Our Work</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={mailOutline} />
            <IonLabel>Get a Quote</IonLabel>
          </IonTabButton>

        </IonTabBar>


        </IonTabs>




























{/* 

        <IonTabs>
      
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>



      <IonTabBar color="dark" slot="top">

        <IonTabButton layout="icon-start">
          <IonIcon icon="/assets/zayapic.svg"/> 
          <IonLabel>Zaya Renovations</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={hammerOutline} />
          <IonLabel>Our Work</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={mailOutline} />
          <IonLabel>Get a Quote</IonLabel>
        </IonTabButton>
        
      </IonTabBar>


      </IonTabs> */}





















        
      
    </IonReactRouter>
  </IonApp>
);

export default App;
