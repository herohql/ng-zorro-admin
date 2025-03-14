import { Component, OnInit } from '@angular/core';
import{yuan,phoneFormat} from '@/utils'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `p{}`
  ]
})
export class HomeComponent implements OnInit {

  money = yuan(200,2)
  tel = phoneFormat('13191827262')
  constructor() { }

  ngOnInit(): void {
   
  }

}
