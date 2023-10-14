import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
userList:User[]=[]

constructor(private userService:UserService,private router:Router){}

  ngOnInit(): void {
    this.userService.getAll_user().subscribe(res=>
      {
        console.log(res)
        res.forEach(data=>
          {
            console.log(data);
            this.userList.push(data);
          })
      })  
  }

  // updateUser(id:number)
  // {
  //   alert(id + "User will update..")
  //   this.router.navigate(['update-user' ,id])
  // }

  deleteUser(id:number)
  {
    alert("User wil be delete")
    this.userService.deleteUser(id).subscribe(res=>
      {
        alert(id + " User Deleted Successfully.. ")
      })
  }

GetAdmin()
{
  this.router.navigate(['admin-home'])
}

}
