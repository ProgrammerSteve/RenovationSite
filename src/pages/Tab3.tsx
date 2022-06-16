import { useState } from 'react';

import 
{ 
  IonContent, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonTextarea,
  IonButton,
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonLabel,
} from '@ionic/react';

import { paperPlaneOutline, reload } from "ionicons/icons";
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  const[name,setName]=useState("");
  const[tel,setTel]=useState("");
  const[email,setEmail]=useState("");
  const[textArea,setTextArea]=useState("");

  const handleSubmitData=async()=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { 
          name: `${name}`,
          tel: `${tel}`,
          email: `${email}`,
          textArea: `${textArea}`,
        })
    };
    fetch('http://programmersteve105.pythonanywhere.com/', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data) )
      .catch(error=>console.log(error));
    setName('');
    setTel("");
    setEmail('');
    setTextArea('');

  }

  const handleReset=()=>{
    setName('');
    setTel("");
    setEmail('');
    setTextArea('');
  }

  return (
    <IonPage className="page-container">
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle >Enter your Infomation</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent color="medium">
        <IonItem color="primary">
          <IonLabel position="floating" color="medium">Name</IonLabel>
          <IonInput 
          value={name}  
          onIonChange={e => setName(e.detail.value!)} 
          clearInput>
          </IonInput>
        </IonItem>

        <IonItem color="primary">
        <IonLabel position="floating" color="medium">Telephone</IonLabel>
          <IonInput 
          value={tel} 
          inputMode='tel'
          onIonChange={e => setTel(e.detail.value!)} 
          clearInput>
          </IonInput>
        </IonItem>        

        <IonItem color="primary">
        <IonLabel position="floating" color="medium">Email</IonLabel>
          <IonInput 
          value={email} 
          inputMode='email'
          onIonChange={e => setEmail(e.detail.value!)} 
          clearInput>
          </IonInput>
        </IonItem>    
        <IonItem color="primary">
        <IonLabel position="floating" color="medium">Enter Description of Job here...</IonLabel>
          <IonTextarea 
          auto-grow
          rows={6}

          value={textArea} 
          onIonChange={e => setTextArea(e.detail.value!)}>
          </IonTextarea>
        </IonItem>


        <IonItem color="medium" className="ion-justify-content-center" lines="none">

        <IonGrid>
          <IonRow>
            <IonCol size="5">
        <IonButton color="light" className='center-margin-in-line' onClick={()=>handleReset()}>
          <IonIcon slot="start" size="medium" icon={reload} />
          <IonText>Reset</IonText>
          </IonButton>
            </IonCol>
            <IonCol size="7">
              
          <IonButton color="dark" className='center-margin-in-line' onClick={()=>handleSubmitData()}>
          <IonIcon slot="start" size="medium" icon={paperPlaneOutline} />
          <IonText>Send</IonText>
          </IonButton>
              </IonCol>
          </IonRow>
        </IonGrid>




        </IonItem>
        
        
        
      </IonContent>
      <IonFooter>
      <IonToolbar color="primary">
    <IonTitle className="ion-margin" >Note:</IonTitle>
  
  <IonItem lines="none" color="primary" className="ion-margin">
    Adding dimensions and a detailed description will help us determine the price more accurately.
    If you are unsure or need help, we will be happy to assist you.
  </IonItem>
  </IonToolbar>
      </IonFooter>


    </IonPage>
  );
};

export default Tab3;
