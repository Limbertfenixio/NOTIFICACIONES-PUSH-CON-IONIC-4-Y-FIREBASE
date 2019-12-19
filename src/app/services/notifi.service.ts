import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotifiService {

  constructor(private httpCliente: HttpClient) { }


  save(data){
    var url = "https://fcm.googleapis.com/fcm/send";

    return this.httpCliente.post(url,data,{
      headers:new HttpHeaders({
        "Content-Type":"application/json",
        "Authorization":"key=AAAA2rExzkQ:APA91bEaZKLM1BxMwJoY57T0cFa3006hxewBEi5QNpDtwMnaB1pTAXPKoWBbGxEcoS_ZLlnArUbiyG80Ud7f4JOIxeOrZwxH6QcPqZxS_dc1NfdYDi-qSnF4Tpqpalpzu3ep6u7gGCEX"
      })
    });
  }
}
