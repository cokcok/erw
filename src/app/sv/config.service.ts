import { Injectable } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public ip_appcen = 'https://appcen01.raot.co.th/ws_erw/'; // production
  public ip: string = "http://10.99.20.23/erw/";
  isLoading = false;
  constructor( private loadingController: LoadingController, private alertCtrl: AlertController) { }



  async loadingAlert(dur: number) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'กำลังโหลดข้อมูล...',
      //duration: dur
    });
    return await loading.present();

   // return loading;
  }

  async ChkformAlert(text: string){
    const alert = await this.alertCtrl.create({
      message: text,
      buttons: ['ตกลง']
      });
    return await alert.present();
  }

  async present(msg:string) {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
      spinner: 'bubbles',
      message: msg,
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed')
    );
  }


}
