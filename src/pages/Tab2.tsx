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
    <IonPage>
      <IonContent fullscreen color="medium">
        <IonCard color="primary" className="ion-margin">
          <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic1.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary" className="ion-text-center">
                      <IonLabel>Electrical Work</IonLabel>
                    </IonItem>

                    <IonItem color="primary" className="ion-no-border">
                      <IonText className="ion-text-center ion-no-border">
                        An intricate electrical installation on the ceiling of
                        an industrial building.
                      </IonText>
                    </IonItem>
                    <IonItem className="ion-text-center" color="primary"></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>

            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic2.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary" className="ion-text-center">
                      <IonLabel>Installing Electrical Outlets</IonLabel>
                    </IonItem>
                    <IonItem color="primary" className="no-border">
                      <IonText>
                        An electrical outlet installation in a residental home.
                      </IonText>
                    </IonItem>
                    <IonItem className="no-border" color="primary"></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>

            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic3.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary" className="ion-text-center">
                      <IonLabel>Drywall Installation</IonLabel>
                    </IonItem>
                    <IonItem color="primary" className="no-border">
                      <IonText>A drywall installation for a garage.</IonText>
                    </IonItem>
                    <IonItem className="no-border" color="primary"></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>

            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic4.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary" className="ion-text-center">
                      <IonLabel>Light Installation</IonLabel>
                    </IonItem>
                    <IonItem color="primary" className="no-border">
                      <IonText>
                        A lighting installation job in a industrial building.
                      </IonText>
                    </IonItem>
                    <IonItem className="no-border" color="primary"></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>

            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic5.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary" className="ion-text-center">
                      <IonLabel>Light Installation</IonLabel>
                    </IonItem>
                    <IonItem color="primary" className="no-border">
                      <IonText>
                        Another lighting installation job in a industrial
                        building.
                      </IonText>
                    </IonItem>
                    <IonItem className="no-border" color="primary"></IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>

            <IonSlide>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary">
                      <IonImg
                        className="slidingpic"
                        src={`/assets/opt-pic6.png`}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem color="primary" className="ion-text-center">
                      <IonLabel>Drywall Installation/Painting</IonLabel>
                    </IonItem>
                    <IonItem color="primary" className="no-border">
                      <IonText>
                        Drywall installation job followed by paint and
                        texturing.
                      </IonText>
                    </IonItem>
                    <IonItem className="no-border" color="primary"></IonItem>
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
