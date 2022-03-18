import { FC, useState } from 'react';

import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonSelect,
  IonSelectOption,
  IonToast
} from '@ionic/react';
import Toolbar from '../components/Toolbar';

// https://api.waifu.im/random/?selected_tags=oppai
const imgStyle = {
  height: '480px',
  display: 'block',
  marginInline: 'auto'
};


const Waifu: FC = () => {
  // static values
  const waifuCategories = [
    'uniform',
    'maid',
    'waifu',
    'marin-kitagawa',
    'mori-calliope',
    'raiden-shogun',
    'selfies',
    'oppai'
  ];

  // states
  const [selectedValue, setSelectedValue] = useState('');
  const [waifuContent, setWaifuContent] = useState<any>({});

  // toast states
  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState<any>('');

  const getWaifu = async () => {
    try {
      const res = await fetch(`https://api.waifu.im/random/?selected_tags=${selectedValue}`);
      const data = await res.json();
      console.info(data.images[0])
      setWaifuContent(data.images[0]);
    } catch (err) {
      setMsg(err);
      setShowToast(true);
    }
    setSelectedValue('')
  };
  
  const downloadImg = async (url: string) => {
   try {
     const res = await fetch(url, {
       mode: 'no-cors'
     });
     
     const imageBlog = await res.blob()
     
     console.info(imageBlog)
     
     /* const a = document.createElement("a");
     a.href = imageURL
     */
   } catch (err) {
      setMsg(err);
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <Toolbar title="waifu image" />
      <IonContent>
        <IonItem>
          <IonLabel>categoria de waifu</IonLabel>
          <IonSelect 
            value={selectedValue} 
            placeholder="selecione su categoria favorita"
            onIonChange={e => setSelectedValue(e.detail.value)}
          >
            { waifuCategories.map((category, i) => <IonSelectOption value={category} key={i}>{category}</IonSelectOption>) }
          </IonSelect>
        </IonItem>
        <IonButton expand="block" onClick={getWaifu} fill="outline">buscar imagen aleatoria</IonButton>
        <IonCard>
          <IonCardContent>
            <img src={waifuContent.url} alt={waifuContent.image_id} style={imgStyle} />
            <IonButton 
              expand="block"
              onClick={() => downloadImg(waifuContent.url)}
            >
              Descargar Imagen
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Waifu;