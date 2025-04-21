import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {

    @Input() nameChildVariable: string=''
    @Input() mail : string=''
    @Input() phoneno:string=''

   
 @Input() nameChildVarible :string=''
 @Input() password :string=''
 @Input() phone:string=''

 @Input() team:string=''

 @Output() msg=new EventEmitter<string>()

 @Output() teamname=new EventEmitter<string>()

 sendMessage(){
  this.msg.emit("hello from Vijaya")
 }

 sendTeam(){
  this.teamname.emit(this.team.toUpperCase())
 }


}
