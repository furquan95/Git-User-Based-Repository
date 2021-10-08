import { Component, OnInit, NgZone } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  showLoader:boolean=false;

  constructor(private serve:MyserviceService,private ngZone: NgZone ) {

   }

  ngOnInit(): void {

    this.serve.isLoading.subscribe(currentStatus=>{
      this.ngZone.run( () => {
        this.showLoader = currentStatus;
        console.log(currentStatus)
      });
      
   });
  }

}
