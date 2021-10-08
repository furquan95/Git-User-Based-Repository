import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  currentPage: number = 1;
  previousPage:number = 1;
  itemsPerPage: number = 5;
  pageSize: number = 10;
  pageData: any;
  totalPages: number = 5;
  isLoadingUserDetails: boolean = true;
  isLoadingRepoLists: boolean = true;
  userDetail:any = {
    avatar_url:'',
    name:'',
    fullname:'',
    bio:'',
    html_url:'',
    twitter_username:'',
    location:''
  }
  

  constructor(private serve: MyserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {

      this.loadData(this.currentPage)
      this.loadUserDetails() 
  }

  loadUserDetails(){
    this.isLoadingUserDetails = true;
    this.serve.setLoaderStatus(true)
    this.serve.userGitDetails().subscribe(
      res => {
        console.log(res)
        this.isLoadingUserDetails = false;
        let response: any = res;
        this.userDetail = response;
        this.totalPages = Math.floor(response.public_repos/10)
      });
  }

  loadPage(page: number) {
    this.serve.setLoaderStatus(true)
    console.log(page)
    console.log(this.currentPage)
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData(page);
    }
  }

  loadData(page:number) {
    this.isLoadingRepoLists = true;
    this.serve.getRepos(page,'ac').subscribe(
      res => {
        console.log(res)
        this.isLoadingRepoLists = false;
        let response: any = res;
        this.pageData = response;

      });
  }


}
