import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
   employeeDesig:String ="dummy"
   employeeSalary:Number = 10000
   employeeLocation : String= "Kakkanad" 

   
   employeeName:String ="Sean" 
   employeeDes: String = "Software Engineer";
   employeeImage:String = "https://tse3.mm.bing.net/th?id=OIP.Y8Tmo8WRsv2fL8Fmj2FgXQHaFE&pid=Api&P=0&h=180"
   
   userAdd(data:any){
    this.employeeName = data.value;
    alert(data.value);
   }
   formSubmit(){
   console.log(this.employeeDesig,this.employeeSalary,this.employeeLocation);
   
   }
  //  formSubmit(data:any, data2:any , data3:any){

  //    alert(`${data.value ,data2.value , data3.value}`)
  //  }
  //  getUserName(data:any){
  //   alert(data.target.value)
  //  }
}
