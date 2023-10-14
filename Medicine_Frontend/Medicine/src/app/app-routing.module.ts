import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MediHomeComponent } from './medi-home/medi-home.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { HeaderComponent } from './header/header.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path: " ",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:" ", component:HeaderComponent},
  {path:"admin-home",component:AdminHomeComponent},
  {path:"admin-home/medicineList", component:MediHomeComponent},
  {path:"medi-home",component:MediHomeComponent},
  {path:"admin-home/medicineList/create-medicine" ,component:CreateMedicineComponent},
  {path:"admin-home/medicineList/delete",component:MediHomeComponent},
  {path:"admin-home/medicineList/update-medicine/:id" ,component:UpdateMedicineComponent},
  {path:"update-medicine/:id",component:UpdateMedicineComponent},
  {path:"user-login",component:UserLoginComponent},
  {path:"user-login/user-register",component:UserRegisterComponent},
  {path:"admin-page/userList",component:UserHomeComponent},
  {path:"user-home",component:UserHomeComponent},
  {path:"admin-home/userList",component:UserHomeComponent},
  {path:"admin-home/userList/delete",component:UserHomeComponent},
  {path:"user-page/getCartData",component:UserPageComponent},
  {path:"user-page/:id",component:UserPageComponent},
  {path:"cart/:uid",component:CartItemComponent},
  {path:"user-page",component:UserPageComponent},
  {path:"cart-item/:id" ,component:CartItemComponent},
  {path:"payment/:total",component:PaymentComponent},
  {path:"user-page/cart/:id",component:CartItemComponent}
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
