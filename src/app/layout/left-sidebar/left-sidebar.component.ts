import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  impLinks = [
    { url: '#', icon: 'bi bi-newspaper', label: 'Latest News' },
    { url: '#', icon: 'bi bi-people-fill', label: 'Friends' },
    { url: '#', icon: 'bi bi-chat-heart-fill', label: 'Group' },
    { url: '#', icon: 'bi bi-shop', label: 'Marketplace' },
    { url: '#', icon: 'bi bi-play-btn-fill', label: 'Watch' },
  ];

  shortcutLinks = [
    { url: '#', imgUrl: 'path/to/image1.png', label: 'Web Developers' },
    { url: '#', imgUrl: 'path/to/image2.png', label: 'Web Design Course' },
    { url: '#', imgUrl: 'path/to/image3.png', label: 'Full Stack Development' },
    { url: '#', imgUrl: 'path/to/image4.png', label: 'Website Experts' }
  ];

}
