import { Routes } from '@angular/router';
import { ShopListComponent } from './design/shop-list/shop-list.component';
import { WishlistComponent } from './design/wishlist/wishlist.component';
import { HomeComponent } from './design/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop-list', component: ShopListComponent },
  { path: 'wish-list', component: WishlistComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'error-page', component: ErrorpageComponent },
  { path: 'contact', component: ContactComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
