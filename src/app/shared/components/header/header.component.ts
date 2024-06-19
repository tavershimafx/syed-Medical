import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent {
  
  @ViewChild("mobileNav", { static: false }) mobileNav!: ElementRef

  constructor(){

  }

  shownNav(){
    if(this.mobileNav.nativeElement.classList.contains("slide-down")){
      this.mobileNav.nativeElement.classList.remove("slide-down")
      this.mobileNav.nativeElement.classList.add("slide-up")

      // let the animation play then remove it.
      // animation has been set for slide-in and up to 0.8s
      setTimeout(() => {
        this.mobileNav.nativeElement.classList.remove("slide-up")
      }, 8000);
    }else{
      this.mobileNav.nativeElement.classList.remove("slide-up")
      this.mobileNav.nativeElement.classList.add("slide-down")
    }
  }
}
