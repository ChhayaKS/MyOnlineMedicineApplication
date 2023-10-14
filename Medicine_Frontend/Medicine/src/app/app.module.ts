import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediHomeComponent } from './medi-home/medi-home.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MediHomeComponent,
    CreateMedicineComponent,
    HomeComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    MediHomeComponent,
    CreateMedicineComponent,
    UpdateMedicineComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserHomeComponent,
    UserPageComponent,
    CartItemComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
