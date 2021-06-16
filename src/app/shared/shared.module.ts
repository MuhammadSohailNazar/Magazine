import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SocialComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HeaderComponent, FooterComponent, CommonModule, FormsModule],
})
export class SharedModule {}
