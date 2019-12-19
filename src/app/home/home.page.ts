import { Component , OnInit} from '@angular/core';
import { NotifiService } from '../services/notifi.service';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private notifiService : NotifiService, private fcm: FCM) {}


  ngOnInit(){
    this.fcm.getToken().then(token => {
      console.log(token);
    })
  }

  notifi(){
    var data = {
      "notification" :{
        "title" : "Notificacion de Prueba HUAWEI LIMBERT",
        "body" : "Mensaje de prueba desde mi tel",
        "sound" : "default"
      },
      "to" : "c2ggXz4RMTw:APA91bEaTaaatIf2dO13EF29KxoqEa466W2-M06oJe2RX04meCoI8NRoxtOcd2Rmxgy76ASzeM_Dah9e6AIkYOSHzhh_9oWVGKTvpB-NHqUHl7MiZW5MP7RyCjecxMpkhKPh9DV7dnEE"
    };
    this.notifiService.save(data).subscribe(data => {

    })
  }
}
