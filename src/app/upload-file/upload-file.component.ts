import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  fileName = '';

  constructor() { }

  ngOnInit(): void {

  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {
      
        this.fileName = file.name;
        
        const formData = new FormData();

        formData.append("/", file);

        if(window.caches){
          caches.open('prueba-2').then(
            cache => {
              cache.add(event.target.files[0].webkitRelativePath+"/"+file.name);
            }
          );
        }
    }
}

}
