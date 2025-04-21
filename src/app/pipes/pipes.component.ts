import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent {
  today :Date=new Date();
  number =1234

  name1:string='atharva'

  person ={
    name:"Gaurav",
    age:22

  }

  word="atharva is amazing"

  gender=''

  genderMap={
    'male':'Invite Him',
    'female':'Invite her',
    'them':'Invite them',

  }


  changeGender(gender:string) {
   this.gender=gender;
  }

  


}
