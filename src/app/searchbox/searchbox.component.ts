import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  userName:string ='';

  constructor(private router:Router, private activeRoute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
  }

  goToUser(){
    window.location.href="/repo/"+this.userName;
  }
  

}
