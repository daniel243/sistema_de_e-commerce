import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/content/about/about.component';
import { ConfirmRecoveryPasswordComponent } from './views/content/confirm-recovery-password/confirm-recovery-password.component';
import { ExchangesComponent } from './views/content/exchanges/exchanges.component';
import { LoginComponent } from './views/content/login/login.component';
import { PrivacyComponent } from './views/content/privacy/privacy.component';
import { RecoveryPasswordComponent } from './views/content/recovery-password/recovery-password.component';
import { TermsComponent } from './views/content/terms/terms.component';
import { HomeComponent } from './views/home/home.component';
import { NewPasswordComponent } from './views/content/new-password/new-password.component';
import { ConfirmNewPasswordComponent } from './views/content/confirm-new-password/confirm-new-password.component';
import { ContactComponent } from './views/content/contact/contact.component';
import { ConfirmContactComponent } from './views/content/confirm-contact/confirm-contact.component';
import { ShoppingCartComponent } from './views/content/shopping-cart/shopping-cart.component';
import { CloseShoppingComponent } from './views/content/close-shopping/close-shopping.component';
import { CloseAddressComponent } from './views/content/close-address/close-address.component';
import { ClosePaymentComponent } from './views/content/close-payment/close-payment.component';
import { FinishOrderComponent } from './views/content/finish-order/finish-order.component';
import { ClientComponent } from './views/content/client/client.component';
import { DataClientComponent } from './views/content/data-client/data-client.component';
import { ClientContactsComponent } from './views/content/client-contacts/client-contacts.component';
import { ClientAddressComponent } from './views/content/client-address/client-address.component';
import { ClientOrdersComponent } from './views/content/client-orders/client-orders.component';
import { ClientFavoritesComponent } from './views/content/client-favorites/client-favorites.component';
import { ClientChangePasswordComponent } from './views/content/client-change-password/client-change-password.component';
import { ProductComponent } from './views/content/product/product.component';
import { RegisterProductComponent } from './views/content/register-product/register-product.component';
import { RegisterUserComponent } from './views/content/register-user/register-user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'exchanges', component: ExchangesComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'login/recoveryPassword', component: RecoveryPasswordComponent},
  {path: 'confirmRecoveryPassword', component: ConfirmRecoveryPasswordComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newPassword', component: NewPasswordComponent},
  {path: 'confirmNewPassword', component: ConfirmNewPasswordComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'confirmContact', component: ConfirmContactComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent},
  {path: 'closeShopping', component: CloseShoppingComponent},
  {path: 'closeAddress', component: CloseAddressComponent},
  {path: 'closePayment', component: ClosePaymentComponent},
  {path: 'finishOrder', component: FinishOrderComponent},
  {path: 'client', component: ClientComponent},
  {path: 'dataClient', component: DataClientComponent},
  {path: 'clientContacts', component: ClientContactsComponent},
  {path: 'clientAddress', component: ClientAddressComponent},
  {path: 'clientOrders', component: ClientOrdersComponent},
  {path: 'clientFavorites', component: ClientFavoritesComponent},
  {path: 'clientChangePassword', component: ClientChangePasswordComponent},
  {path: 'product', component: ProductComponent},
  {path: 'registerUser', component: RegisterUserComponent},
  {path: 'registerProduct', component: RegisterProductComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
