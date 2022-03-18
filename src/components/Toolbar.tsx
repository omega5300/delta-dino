import { FC } from 'react';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle
} from '@ionic/react';

type props = {
  title: string;
};

const Toolbar: FC<props> = ({title}) => (
  <IonHeader>
    <IonToolbar color="primary">
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default Toolbar;