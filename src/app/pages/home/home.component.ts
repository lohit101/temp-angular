import { Component } from '@angular/core';
import { UcfirstPipe } from '../../pipes/ucfirst.pipe';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UcfirstPipe,
    HeaderComponent,
    HeroComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public activePage!: string

  constructor() {
    this.activePage = 'home'
  }
}
