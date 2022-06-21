import { useCallback, useEffect, useMemo, useState } from "react";

import {
  IonContent,
  IonPage,
  IonItem,
  IonCard,
  IonImg,
  IonLabel,
  IonSlides,
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/react";

import "./Tab2.css";
const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const textArr = [
  [
    `Electrical Work`,
    `
    An intricate electrical installation on the ceiling of
    an industrial building.
    `,
  ],
  [
    `Installing Electrical Outlets`,
    `
    An intricate electrical installation on the ceiling of
    an industrial building.
    `,
  ],
  [
    `Drywall Installation`,
    `
    An electrical outlet installation in a residental home.
    `,
  ],
  [
    `Light Installation`,
    `A lighting installation job in a industrial building.
    `,
  ],
  [
    `Light Installation`,
    `
    Another lighting installation job in a industrial building,
    `,
  ],
  [
    `Drywall Installation/Painting`,
    `
    Drywall installation job followed by paint and texturing.
    `,
  ],
];

const Tab2: React.FC = () => {
  const generateSlides = () => {
    let elements: any = [];
    textArr.forEach((arr, ind) => {
      elements.push(
        <IonSlide>
          <IonGrid>
            <IonRow className="ion-margin-top">
              <IonCol>
                <IonItem
                  lines="none"
                  color="primary"
                  className="ion-justify-content-center"
                >
                  <IonImg
                    className="slidingpic"
                    src={`/assets/opt-pic${ind + 1}.png`}
                    style={{
                      height: "50vh",
                    }}
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
                  <IonLabel className="ion-no-border">{arr[0]}</IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem
                  lines="none"
                  color="primary"
                  style={{
                    display: "grid",
                    justifyContent: "center",
                    marginBottom: "2%",
                  }}
                >
                  <IonText>{arr[1]}</IonText>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonSlide>
      );
    });
    return elements;
  };

  return (
    <IonPage className="page-container">
      <IonContent fullscreen color="medium">
        <IonCard color="primary" className="ion-margin">
          <IonSlides pager={true} options={slideOpts}>
            {generateSlides()}
          </IonSlides>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Tab2;
