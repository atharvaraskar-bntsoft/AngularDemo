import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent {

  fruits: string[] = ['Apple', 'Banana', 'Sitafal', 'Chiku'];
 
  isTrue=true;
  userNameParentVariable :string="Atharva Raskar"
  mail:string= "atharva18@gamil.com"
  phoneno:string="93939939202"


}
