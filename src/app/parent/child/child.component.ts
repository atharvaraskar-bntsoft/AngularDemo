<<<<<<< HEAD
import { Component, Input } from '@angular/core';
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
>>>>>>> a4d6f79 (added @output tag emiiterlogic and ngclass to the code)

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
<<<<<<< HEAD

    @Input() nameChildVariable: string=''
    @Input() mail : string=''
    @Input() phoneno:string=''
=======
   
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

>>>>>>> a4d6f79 (added @output tag emiiterlogic and ngclass to the code)
}
