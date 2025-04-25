import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass','../first/first.component.sass']
})
export class SecondComponent {

  color='red'
  fontsize= '30px'

  isactive=true
  notactive=false

}
