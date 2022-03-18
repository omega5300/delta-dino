import { FC, useState, useEffect } from 'react';

import {
  IonPage,
  IonContent,
  IonImg,
  IonAvatar,
  IonLabel,
  IonText,
  IonBadge,
  IonItem,
  IonList,
  IonToast
} from '@ionic/react';

import Toolbar from '../components/Toolbar';

const Crypto: FC = () => {
  const [coinList, setCoinList] = useState<any[]>([]);
  
  // openTosast
  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState('');
  
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(res => res.json())
      .then(data => {
        setCoinList(data)
      })
      .catch(err => {
        setMsg(err);
        setShowToast(true);
      })
  })
  
  return (
    <IonPage>
      <Toolbar title="crypto info" />
      <IonContent>
        <IonList>
          {
            coinList.map((coin) => (
              <IonItem key={coin.id}>
                <IonAvatar slot="start">
                  <IonImg src={coin.image} alt={coin.name}/>
                </IonAvatar>
                <IonLabel>
                  { coin.name } ({coin.symbol}) <br />
                  <IonText>price: { coin.current_price } USD</IonText>
                </IonLabel>
                <IonBadge
                  slot="end"
                  color={coin.price_change_percentage_24h >= 0 ? 'success' : 'danger'}
                  className="ion-text-md"
                >
                  { coin.price_change_percentage_24h }
                </IonBadge>
              </IonItem>
            ))
          }
        </IonList>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={msg}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Crypto;

