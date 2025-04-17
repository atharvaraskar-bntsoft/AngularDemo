import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent {

  fruits : string[] = ['apple','banana','peru','sitafal']
 
  isTrue= true

  userNameParentVarible:string="raj patil"
  password="123456"
  phone="911002090"
  team="rcb"
  iplTeam=""

  message:string=""

  getMsgFromChild(msg:string){
    this.message=msg
  }

  getTeamFromChild(iplteam:string){
       this.iplTeam=iplteam
  }
}
