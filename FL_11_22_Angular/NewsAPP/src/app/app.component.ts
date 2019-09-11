import { Component,  Input, } from '@angular/core';
import { DataService } from './data.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

todos: AngularFireList<any>;
keysTodos = [];
countTodos: number = 0;
todo: any;

itemValue = '';
items: Observable<any[]>;

// private name: string;
constructor(private data: DataService, public db: AngularFireDatabase) { 
  this.items = db.list('items').valueChanges();
}
ngOnInit(): void {
  this.myArr = this.data.getAll();
  this.todos = this.db.list('/todos', ref =>
  ref.limitToFirst(11));
  this.todos.snapshotChanges().subscribe(tmp => {
  this.keysTodos = tmp;
  this.countTodos = tmp.length;
})
}

onChange(newValue) {
  this.selectedCategory = newValue;
  
}

onSubmit() {
  this.db.list('items').push({ content: this.itemValue});
  this.itemValue = '';
}

getToDoById(todoId: string) {
  let tmp = "/todos/" + todoId; //'-LhbUBQeoTRt1lgHKwDq'
  this.todo = this.db.list(tmp)
  .snapshotChanges()
  .pipe(map(items => {
  return items.map(a => {
  const data = a.payload.val();
  const key = a.payload.key;
  console.log({ key, data });
  return { key, data };
  });
  }));
}

addTodo(value: string): void {
  this.todos.push({ content: value, done: false });
  }
  deleteTodo(id: string): void {
  let tmp = "/todos/" + id;
  this.db.object(tmp).remove();
  }
}
