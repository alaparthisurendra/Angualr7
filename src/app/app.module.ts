import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SearchComponent } from './components/shared/header/search.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { StringInterpolationComponent } from './components/concepts/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/concepts/property-binding/property-binding.component';
import { EventBindingComponent } from './components/concepts/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/concepts/two-way-binding/two-way-binding.component';
import { CpbComponent } from './components/concepts/cpb/cpb.component';
import { CebComponent } from './components/concepts/ceb/ceb.component';
import { ColorizerDirective } from './Directive/colorizer.directive';
import { SdComponent } from './components/concepts/sd/sd.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent,
    GetInTouchComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    SdComponent,
    AddContactComponent,
    ContactDetailsComponent,
    EllipsisPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]// step 3: every module is bootstraped witha component i.e AppComponent
})
export class AppModule { }
