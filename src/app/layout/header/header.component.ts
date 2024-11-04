import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  settingsMenuVisible = false;

toggleDarkMode() {
throw new Error('Method not implemented.');
}
settingsMenuToggle() {
  this.settingsMenuVisible = !this.settingsMenuVisible;
}

}
