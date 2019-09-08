import { Component,  Input, } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})

export class AppComponent {
selectedCategory:string = "No Source selected";
category:string = '';
searchCategory = '';

myArr = [];

// private name: string;
constructor(private data: DataService) { }
ngOnInit(): void {
  this.myArr = this.data.getAll();
  // this.myArr = this.data.getByCategory();
}

onChange(newValue) {
  this.selectedCategory = newValue;
  
}
}
