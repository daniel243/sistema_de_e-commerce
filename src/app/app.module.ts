import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { AboutComponent } from './views/content/about/about.component';
import { TermsComponent } from './views/content/terms/terms.component';
import { ExchangesComponent } from './views/content/exchanges/exchanges.component';
import { PrivacyComponent } from './views/content/privacy/privacy.component';
import { RecoveryPasswordComponent } from './views/content/recovery-password/recovery-password.component';
import { ConfirmRecoveryPasswordComponent } from './views/content/confirm-recovery-password/confirm-recovery-password.component';
import { LoginComponent } from './views/content/login/login.component';
import { NewPasswordComponent } from './views/content/new-password/new-password.component';
import { ConfirmNewPasswordComponent } from './views/content/confirm-new-password/confirm-new-password.component';
import { ContactComponent } from './views/content/contact/contact.component';
import { ConfirmContactComponent } from './views/content/confirm-contact/confirm-contact.component';
import { CarouselServiceComponent } from './views/content/carousel-service/carousel-service.component';
import { ShoppingCartComponent } from './views/content/shopping-cart/shopping-cart.component';
import { CloseShoppingComponent } from './views/content/close-shopping/close-shopping.component';
import { CloseAddressComponent } from './views/content/close-address/close-address.component';
import { ClosePaymentComponent } from './views/content/close-payment/close-payment.component';
import { FinishOrderComponent } from './views/content/finish-order/finish-order.component';
import { ClientComponent } from './views/content/client/client.component';
import { DataClientComponent } from './views/content/data-client/data-client.component';
import { MenuClientComponent } from './views/content/menu-client/menu-client.component';
import { ClientContactsComponent } from './views/content/client-contacts/client-contacts.component';
import { ClientAddressComponent } from './views/content/client-address/client-address.component';
import { ClientOrdersComponent } from './views/content/client-orders/client-orders.component';
import { ClientFavoritesComponent } from './views/content/client-favorites/client-favorites.component';
import { ClientChangePasswordComponent } from './views/content/client-change-password/client-change-password.component';
import { ProductComponent } from './views/content/product/product.component';
import { RegisterUserComponent } from './views/content/register-user/register-user.component';
import { RegisterProductComponent } from './views/content/register-product/register-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    TermsComponent,
    ExchangesComponent,
    PrivacyComponent,
    RecoveryPasswordComponent,
    ConfirmRecoveryPasswordComponent,
    LoginComponent,
    NewPasswordComponent,
    ConfirmNewPasswordComponent,
    ContactComponent,
    ConfirmContactComponent,
    CarouselServiceComponent,
    ShoppingCartComponent,
    CloseShoppingComponent,
    CloseAddressComponent,
    ClosePaymentComponent,
    FinishOrderComponent,
    ClientComponent,
    DataClientComponent,
    MenuClientComponent,
    ClientContactsComponent,
    ClientAddressComponent,
    ClientOrdersComponent,
    ClientFavoritesComponent,
    ClientChangePasswordComponent,
    ProductComponent,
    RegisterUserComponent,
    RegisterProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
