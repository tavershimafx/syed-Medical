import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shared/components/header/header.component';
import { AppFooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CareDoctorsComponent } from './shared/components/care-doctors/care-doctors.component';
import { NewsOverviewComponent } from './shared/components/news-overview/news-overview.component';
import { ContactOverviewComponent } from './shared/components/contact-overview/contact-overview.component';
import { OurDoctorsComponent } from './pages/our-doctors/our-doctors.component';
import { DoctorProfileComponent } from './shared/components/doctor-profile/doctor-profile.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { AppointmentPageComponent } from './pages/appointment/appointment.component';
import { BlogPostsPageComponent } from './pages/blog-posts/blog-posts.component';
import { RecentPostComponent } from './shared/components/recent-post/recent-post.component';
import { BlogDetailPageComponent } from './pages/blog-detail/blog-detail.component';
import { BlogCategoriesComponent } from './shared/components/blog-categories/blog-categories.component';

const components = [
  AppComponent,
  AppHeaderComponent,
  AppFooterComponent,
  CareDoctorsComponent,
  NewsOverviewComponent,
  ContactOverviewComponent,
  DoctorProfileComponent,
  TestimonialsComponent,
  RecentPostComponent,
  BlogCategoriesComponent,

  HomeComponent,
  AboutComponent,
  OurDoctorsComponent,
  ServicesComponent,
  ContactPageComponent,
  AppointmentPageComponent,
  BlogPostsPageComponent,
  BlogDetailPageComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
