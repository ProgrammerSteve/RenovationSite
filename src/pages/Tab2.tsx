import 
{ 
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
} 
from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard color="primary" className="ion-margin">




          <IonItem color="primary"></IonItem>


          <IonItem color="primary" className="ion-activated">
            <IonImg 
            src="/assets/pic1.jpg" 
            />
          </IonItem>



          <IonItem color="primary">
            <IonLabel > (512) 359-2470</IonLabel>
          </IonItem>



        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
