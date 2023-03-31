import { Component, OnInit } from '@angular/core';
import { ErwService } from '../sv/erw.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-erwtest',
  templateUrl: './erwtest.page.html',
  styleUrls: ['./erwtest.page.scss'],
})
export class ErwtestPage implements OnInit {
  selectedFiles: FileList;
	currentFile: File | any = null;
  msg :any;
  constructor(public erwsv: ErwService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  upload() {
    this.currentFile = this.selectedFiles.item(0);
    console.log(this.currentFile);
    this.erwsv.cruderw(this.currentFile).subscribe(response => {
		//this.selectedFiles.value = '';
     if (response instanceof HttpResponse) {
		 this.msg = response.body;
        console.log(response.body);
      }	  
    });    
  }

}
