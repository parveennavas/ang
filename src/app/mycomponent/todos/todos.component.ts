import { Component } from '@angular/core';
import{todo} from  "../../todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
   
  todos!: todo[];
  constructor(){
   this.todos =[
      {
        sno:1,
        title:"title1",
        desc:"description1",
        active:true 
      },
      {
        sno:2,
        title:"title2",
        desc:"description2",
        active:true 
      },
      {
        sno:3,
        title:"title3",
        desc:"description3",
        active:true 
      }
    ]
  }
}
