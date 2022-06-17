import { useCallback, useEffect, useMemo, useState } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonCard,
  IonImg,
  IonIcon,
  IonLabel,
  IonCardTitle,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonSlides,
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/react";

import { ellipsisHorizontal, ellipsisVertical, archive } from "ionicons/icons";


import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Tab2: React.FC = () => {
  return (
    <IonPage className="page-container">
      <IonContent fullscreen color="medium">
        <IonCard color="primary" className="ion-margin">
          <IonSlides pager={true} options={slideOpts}>








            <IonSlide>
              <IonGrid>
                <IonRow className="ion-margin-top">
                  <IonCol>
                    <IonItem lines="none" color="primary" className="ion-justify-content-center">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic1.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem
                      lines="none"
                      color="primary"
                      className="ion-text-center"
                    >
                      <IonLabel className="ion-no-border">
                        Electrical Work
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none" color="primary">
                      <IonText className="ion-text-center">
                        An intricate electrical installation on the ceiling of
                        an industrial building.
                      </IonText>
                    </IonItem>
                    <IonItem
                      lines="none"
                      className="ion-text-center"
                      color="primary"
                    ></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>








            <IonSlide>
              <IonGrid>
                <IonRow className="ion-margin-top">
                  <IonCol>
                    <IonItem lines="none" color="primary" className="ion-justify-content-center">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic2.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem
                      lines="none"
                      color="primary"
                      className="ion-text-center"
                    >
                      <IonLabel className="ion-no-border">
                        Installing Electrical Outlets
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none" color="primary">
                      <IonText className="ion-text-center">
                        An electrical outlet installation in a residental home.
                      </IonText>
                    </IonItem>
                    <IonItem
                      lines="none"
                      className="ion-text-center"
                      color="primary"
                    ></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
















            <IonSlide>
              <IonGrid>
                <IonRow className="ion-margin-top">
                  <IonCol>
                    <IonItem lines="none" color="primary" className="ion-justify-content-center">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic3.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem
                      lines="none"
                      color="primary"
                      className="ion-text-center"
                    >
                      <IonLabel className="ion-no-border">
                        Drywall Installation
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none" color="primary">
                      <IonText className="ion-text-center">
                        A drywall installation for a garage.
                      </IonText>
                    </IonItem>
                    <IonItem
                      lines="none"
                      className="ion-text-center"
                      color="primary"
                    ></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
















            <IonSlide>
              <IonGrid>
                <IonRow className="ion-margin-top">
                  <IonCol>
                    <IonItem lines="none" color="primary" className="ion-justify-content-center">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic4.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem
                      lines="none"
                      color="primary"
                      className="ion-text-center"
                    >
                      <IonLabel className="ion-no-border">
                        Light Installation
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none" color="primary">
                      <IonText className="ion-text-center">
                        A lighting installation job in a industrial building.
                      </IonText>
                    </IonItem>
                    <IonItem
                      lines="none"
                      className="ion-text-center"
                      color="primary"
                    ></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>























            <IonSlide>
              <IonGrid>
                <IonRow className="ion-margin-top">
                  <IonCol>
                    <IonItem lines="none" color="primary" className="ion-justify-content-center">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic5.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem
                      lines="none"
                      color="primary"
                      className="ion-text-center"
                    >
                      <IonLabel className="ion-no-border">
                        Light Installation
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none" color="primary">
                      <IonText className="ion-text-center">
                        Another lighting installation job in a industrial
                        building.
                      </IonText>
                    </IonItem>
                    <IonItem
                      lines="none"
                      className="ion-text-center"
                      color="primary"
                    ></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>




















            <IonSlide>
              <IonGrid>
                <IonRow className="ion-margin-top">
                  <IonCol>
                    <IonItem lines="none" color="primary" className="ion-justify-content-center">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic6.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem
                      lines="none"
                      color="primary"
                      className="ion-text-center"
                    >
                      <IonLabel className="ion-no-border">
                        Drywall Installation/Painting
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none" color="primary">
                      <IonText className="ion-text-center">
                        Drywall installation job followed by paint and
                        texturing.
                      </IonText>
                    </IonItem>
                    <IonItem
                      lines="none"
                      className="ion-text-center"
                      color="primary"
                    ></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
          </IonSlides>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Tab2;
