import { Component, OnInit } from '@angular/core';
import { MenuController, NavController,AlertController,LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ErwService } from '../sv/erw.service';
import { ConfigService } from '../sv/config.service';



@Component({
  selector: 'app-erw02',
  templateUrl: './erw02.page.html',
  styleUrls: ['./erw02.page.scss'],
})
export class Erw02Page implements OnInit {

  ionicForm: FormGroup;isSubmitted = false;
  portControl: FormControl;sub: Subscription;
  versionNumber: string | number;




  constructor(public menuCtrl: MenuController,public formBuilder: FormBuilder,public erwsv: ErwService, public configSv: ConfigService, private alertCtrl: AlertController,private loadingController: LoadingController) { 
    this.genform();
   

  }

  genform(){
    //this.file_1 = this.formBuilder.array([]);
    this.ionicForm = this.formBuilder.group({
    companyname: ["",[Validators.required]],
    file: ["", [Validators.required]], //ใบคำขอ
    fileSource : ["",Validators.required],
    file1: [""], //เอกสารแนบ 1
    fileSource1 : [""],
    file2: ["", [Validators.required]], //2.2.1 สำเนาบัตรปชช.
    fileSource2 : ["",Validators.required],  
    file3: ["", [Validators.required]], //2.2.2 สำเนาหนังสือรับรองการจดทะเบียนวัตถุประสงค์
    fileSource3 : ["",Validators.required], 
    file4: ["",Validators.required], //2.2.3 หนังสือบริคณห์สนธิ
    fileSource4 : ["",Validators.required], 
    file5: ["",Validators.required], //2.2.4 ร.ง.4
    fileSource5 : ["",Validators.required], 
    file6: [""], // 2.2.5 สำเนาหนังสือสำคัญแสดงกรรมสิทธิ์ในที่ดิน 
    fileSource6 : [""], 
    file7: [""], // 2.2.6 สำเนาสัญญาเช่า 
    fileSource7 : [""], 
    file8: ["",Validators.required], //2.2.7 แผนที่ตั้งโรงงาน  
    fileSource8 : ["",Validators.required], 
    file9: ["",Validators.required], //2.2.8 กำลังการผลิตของโรงงานต่อปี  
    fileSource9 : ["",Validators.required], 
    file10: ["",Validators.required], //2.2.9 เอกสารวงเงินสินเชื่อ เอกสารแนบ 2
    fileSource10 : ["",Validators.required], 
    });
  }

     
  onFileChange(event,source) {   
    //this.selectedFiles = event.target.files;
    //console.log(this.selectedFiles.item(0));
    if(!event.target.files[0].type.match(/pdf.*/)){
      alert('กรุณาระบุชนิดไฟล์ เป็น pdf เท่านั้น');     
    }
    else
    {
      //console.log(event.target.files[0].mozFullPath);
      const file = event.target.files[0];
      //this.selectedFiles = event.target.files;
      this.ionicForm.get(source)?.setValue(event.target.files[0]);
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //     // this.ionicForm.patchValue({
      //     //   source: reader.result
      //     // });
      //     this.ionicForm.get(source)?.setValue(reader.result)
      // };
    }
   

  }

  get errorControl() {
    return this.ionicForm.controls;
  }


  ngOnInit() {
  }


  ionViewWillEnter() {
    const aux: any = document.getElementsByTagName('META');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < aux.length; i++) {
      if (aux[i].name === 'version') {
        this.versionNumber = aux[i].content;
      }
    }

  }

  openMenu() {
    this.menuCtrl.open();
  }


 async submitForm()
  {
    this.isSubmitted = true;
    //console.log(this.ionicForm.controls.fileSource.value);
  
    //console.log(this.ionicForm.value)

    // const formdata: FormData = new FormData();
    // formdata.append('fileSource', this.ionicForm.controls.fileSource.value);

    //this.currentFile = this.selectedFiles.item(0);

    // this.sub = this.erwsv
    // .cruderw(this.ionicForm.value)
    // .subscribe(   
    // );

    // this.currentFile = this.selectedFiles.item(0);
    // console.log(this.currentFile);
    // this.erwsv.uploadFile1(this.currentFile).subscribe(response => {
		// //this.selectedFiles.value = '';
    //  if (response instanceof HttpResponse) {
		//     this.msg = response.body;
    //     console.log(response.body);
    //   }	  
    // });    




    if (!this.ionicForm.valid) {
      console.log("Please provide all the required values!");
      return false;
    } else {
      //console.log('a');
     
     

      // this.sub = this.erwsv
      // .cruderw(this.ionicForm.value, typesql)
      // .subscribe(
      
      // );
      
      
      
      const confirm =  await this.alertCtrl.create({
        header: 'คุณต้องการอัพโหลดไฟล์แนบ ใช่ไหม??',
        // message: 'แน่ใจว่าต้องการลบเลขระบบที่ '+ item +' ? ',
        buttons: [{
          text: 'ยกเลิก',
          handler: (data: any) => {
             // console.log('cancel ',data);
          }
        },
        {
          text: 'ตกลง',
            handler: (  data: any) => {
           
            
            this.configSv.present('กำลังแนบไฟล์');
          
            this.sub = this.erwsv
            .cruderw(this.ionicForm.value)
            .subscribe( (data : any): void => {
              if (data !== null) {
                  //console.log(data,data['status']);
                  this.configSv.dismiss();

                 // if(data['status'] === 'ok')
                //  {
                    this.configSv.ChkformAlert(data['message']);
                //  }

                  if(data['status'] === 'ok')
                  {
                    this.ionicForm.reset();
                    this.isSubmitted = false;
                  }
              }
            
            },
            
            (error) => {
              console.log(JSON.stringify(error));
              this.configSv.dismiss();
            },
            () => {
              this.configSv.dismiss();
              // this.refreshForm();
            });
          }
        }]
      });
    
    confirm.present();


    return true;
    }
  }

  
  // upload() {
  //   this.currentFile = this.selectedFiles.item(0);
  //   //console.log(this.currentFile);
  //   this.erwsv.cruderw(this.currentFile).subscribe(response => {
	// 	//this.selectedFiles.value = '';
  //    if (response instanceof HttpResponse) {
	// 	    this.msg = response.body;
  //       console.log(response.body);
  //     }	  
  //   });    
  // }


  // onSelectFile(event: any) {
  //   const file = event.target.files[0];
  //   const uploadInput = this.UploadInput1;
  //   uploadInput.type = 'uploadFile';
  //   uploadInput.file = file;
  //   uploadInput.url = 'https://example.com/upload';
  //   uploadInput.headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
  //   uploadInput.data = { foo: 'bar' };
  //   //uploadInput. = this.options;
  //   this.files.push(file);
  //  // this.uploadInput.emit(uploadInput);
  // }

}


