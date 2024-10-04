import { Routes } from '@angular/router';
import { HomeComponent } from './design/home/home.component';

/*--------------------------------------------------------*/
import { WishlistComponent } from './design/wishlist/wishlist.component';
import { NewsComponent } from './design/news/news.component';
import { NewsGridComponent } from './design/news-grid/news-grid.component';
/*--------------------------------------------------------*/
import { AboutComponent } from './pages/about/about.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
/*--------------------------------------------------------*/
import { ShopCartComponent } from './shop/shop-cart/shop-cart.component';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
/*--------------------------------------------------------*/

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  /*--------------------------------------------------------*/
  { path: 'wish-list', component: WishlistComponent },
  { path: 'news', component:NewsComponent},
  { path: 'news-grid', component:NewsGridComponent},
  /*--------------------------------------------------------*/
  /*--------------------------pages-------------------------*/
  { path: 'about-us', component: AboutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'error-page', component: ErrorpageComponent },
  /*--------------------------------------------------------*/
  /*--------------------------shop--------------------------*/
  { path: 'shop-cart', component: ShopCartComponent },
  { path: 'shop-details', component: ShopDetailsComponent },
  { path: 'shop-home', component: ShopHomeComponent },
  { path: 'shop-list', component: ShopListComponent },
  /*--------------------------------------------------------*/
  
  /*--------------------------------------------------------*/
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
