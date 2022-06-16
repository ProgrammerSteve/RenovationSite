import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonItem,
  IonIcon,
  IonImg,
  IonLabel,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonList,
  IonCol,
  IonButton,
  IonText,
  IonRouterLink,
} from "@ionic/react";

// import { Redirect, Route } from 'react-router-dom';

import { callOutline, locationOutline, hammerOutline } from "ionicons/icons";

import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage className="page-container">
      <IonContent color="medium" fullscreen>
        <IonCard color="primary" className="ion-margin">
          <IonItem color="primary" lines="none">
            <IonCardTitle className="homepagetitle">
              Making Home Feel Like Home
            </IonCardTitle>
          </IonItem>

          <IonItem color="primary" className="ion-activated" lines="none">
            <IonImg src="/assets/lights.jpg" />
          </IonItem>

          <IonItem
            color="primary"
            className="ion-activated ion-margin-top"
            lines="none"
          >
            <IonImg src="/assets/zayahorizontal.svg" />
          </IonItem>

          <IonItem color="primary" lines="none">
            <IonIcon size="small" slot="start" icon={callOutline} />
            <IonLabel> (512) 359-2470</IonLabel>
          </IonItem>

          <IonItem color="primary" className="ion-margin-bottom" lines="none">
            <IonIcon size="small" slot="start" icon={locationOutline} />
            <IonLabel>
              <IonText className="ion-text-wrap">
                820 Daffodil, Los Fresnos, TX 78566
              </IonText>
            </IonLabel>
          </IonItem>
        </IonCard>

        <IonCard color="primary" className="ion-margin">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem color="primary">
                  <IonIcon />
                  <IonCardTitle> About Us</IonCardTitle>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow className="ion-text-center">
              <IonCol size="12" color="primary">
                <IonRow>
                  <IonLabel className="ion-text-centered">
                    Zaya Renovations is a family owned renovation company
                    serving the RGV locality. With our passion for home
                    renovation, we hope to service your needs and win your
                    loyalty. Have questions? Receiving a quote is free and easy!
                  </IonLabel>
                </IonRow>

                <IonRow className="ion-justify-content-center ion-padding">
                  <IonRouterLink href="/tab3">
                    <IonButton id="ion-margin ion-padding" color="dark">
                      Free Quote
                    </IonButton>
                  </IonRouterLink>
                </IonRow>
              </IonCol>
            </IonRow>

            <IonRow className="ion-text-center">
              <IonCol color="primary" size="12">
                <IonCardTitle> Some of our services include:</IonCardTitle>

                <IonGrid className="servicelist">
                  <IonRow>
                    <IonCol>
                      <IonItem
                        color="primary"
                        className="serviceItem "
                        lines="none"
                      >
                        <IonIcon size="small" icon={hammerOutline} />
                        <IonLabel>Paint</IonLabel>
                      </IonItem>
                    </IonCol>

                    <IonCol>
                      <IonItem
                        color="primary"
                        className="serviceItem"
                        lines="none"
                      >
                        <IonIcon size="small" icon={hammerOutline} />
                        <IonLabel>Drywall</IonLabel>
                      </IonItem>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol>
                      <IonItem
                        color="primary"
                        className="serviceItem"
                        lines="none"
                      >
                        <IonIcon size="small" icon={hammerOutline} />
                        <IonLabel>Exterior</IonLabel>
                      </IonItem>
                    </IonCol>

                    <IonCol>
                      <IonItem
                        color="primary"
                        className="serviceItem"
                        lines="none"
                      >
                        <IonIcon size="small" icon={hammerOutline} />
                        <IonLabel>Interior</IonLabel>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem
                        color="primary"
                        className="serviceItem"
                        lines="none"
                      >
                        <IonIcon size="small" icon={hammerOutline} />
                        <IonLabel>Electrical</IonLabel>
                      </IonItem>
                    </IonCol>

                    <IonCol>
                      <IonItem
                        color="primary"
                        className="serviceItem"
                        lines="none"
                      >
                        <IonIcon size="small" icon={hammerOutline} />
                        <IonLabel>Demolition</IonLabel>
                      </IonItem>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol>
                      <IonItem
                        color="primary"
                        className="serviceItem"
                        lines="none"
                      >
                        <IonIcon size="small" icon={hammerOutline} />
                        <IonLabel>Add ons</IonLabel>
                      </IonItem>
                    </IonCol>

                    <IonCol>
                      <IonItem
                        color="primary"
                        className="serviceItem"
                        lines="none"
                      >
                        <IonIcon size="small" icon={hammerOutline} />
                        <IonLabel>And more...</IonLabel>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>

        <IonCard color="primary" className="ion-margin">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem color="primary">
                  <IonCardTitle> Disciplined Work</IonCardTitle>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonImg src="/assets/hammer.jpg" />
              </IonCol>
              <IonCol size="6">
                <IonLabel>
                  Years of experience have made our workers first-class
                  craftsmen and will get the project done right the first time.
                </IonLabel>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem color="primary">
                  <IonCardTitle> Finish the Job</IonCardTitle>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonImg src="/assets/blueprint.jpg" />
              </IonCol>
              <IonCol size="6">
                <IonLabel>
                  Having trouble with your DIY project? We can help you finish
                  in a fast and timely manner.
                </IonLabel>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem color="primary">
                  <IonCardTitle> Fairly Priced</IonCardTitle>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonImg src="/assets/cash.jpg" />
              </IonCol>
              <IonCol size="6">
                <IonLabel>
                  Larger companies need a bigger profit margin to survive.
                  Contracting with Zaya Renovations will save you money.
                </IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
