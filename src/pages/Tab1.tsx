import {
  IonContent,
  IonPage,
  IonCard,
  IonItem,
  IonIcon,
  IonImg,
  IonLabel,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonText,
  IonRouterLink,
} from "@ionic/react";

import {
  callOutline,
  locationOutline,
  mailOutline,
  hammerOutline,
} from "ionicons/icons";
import React from "react";
import "./Tab1.css";

const serviceList = () => {
  let elements: any = [];
  const services = [
    "Painting",
    "Texturing",
    "Drywall",
    "Exterior Painting",
    "Interior Painting",
    "Electrical outlets",
    "Demolition",
    "Water damage",
    "Pressure washing",
    "Ceiling Fans",
    "Light fixtures",
    "Lawn Care",
    "Mulching",
    "Yard work",
    "Add ons",
    "And more...",
  ];
  services.forEach((el) => {
    elements.push(
      <IonButton color="dark" className="serviceItem flexitem">
        <IonText className="servicetxt ion-text-wrap">{`${el}`}</IonText>
      </IonButton>
    );
  });
  return (
    <IonRow className="">
      <IonCol className="flexcontainer" color="primary" size="12">
        {elements}
      </IonCol>
    </IonRow>
  );
};

const Tab1: React.FC = () => {
  return (
    <IonPage className="page-container">
      <IonContent color="medium" fullscreen>
        <IonCard color="primary" className="ion-margin">
          <IonItem color="primary" lines="none">
            <IonCardTitle className="homepagetitle ion-margin-top ion-margin-bottom">
              <IonText>Making Home Feel Like Home</IonText>
            </IonCardTitle>
          </IonItem>

          <IonItem
            className="ion-activated img-container"
            lines="none"
            color="primary"
          >
            <IonImg id="home-img" src="/assets/lights.jpg" />
          </IonItem>

          <IonItem
            color="primary"
            className="ion-activated ion-margin-top"
            lines="none"
            id="zaya-logo"
          >
            <IonImg src="/assets/zayahorizontal.svg" />
          </IonItem>

          <IonItem
            color="primary"
            lines="none"
            className="ion-margin-left ion-margin-right"
          >
            <IonIcon size="medium" slot="start" icon={callOutline} />
            <IonLabel>
              <IonText className="hometxt">(512) 359-2470</IonText>{" "}
            </IonLabel>
          </IonItem>

          <IonItem
            color="primary"
            lines="none"
            className="ion-margin-left ion-margin-right"
          >
            <IonIcon size="medium" slot="start" icon={mailOutline} />
            <IonLabel>
              <IonText className="ion-text-wrap hometxt">
                Zayarenovations4u@gmail.com
              </IonText>{" "}
            </IonLabel>
          </IonItem>

          <IonItem
            color="primary"
            className="ion-margin-left ion-margin-right ion-margin-bottom"
            lines="none"
          >
            <IonIcon size="medium" slot="start" icon={locationOutline} />
            <IonLabel>
              <IonText className="ion-text-wrap hometxt">
                820 Daffodil, Los Fresnos, TX 78566
              </IonText>
            </IonLabel>
          </IonItem>
        </IonCard>

        <IonCard color="primary" className="ion-margin">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem color="primary" className="ion-text-center">
                  <IonCardTitle>
                    <IonText className="subtitle ion-margin">About Us</IonText>
                  </IonCardTitle>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow className="">
              <IonCol size="12" color="primary">
                <IonItem
                  color="primary"
                  lines="none"
                  className="ion-padding-bottom"
                >
                  <IonText className="hometxt ion-text-wrap">
                    Zaya Renovations is a family owned renovation company
                    serving the RGV locality. With our passion for home
                    renovation, we hope to service your needs and win your
                    loyalty. Have questions? Receiving a quote is free and easy!
                  </IonText>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow className="ion-padding-bottom">
              <IonCol className="quote-col" size="12" color="primary">
                <IonRouterLink href="/tab3">
                  <IonButton className="quote-btn" color="tertiary">
                    <IonText className="quote-btn-txt">Free Quote</IonText>
                  </IonButton>
                </IonRouterLink>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>

        <IonCard color="primary" className="ion-margin">
          <IonGrid className="ion-padding-bottom">
            <IonRow>
              <IonCol color="" size="7" className="autocenter">
                <IonItem className="ion-text-center" color="primary">
                  <IonLabel className="subtitle">
                    <IonText className="lg-subtitle ">Services:</IonText>
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>

            {serviceList()}
          </IonGrid>
        </IonCard>

        <IonCard color="primary" className="ion-margin">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem color="primary">
                  <IonCardTitle>
                    <IonText className="subtitle">Disciplined Work</IonText>
                  </IonCardTitle>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonImg src="/assets/hammer.jpg" />
              </IonCol>
              <IonCol size="6">
                <IonItem
                  lines="none"
                  color="primary"
                  className="ion-padding-left ion-padding-right nopadding"
                >
                  <IonLabel className="">
                    <IonText className="hometxt ion-text-wrap">
                      Years of experience have made our workers first-class
                      craftsmen and will get the project done right the first
                      time.
                    </IonText>
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem color="primary">
                  <IonCardTitle>
                    <IonText className="subtitle">Finish the Job</IonText>{" "}
                  </IonCardTitle>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonImg src="/assets/blueprint.jpg" />
              </IonCol>
              <IonCol size="6">
                <IonItem
                  lines="none"
                  color="primary"
                  className="ion-padding-left ion-padding-right"
                >
                  <IonLabel>
                    <IonText className="hometxt ion-text-wrap">
                      Having trouble with your DIY project? We can help you
                      finish in a fast and timely manner.
                    </IonText>
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem color="primary">
                  <IonCardTitle>
                    <IonText className="subtitle">Fairly Priced</IonText>{" "}
                  </IonCardTitle>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonImg src="/assets/cash.jpg" />
              </IonCol>
              <IonCol size="6">
                <IonItem
                  lines="none"
                  color="primary"
                  className="ion-padding-left ion-padding-right nopadding"
                >
                  <IonLabel className="">
                    <IonText className="hometxt ion-text-wrap">
                      Larger companies need a bigger profit margin to survive.
                      Contracting with Zaya Renovations will save you money.
                    </IonText>
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
