import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-session',
  templateUrl: './binding-session.component.html',
  styleUrls: ['./binding-session.component.sass']
})
export class BindingSessionComponent {
   msg='used for increase value'
  isdisabled= false
  count=0

  employename=''

  increasevalue(){
         this.count++;
         this.isdisabled=false;
  }
}
