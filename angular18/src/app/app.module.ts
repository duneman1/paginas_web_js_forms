import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { ContactsModule } from './contacts/contacts.module';
import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ArticuloComponent } from './articulo/articulo.component';


// the second parameter 'fr' is optional 
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArticuloComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    ContactsModule,
    HomeModule,
    TareasModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
