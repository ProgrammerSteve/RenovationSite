import React from "react";

import {
  IonItem,
  IonButton,
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { paperPlaneOutline, reload } from "ionicons/icons";

interface Props {
  handleReset: () => void;
  handleSubmitData: () => void;
}

const InputButtons: React.FC<Props> = (props) => {
  return (
    <>
      <IonItem
        color="medium"
        className="ion-justify-content-center"
        lines="none"
      >
        <IonGrid>
          <IonRow>
            <IonCol size="5">
              <IonButton
                color="light"
                className="center-margin-in-line"
                onClick={() => props.handleReset()}
              >
                <IonIcon slot="start" size="medium" icon={reload} />
                <IonText>Reset</IonText>
              </IonButton>
            </IonCol>
            <IonCol size="7">
              <IonButton
                color="dark"
                className="center-margin-in-line"
                onClick={() => props.handleSubmitData()}
              >
                <IonIcon slot="start" size="medium" icon={paperPlaneOutline} />
                <IonText>Send</IonText>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </>
  );
};

export default InputButtons;
