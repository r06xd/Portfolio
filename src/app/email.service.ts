import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    

    private apiUrl='https://api.brevo.com/v3/smtp/email';
    private apikey='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';
    constructor(private http: HttpClient) {
    }

    sendEmail(toEmail:string,subject:string,content:string):Observable<any>{
        const headers = new HttpHeaders({
            'content-Type':'application/json',
            'api-key':this.apikey
        });

        const emailData ={
            sender:{name:'Portafolio',email:'r06xd@hotmail.es'},
            to:[{email:'r06xd@hotmail.es'}],
            subject:subject,
            htmlContent:toEmail+' - '+content
        };

        const datos = JSON.stringify(emailData);
        const datosHeader = JSON.stringify(headers);

        return this.http.post (this.apiUrl,datos,{headers});
    }
}