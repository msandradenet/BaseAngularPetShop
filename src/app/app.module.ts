import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { FramePageComponent } from './pages/master/fram.page';
import { ProductCartComponent } from './components/store/product-cart/product-cart.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directives';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';

@NgModule({
  declarations: [
    MaskDirective,
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCartComponent,
    LoadingComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  
    HttpClientModule,      
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
