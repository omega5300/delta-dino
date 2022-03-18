import { FC, useEffect, useState } from 'react';

import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonText
} from '@ionic/react';

import { Device } from "@capacitor/device";

import Toolbar from '../components/Toolbar';

import './hardware-img.css';

const Hardware: FC = () => {
  // states
  const [modelInfo, setModelInfo] = useState<any>({});
  const [batteryInfo, setBatteryInfo] = useState<any>({});

  const DeviceInfo = async () => {
    const device = await Device.getInfo();
    const battery = await Device.getBatteryInfo();
    setModelInfo(device);
    setBatteryInfo(battery);
  };

  useEffect(() => {
    
    DeviceInfo();
  }, []);

  return (
    <IonPage>
      <Toolbar title="hardware info" />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol sizeMd="4" offsetMd="4" size="12">
              <IonCard mode="ios">
                <IonCardHeader>
                  <img
                    src="assets/hardware-info/cpu.svg"
                    alt="hardware info img"
                    className="hardware"
                  />
                </IonCardHeader>
                <IonCardContent mode="md">
                  <IonCardTitle>{modelInfo.model}</IonCardTitle>
                  <IonCardSubtitle>
                    os: {
                      modelInfo.operatingSystem === "unknown"
                        ? "unix"
                        : modelInfo.operatingSystem
                    }
                  </IonCardSubtitle>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12">
                        <IonItem>
                          <IonLabel>manufacturer: {modelInfo.manufacturer}</IonLabel>
                        </IonItem>
                      </IonCol>
                      <IonCol size="6">
                        <IonItem>
                          <IonLabel position="stacked">os version:</IonLabel>
                          <IonText>{modelInfo.osVersion}</IonText>
                        </IonItem>
                      </IonCol>
                      <IonCol size="6">
                        <IonItem>
                          <IonLabel position="stacked">platform:</IonLabel>
                          <IonText>{modelInfo.platform}</IonText>
                        </IonItem>
                      </IonCol>
                      <IonCol size="12">
                        <IonItem>
                          <IonLabel position="stacked">battery status:</IonLabel>
                          <IonText>{batteryInfo.batteryLevel * 100} %</IonText>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Hardware