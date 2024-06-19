import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OurDoctorsComponent } from './pages/our-doctors/our-doctors.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { AppointmentPageComponent } from './pages/appointment/appointment.component';
import { BlogPostsPageComponent } from './pages/blog-posts/blog-posts.component';
import { BlogDetailPageComponent } from './pages/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'our-doctors', component: OurDoctorsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'appointment', component: AppointmentPageComponent },
  { path: 'blog', component: BlogPostsPageComponent },
  { path: 'post-details', component: BlogDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
