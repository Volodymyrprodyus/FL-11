import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newsline',
  templateUrl: './newsline.component.html',
  styleUrls: ['./newsline.component.css'],
  
})

export class NewslineComponent implements OnInit {
  @Input('selectCategory') category: string;
  searchCategory = '';
  
  myArr = [];

 constructor(private router: ActivatedRoute, private data: DataService) {
  }

  ngOnInit() { 
 
  this.myArr = this.data.getAll();

  } 
}


