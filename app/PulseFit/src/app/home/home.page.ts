import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {searchOutline, logoTwitter, logoFacebook, homeOutline, menuOutline, timerOutline, personOutline} from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({
      searchOutline,
      logoTwitter, 
      logoFacebook,
      homeOutline,
      menuOutline,
      timerOutline,
      personOutline
    })
  }
}
