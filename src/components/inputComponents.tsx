import React from "react";
import {
  IonInput,
  IonItem,
  IonTextarea,
  IonLabel,
} from "@ionic/react";

interface Props {
  handleName: (text: string) => void;
  handleTel: (text: string) => void;
  handleEmail: (text: string) => void;
  handleTextArea: (text: string) => void;
  name: string;
  tel: string;
  email: string;
  textArea: string;
}

const InputComponents: React.FC<Props> = (props) => {
  return (
    <>
      <IonItem color="primary">
        <IonLabel position="floating" color="medium">
          Name
        </IonLabel>
        <IonInput
          required={true}
          value={props.name}
          onIonChange={(e) => props.handleName(e.detail.value!)}
          clearInput
        ></IonInput>
      </IonItem>

      <IonItem color="primary">
        <IonLabel position="floating" color="medium">
          Telephone
        </IonLabel>
        <IonInput
          inputMode="tel"
          required={true}
          value={props.tel}
          onIonChange={(e) => props.handleTel(e.detail.value!)}
          clearInput
        ></IonInput>
      </IonItem>

      <IonItem color="primary">
        <IonLabel position="floating" color="medium">
          Email
        </IonLabel>
        <IonInput
          inputMode="email"
          required={true}
          value={props.email}
          onIonChange={(e) => props.handleEmail(e.detail.value!)}
          clearInput
        ></IonInput>
      </IonItem>

      <IonItem color="primary">
        <IonLabel position="floating" color="medium">
          Enter Description of Job here...
        </IonLabel>
        <IonTextarea
          auto-grow
          rows={6}
          required={true}
          value={props.textArea}
          onIonChange={(e) => props.handleTextArea(e.detail.value!)}
        ></IonTextarea>
      </IonItem>
    </>
  );
};

export default InputComponents;
