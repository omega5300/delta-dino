import { FC } from 'react';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonThumbnail,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { 
  hammerOutline, 
  musicalNotesOutline, 
  walletOutline, 
  sparklesOutline,
  personCircleOutline
} from 'ionicons/icons';

import './Menu.css';

interface AppPage {
  url: string;
  icon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Lyrics',
    url: '/lyric',
    icon: musicalNotesOutline
  },
  {
    title: 'Hardware',
    url: '/hardware',
    icon: hammerOutline
  },
  {
    title: 'Waifu',
    url: '/waifu',
    icon: sparklesOutline
  },
  {
    title: 'Crypto',
    url: '/crypto',
    icon: walletOutline
  },
  {
    title: 'About',
    url: '/about',
    icon: personCircleOutline
  }
];

const Menu: FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar color="light" class="ion-text-center ion-padding-vertical">
          <IonThumbnail className="horizontal">
            <IonImg src="/assets/icon/icon.png" alt="logo" />
          </IonThumbnail>
          <IonTitle className="title">stack dino</IonTitle>
          <IonNote color="secondary">creado por omega5300</IonNote>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="inbox-list">
          <IonListHeader class="ion-padding-bottom">herramientas</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem 
                  className={location.pathname === appPage.url ? 'selected' : ''} 
                  routerLink={appPage.url} 
                  routerDirection="none" 
                  lines="none" 
                  detail={false}
                >
                  <IonIcon color="dark" slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
