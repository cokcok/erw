import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http'; 
import { data } from '../models/data_model';
import { FeedBack } from '../models/feedback';
@Injectable({
  providedIn: 'root'
})
export class ErwService {

  constructor(private http: HttpClient, private configSv: ConfigService) { }


  cruderw(vdata: any): Observable<FeedBack> {
   // const header = { 'Content-Type': 'application/json' };
    //const apiUrl = this.configSv.ip_appcen + 'test.php';
    const apiUrl = this.configSv.ip+ "upload.php";
     //console.log(vdata);
    //  let data;
    //  data = {
    //    fileSource : vdata,
    //  }
    const formdata: FormData = new FormData();
    formdata.append('companyname', vdata.companyname);
    formdata.append('fileSource', vdata.fileSource);
    formdata.append('fileSource1', vdata.fileSource1);
    formdata.append('fileSource2', vdata.fileSource2);
    formdata.append('fileSource3', vdata.fileSource3);
    formdata.append('fileSource4', vdata.fileSource4);
    formdata.append('fileSource5', vdata.fileSource5);
    formdata.append('fileSource6', vdata.fileSource6);
    formdata.append('fileSource7', vdata.fileSource7);
    formdata.append('fileSource8', vdata.fileSource8);
    formdata.append('fileSource9', vdata.fileSource9);
    formdata.append('fileSource10', vdata.fileSource10);
    return this.http.post<FeedBack>(apiUrl, formdata);


  }



  uploadFile(file: any): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file1', file);
    console.log(formdata);
		const req = new HttpRequest('POST', this.configSv.ip + 'test1.php', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
    //return this.http.post<FeedBack>(apiUrl, data, { headers: header });
   }

   //  cruderw(vdata: File, type: string, cause?): Observable<FeedBack> {
   uploadFile1(file: any): Observable<FeedBack> {
    const apiUrl = this.configSv.ip + 'test1.php';
		const formdata: FormData = new FormData();
    formdata.append('name', 'aaa6');
		formdata.append('file1', file);
    //console.log(formdata);
		// const req = new HttpRequest('POST', this.configSv.ip + 'test1.php', formdata, {
		// 	  reportProgress: true,
		// 	  responseType: 'text'
		// });
	
		//return this.http.request(req);
    return this.http.post<FeedBack>(apiUrl, formdata);
   }

}
