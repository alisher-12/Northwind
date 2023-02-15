import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { SearchComponent } from './components/home-area/search/search.component';
import { FormsModule } from '@angular/forms';
import { DessertsComponent } from './components/home-area/desserts/desserts.component';
import { FacebookComponent } from './components/home-area/facebook/facebook.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        SearchComponent,
        DessertsComponent,
        FacebookComponent,
        ProductListComponent,
        AboutComponent,
        PageNotFoundComponent,
        ProductCardComponent,
        ProductDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [LayoutComponent] // First component in index.html
})
export class AppModule { }
