import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { AboutComponent } from './components/about/about.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

{path: 'contacts', component: ContactsComponent},
{path: 'contacts/new', component: AddContactComponent, canActivate:[AuthGuard],canDeactivate:[AuthGuard]},
{path: 'contacts/:id', component: ContactDetailsComponent},
{path:'concepts', component:ConceptsComponent},
{path:'get-in-touch', component: GetInTouchComponent},
{path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
