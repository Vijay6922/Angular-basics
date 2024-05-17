import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  ctitle="in parent";

  parent1array=[1,2,3,4,5,6,7,8];
  parrent1sentence="this is 1st sentence";

  parent2array=[1,24224,3,44224422,5,642224,7,8];
  parrent2sentence="this is 2st sentence";

  data="";

  @ViewChild("test") d

  change()
  {
    console.log(this.d);
    // this.d.nativeElement.style.background="blue"
    this.d.nativeElement.innerText="hiii"
  }
}
