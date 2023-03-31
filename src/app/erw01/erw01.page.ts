import { Component, OnInit } from '@angular/core';
import { MenuController, NavController,AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators,FormControl,FormArray  } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-erw01',
  templateUrl: './erw01.page.html',
  styleUrls: ['./erw01.page.scss'],
})
export class Erw01Page implements OnInit {
 
  ionicForm: FormGroup;isSubmitted = false;
  portControl: FormControl;sub: Subscription;
  versionNumber: string | number;
  constructor(public menuCtrl: MenuController,public formBuilder: FormBuilder,private fb:FormBuilder) { 

    this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,  
    });  

  }


  productForm: FormGroup;  

  genform(){
    //this.picresizbase64Array = this.formBuilder.array([]);
    this.ionicForm = this.formBuilder.group({
      writeat: [""],
      prefix_name: ["", [Validators.required]],
      name: ["", [Validators.required]],
      surname: ["", [Validators.required]],
      companyname: [""],
      add_no: [""],
      add_road: [""],
      add_province: [""],
      add_amphur:[""],
      add_tombon: [""],
      companyId: [""],
      companyEmployee: [""],
      companyTel: [""],
      companyFax: [""],
      companyEmail: [""],
      companyBranch: this.formBuilder.array([]) ,  
      //picresizbase64List: this.picresizbase64Array,

    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  ngOnInit() {
    this.genform();
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

  //https://www.javatpoint.com/dynamically-add-and-remove-fields-in-angular  
  companyBranchs() : FormArray {  
    return this.ionicForm.get("companyBranch") as FormArray  
  }  

  newCompanyBranch(): FormGroup {  
    return this.formBuilder.group({  
      nameBranch: '',  
      Branch: '',  
    })  
  }  

  addcompanyBranch(){
    
    this.companyBranchs().push(this.newCompanyBranch());  
    
  }



  submitForm() {
    console.log(this.ionicForm.value);
  }


  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
      price: '',  
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  

  onSubmit() {  
    console.log(this.productForm.value);  
  }  
}
