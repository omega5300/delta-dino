import { FC } from 'react';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonContent,
  IonItem,
  IonLabel,
  IonText,
  IonPage,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import Toolbar from '../components/Toolbar';

import './hardware-img.css';

interface AppTools {
  name: string;
  from: string;
}

const evenTools: AppTools[] = [
  {
    name: 'lyrics finder',
    from: 'stack-analyze delta 1.0.0'
  },
  {
    name: 'waifu random image',
    from: 'herramienta unica'
  }
];

const oddTools: AppTools[] = [
  {
    name: 'hadware information',
    from: 'stack-analyze delta 1.0.0, npm 1.1.0, pwa 1.2.0 y desktop 4'
  },
  {
    name: 'crypto market',
    from: 'stack-analyze desktop 5, pwa 1.3.0 y npm 1.1.3'
  }
];

const About: FC = () => (
  <IonPage>
    <Toolbar title="about" />
    <IonContent>
      <IonCard mode="ios">
        <IonCardHeader mode="md">
          <img
            className="hardware"
            src="assets/icon/icon.png"
            alt="logo"
          />
          <IonCardTitle>stack dino</IonCardTitle>
          <IonCardSubtitle>
            distro basado en los stack-analyze pwa y delta <br />
            herramientas utilizadas
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent mode="md">
          <IonGrid>
            <IonRow>
              {evenTools.map((tool, i) => (
                <IonCol key={i}>
                  <IonItem>
                    <IonLabel position="stacked" color="secondary">{tool.name}</IonLabel>
                    <IonText color="dark">{tool.from}</IonText>
                  </IonItem>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
          {
            oddTools.map((tool, i) => (
              <IonItem key={i}>
                <IonLabel position="stacked" color="secondary">
                  {tool.name}
                </IonLabel>
                <IonText color="dark">{tool.from}</IonText>
              </IonItem>
            ))
          }
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default About;