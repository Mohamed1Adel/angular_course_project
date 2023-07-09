import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path:'',redirectTo:'/Home' ,  pathMatch:'full'}, //Default path
  { path: "Home", component: HomeComponent },
  { path: "Products", component: ProductListComponent },
      { path: "Products/:pid", component: ProductDetailsComponent },
  {path:"product/Add",component:AddProductComponent },
  { path: "Order", component: OrderMasterComponent ,canActivate:[AuthGuard]},
  ]},

  { path: 'Login', component: UserLoginComponent },
  { path: 'Register', component: UserRegisterComponent },
  {path:'Logout' ,  component: UserLoginComponent },
  // { path: "Home", component: HomeComponent },
  { path: '**' , component:NotFoundComponent} // wild card path
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
