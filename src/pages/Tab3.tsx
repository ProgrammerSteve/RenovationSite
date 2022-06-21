import { useState } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAlert,
} from "@ionic/react";

import InputComponents from "../components/inputComponents";
import InputButtons from "../components/inputButtons";
import "./Tab3.css";

const validPhone = new RegExp(
  /\+?1?[-]?[ ]?[\(]?(\d{3})[\)]?[ ]?[-]?(\d{3})[ ]?[-]?(\d{4})/m
);
const validEmail = new RegExp(/(\w*(?=@))@(\w*(?=\.))(\.com|\.net)/m);

const Tab3: React.FC = () => {
  //for input values
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");

  //Initiates Ionic Alerts
  const [error, setError] = useState<string>("");
  const [sent, setSent] = useState<string>("");

  //ends Ionic Alerts
  const clearError = () => {
    setError((error) => "");
  };
  const clearSent = () => {
    setSent((sent) => "");
  };

  //functions passed as props
  const handleName = (text: string) => {
    setName(text);
  };
  const handleTel = (text: string) => {
    setTel(text);
  };
  const handleEmail = (text: string) => {
    setEmail(text);
  };
  const handleTextArea = (text: string) => {
    setTextArea(text);
  };

  const handleSubmitData = () => {
    if (name === "" || tel === "" || email === "" || textArea === "") {
      setError((error) => "Please make sure to not to leave any fields empty");
      return;
    } else if (!validPhone.test(tel)) {
      setError((error) => "Please enter a correctly formatted phone number");
      return;
    } else if (!validEmail.test(email)) {
      setError((error) => "Please enter a correctly formatted email");
      return;
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${name}`,
          tel: `${tel}`,
          email: `${email}`,
          textArea: `${textArea}`,
        }),
      };

      fetch("https://zaya-container-axqzvcglaa-uc.a.run.app/", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      setName("");
      setTel("");
      setEmail("");
      setTextArea("");
      setError("");
      setSent(
        "You quote request has been received! Our team will respond as soon as possible"
      );
    }
  };

  const handleReset = () => {
    setName("");
    setTel("");
    setEmail("");
    setTextArea("");
    setError("");
  };

  return (
    <IonPage className="page-container">
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      />
      <IonAlert
        isOpen={!!sent}
        message={sent}
        buttons={[{ text: "Okay", handler: clearSent }]}
      />
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Enter your Infomation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="medium">
        <InputComponents
          name={name}
          tel={tel}
          email={email}
          textArea={textArea}
          handleName={handleName}
          handleTel={handleTel}
          handleEmail={handleEmail}
          handleTextArea={handleTextArea}
        />
        <InputButtons
          handleReset={handleReset}
          handleSubmitData={handleSubmitData}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
