import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage:any = LoginPage;

  constructor(platform: Platform,splashScreen: SplashScreen, statusBar: StatusBar) {
    platform.ready().then( () =>{
      statusBar.styleDefault();
      splashScreen.hide();
  });
  }
}
