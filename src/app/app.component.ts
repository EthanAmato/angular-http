import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {OnInit} from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-http';

  users:any;
  baseUrl: string = "https://api.github.com/users";
  isLoading:boolean = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.isLoading= true;
    this.http.get(this.baseUrl).subscribe(res => {
      console.log('success');
      console.log(res)
      setTimeout(()=>{
        this.isLoading= false;
        this.users = res;

      }, 3000)

    }, error => {
      console.log('error')
      console.log(error)
    }, () => {
      console.log('completed')

    })
  }

  goToGithub(url:string){
    window.open(url,"_blank");
  }



}
