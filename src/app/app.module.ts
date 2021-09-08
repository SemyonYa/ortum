import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { CallMeComponent } from './components/call-me/call-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutInfoComponent } from './pages/about-info/about-info.component';
import { AboutGaleryComponent } from './pages/about-galery/about-galery.component';
import { AboutPersonalComponent } from './pages/about-personal/about-personal.component';
import { AboutLicenseComponent } from './pages/about-license/about-license.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { ServicesPriceComponent } from './pages/services-price/services-price.component';
import { ServicesProgramsComponent } from './pages/services-programs/services-programs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutPositionsComponent } from './pages/about-positions/about-positions.component';
import { ComponentsModule } from 'src/components/components.module';
import { ArticlesBriefComponent } from './pages/articles/articles-brief/articles-brief.component';
import { ArticleComponent } from './pages/article/article.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    MenuComponent,
    CallMeComponent,
    FooterComponent,

    AboutComponent,
    AboutGaleryComponent,
    AboutInfoComponent,
    AboutLicenseComponent,
    AboutPersonalComponent,
    AboutPositionsComponent,
    ArticlesComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent,
    ServicesListComponent,
    ServicesPriceComponent,
    ServicesProgramsComponent,
    ArticlesBriefComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
