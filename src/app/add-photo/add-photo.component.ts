import {Component, OnInit, ViewChild} from '@angular/core';
import {UploadPhootService} from '../services/upload-phoot.service';
import {GlobalVariable} from '../global';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  // fileNotUploaded = true;
  url = GlobalVariable.FLASK_API_URL + '/upload_photo';

  constructor() {
  }

  uploadPhoto(fileInput) {
    fileInput.click();
  }

  // @ViewChild('fileInput') fileInput;
  //
  // changeFileStatus() {
  //   let fi = this.fileInput.nativeElement;
  //   if (fi.files && fi.files[0]) {
  //     this.fileNotUploaded = false;
  //     return;
  //   }
  //   this.fileNotUploaded = true;
  // }
  //
  // saveFile(): void {
  //   console.log('clicked');
  //   let fi = this.fileInput.nativeElement;
  //   if (fi.files && fi.files[0]) {
  //     let fileToUpload = fi.files[0];
  //
  //     console.log(fileToUpload);
  //     this.uploadPhotoService.upload(fileToUpload)
  //       .subscribe(response => {
  //         console.log(response);
  //       });
  //   }
  // }

  ngOnInit() {
  }

}
