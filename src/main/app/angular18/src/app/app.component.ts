import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular18-app';

  listss = ['ram','reddy'];
  list = []
  wind:any

  ngOnInit(): void {
      this.wind=this.getLandPage();
  }

  getLandPage(){
    console.log(window);
    return window;
    // return window['spaAppProperties']? window['spaAppProperties']['getLandPage'] : null;
  }

  url = 'http://localhost:8080/employees';

  employeesList: any;

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe(data => {
      this.employeesList = data;
    });
    console.log('AppComponent constructor');
  }
 
}