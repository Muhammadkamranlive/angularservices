import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "src/app/Models/User";
import { UserService } from "src/app/Services/user.service";
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  formvalue!: FormGroup;
  userModel: User = new User();
  users: any = [];
  showUpdatebutton:boolean=false;
  showAddbutton:boolean=true;
  errorMessage: string | undefined = undefined;
  constructor(private formBuilder: FormBuilder, private service: UserService) {}
  getData() {
    this.service.getAll().subscribe(
      (response) => {
        this.users = response;
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }
  ngOnInit(): void {
    this.getData();
    this.formvalue = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      mobile: [""],
    });
  }

  addUser() {
    this.userModel.firstName = this.formvalue.value.firstName;
    this.userModel.lastName = this.formvalue.value.lastName;
    this.userModel.email = this.formvalue.value.email;
    this.userModel.mobile = this.formvalue.value.mobile;
    this.service.create(this.userModel).subscribe(
      (response) => {
        this.formvalue.reset();
        this.getData();
        alert("Your Data is added successfully");
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }

  deleteUser(id: number) {
    this.service.delete(id).subscribe(
      (response) => {
        this.getData();
        alert("User Deleted Successfully");
      },
      (err) => {
        this.errorMessage = err.message;
      }
    );
  }
  onEdit(user:any){
    this.showUpdatebutton=true;
    this.showAddbutton=false;
    this.formvalue.controls['firstName'].setValue(user.firstName);
    this.formvalue.controls['lastName'].setValue(user.lastName);
    this.formvalue.controls['email'].setValue(user.email);
    this.formvalue.controls['mobile'].setValue(user.mobile);
  
  }

  updateUser(){
    this.userModel.firstName = this.formvalue.value.firstName;
    this.userModel.lastName = this.formvalue.value.lastName;
    this.userModel.email = this.formvalue.value.email;
    this.userModel.mobile = this.formvalue.value.mobile;
    this.service.update(this.userModel,this.userModel.id).subscribe((response)=>{
    this.getData();
    alert ("User Details Updated Successfully")
    },
    (err)=>{
      this.errorMessage=err.message
    }
    )
  }
 
}
