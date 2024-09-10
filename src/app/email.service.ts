import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    

    //private apiUrl='https://api.brevo.com/v3/smtp/email';
    private apiUrl= environment.URL_SERV_EMAIL;
    private apikey= environment.API_KEY;
    constructor(private http: HttpClient) {
    }

    sendEmail(toEmail:string,subject:string,content:string):Observable<any>{
        const headers = new HttpHeaders({
            'content-Type':'application/json',
            'api-key':this.apikey??''
        });

        const emailData ={
            sender:{name:'Portafolio',email:'r06xd@hotmail.es'},
            to:[{email:'r06xd@hotmail.es'}],
            subject:subject,
            htmlContent:toEmail+' - '+content
        };

        const datos = JSON.stringify(emailData);
        const datosHeader = JSON.stringify(headers);

        return this.http.post (this.apiUrl??'',datos,{headers});
    }
}