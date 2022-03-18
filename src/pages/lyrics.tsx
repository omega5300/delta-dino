import { FC, useState } from 'react';

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
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonToast
} from '@ionic/react';
import Toolbar from '../components/Toolbar';

const Lyrics: FC = () => {
  // lyric data
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [lyric, setLyric] = useState('');
  
  const [artistResult, SetArtistResult] = useState('');
  const [songResult, setSongResult] = useState('');

  // openTosast
  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState('');

  const searchLyrics = async () => {
    try {
      const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      const data = await res.json()
      setLyric(data.lyrics);
      
      SetArtistResult(artist);
      setSongResult(song);
    } catch (err: any) {
      setMsg(err);
      setShowToast(true)
    }
    setArtist('');
    setSong('');
  };

  return (
    <IonPage>
      <Toolbar title="bucador de letras" />
      <IonContent className="ion-margin-top">
        <IonItem>
          <IonLabel position="floating">Artista</IonLabel>
          <IonInput
            type="text"
            value={artist}
            onIonChange={(e: any) => setArtist(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Canción</IonLabel>
          <IonInput
            type="text"
            value={song}
            onIonChange={(e: any) => setSong(e.target.value)}
          />
        </IonItem>
        <IonButton 
          className="ion-margin-vertical"
          onClick={searchLyrics}
          fill="outline" 
          expand="block"
        >
          buscar letras
        </IonButton>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{artistResult}</IonCardTitle>
            <IonCardSubtitle>canción: {songResult}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
             <pre>{lyric}</pre>
          </IonCardContent>
        </IonCard>
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

export default Lyrics;
