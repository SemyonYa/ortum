import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutGaleryComponent } from './pages/about-galery/about-galery.component';
import { AboutInfoComponent } from './pages/about-info/about-info.component';
import { AboutLicenseComponent } from './pages/about-license/about-license.component';
import { AboutPersonalComponent } from './pages/about-personal/about-personal.component';
import { AboutPositionsComponent } from './pages/about-positions/about-positions.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { ServicesPriceComponent } from './pages/services-price/services-price.component';
import { ServicesProgramsComponent } from './pages/services-programs/services-programs.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'about', component: AboutComponent, children: [
      { path: '', component: AboutInfoComponent, pathMatch: 'full' },
      { path: 'license', component: AboutLicenseComponent },
      { path: 'personal', component: AboutPersonalComponent },
      { path: 'positions', component: AboutPositionsComponent },
      { path: 'galery', component: AboutGaleryComponent }
    ]
  },
  {
    path: 'services', component: ServicesComponent, children: [
      { path: '', component: ServicesListComponent, pathMatch: 'full' },
      { path: 'price', component: ServicesPriceComponent },
      { path: 'programs', component: ServicesProgramsComponent }
    ]
  },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
