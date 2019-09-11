import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { NewslineComponent } from './newsline/newsline.component';
import { SearchPipe } from './search.pipe';
import { ShadowDirective } from './shadow.directive';
import { NewsDetailComponent } from './news-detail/news-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AddarticleComponent,
    NewslineComponent,
    SearchPipe,
    ShadowDirective,
    NewsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
