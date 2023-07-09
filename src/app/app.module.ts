import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { StaticProductsService } from './Services/static-products.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/order-master/order-master.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDPipe } from './Pipes/usd.pipe';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { PapaPipe } from './Pipes/papa.pipe';

// import { AppRoutingModule } from './Services/app-routing.module';
// import { BuymaneComponent } from './components/buymane/buymane.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDPipe,
    OrderMasterComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    UserLoginComponent,
    AddProductComponent,
    UserRegisterComponent,
    PapaPipe,
    // BuymaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // StaticProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
