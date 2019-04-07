import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patient-tab2',
  templateUrl: './patient-tab2.page.html',
  styleUrls: ['./patient-tab2.page.scss'],
})
export class PatientTab2Page implements OnInit {
  result: any;
  images: any[];

  constructor(
    private camera: Camera,
    private dataService: DataService
  ) { }

  ngOnInit() {
    // Get pictures.
    this.images = this.dataService.getImages();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 25,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options)
    .then((imageData) => {
      // Do a magical conversion.
      const image = 'data:image/jpeg;base64,' + imageData;
      this.dataService.describeImage(image)
      .then(res => {
        // Save the result.
        this.dataService.saveImage(image, res);
        this.images = this.dataService.getImages();
      });
    });
  }

}
