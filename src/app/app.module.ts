import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  { path: '', component: InventarioComponent},
  { path: 'inventario', component: InventarioComponent},
  { path: 'add', component: AddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
