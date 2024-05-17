import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 public random='wqeqe';
  x=10;
  test()
  {
return this.x;
  }

  mystyle:object={
    color:'green',
    background:'grey',
    border:'1px solid red'
  };

  cvar:string='blue';

  isapply:boolean=true;

  isactive:boolean=true;

  isdisabled:boolean=false;

  ishidden:boolean=true;

  count:number=0;
  count1:number=0;
  increment(){

    this.count=this.count+1;
  }
  increment1(){

    this.count1=this.count1+1;
  }
  decrement(){
    this.count=this.count-1;
  }

  name:string='abc';

  changeName(e:any)
  {
    this.name=e.target.value;
  }

  show=false;

  movies=['pushpa','rrr','pk','zootopia'];

  public city_name='hyderabad';

  updateCity(e:any)
  {
    this.city_name=e.target.value;
  }

  data="['vijay','kumar']";

  company=['kawasaki','yamaha','hero','bajaj','suzuki'];

  bike=[
    {
      "name":"r15",
      "comapny":"yamaha",
      "speed":150,
      "price":"1.6L",
      "milage":55
    },
    {
      "name":"r15",
      "comapny":"yamaha",
      "speed":150,
      "price":"1.6L",
      "milage":55
    },
    {
      "name":"r15",
      "comapny":"yamaha",
      "speed":150,
      "price":"1.6L",
      "milage":55
    },
    {
      "name":"r15",
      "comapny":"yamaha",
      "speed":150,
      "price":"1.6L",
      "milage":55
    },
    {
      "name":"r15",
      "comapny":"yamaha",
      "speed":150,
      "price":"1.6L",
      "milage":55
    }

  ]

  op:string="";
  num1:number=22;
  num2:number=54;

  sentence="hii guys"
  salary=650000;

  dob=new Date();

  email="";
  update(e:any)
  {
    this.email=e.target.value;
  }

  @Input() childtitle:string

  @Input() child1sentence:string

  @Input() child1array;

  @Output() c = new EventEmitter();

   m="hi";
   passToParent()
  {
    
    this.c.emit(this.m);
  }

}
