import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import {RecommendJobPost} from 'src/app/_models/candidate/recommendJobPost';
import { ToastService } from 'src/app/_services/toast-service.service';
import {SearchJobtypeService} from 'src/app/_services/employer/search-jobtype.service';
@Component({
  selector: 'app-alljoblist',
  templateUrl: './alljoblist.component.html',
  styleUrls: ['./alljoblist.component.scss']
})
export class AlljoblistComponent implements OnInit {
  jobtype: '';
  allJobPost: Observable<JobPostSummary[]>;
  savedJobPost: JobPostSummary;
  isSave= false; 
  websitename = 'vnJobs';
  recommendJobPost: Observable<JobPostSummary[]>;
  public pageNo: number = 0;
  public pages: Array<number>;
    //re
    public pageNore: number = 0;
    public pagesre: Array<number>;
  constructor(
    private allJoblistService: AllJoblistService,
    private searchJobtypeService: SearchJobtypeService,
    private router: Router,
    public toastService: ToastService
  ) { }

  // toggle(){
  //  this.isSave=true;
  // }

  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.gettAllJobList();
  }
  //re
  setPagere(i, event: any) {
    event.preventDefault();
    this.pageNore = i;
    this.getRecommendJobPost();
  }

  ngOnInit(): void {
    this.savedJobPost = new JobPostSummary();
    this.getSaveJobPost();
    this.gettAllJobList();
    this.getRecommendJobPost();
    
  }
  isRecommendJobPostEmpty(): boolean {
    let recommendkeys = Object.keys(this.recommendJobPost);
    if (recommendkeys.length) { return false; }
    else return true;
  }
  getRecommendJobPost() {
    this.allJoblistService.getRecommendJobPost(this.pageNore).subscribe(
      data => {
        console.log(data);
        this.recommendJobPost = data['content'];
        this.pagesre = new Array(data['totalPages']);
       
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  isAllJobPostEmpty(): boolean {
    let keys = Object.keys(this.allJobPost);
    if (keys.length) { return false; }
    else return true;
  }
  searchJobType() {
    this.searchJobtypeService.searchJobByJobType(this.jobtype)
      .subscribe(
        data => {
          console.log(data);
          this.allJobPost = data['content'];
          this.pages = new Array(data['totalPages'])
        
        },
        error => {
          console.log(error);
        });
  }
  getSaveJobPost() {
    this.allJoblistService.getSaveJobPost(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.savedJobPost = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  gettAllJobList() {
    this.allJoblistService.gettAllJobList(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.allJobPost = data['content'];
        this.pages = new Array(data['totalPages']);
        this.router.navigate(['/candidate/alljoblists'], { queryParams:  { name:  this.websitename, page: this.pageNo +1 } });
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  saveJobPost(id: number, dangerTpl, successTpl) {
    this.allJoblistService.saveJobPost(id)
      .subscribe(
        data => {
          console.log(data);
          //  this.isSave= true;
          this.gettAllJobList();
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        },
        error => {
          console.log(error);
          //  this.isSave=false;
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-', delay: 6000 });
        }
      );

  }

  deleteSaveJobPost(id: number, dangerTpl, successTpl) {
    this.allJoblistService.deleteSaveJobPost(id)
      .subscribe(
        data => {
          console.log(data);
          this.gettAllJobList();
          // this.isSave=false;
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5', delay: 6000 });
        },
        error => {
          console.log(error);
          // this.isSave=true;
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        }
      );

  }
  jobPostDetail(id: number) {
    this.router.navigate(['candidate/jobpost-detail', id]);
  }

}
