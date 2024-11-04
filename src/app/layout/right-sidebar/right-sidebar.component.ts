import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {
  events = [
    { date: '18', month: 'March', title: 'Social Media', location: 'ICET Institute', link: '#' },
    { date: '22', month: 'April', title: 'Mobile Marketing', location: 'Panadura Town Hall', link: '#' }
  ];

  adImageUrl = 'img/advertise.jpeg';

  onlineUsers = [
    { name: 'Dileepa Herath', imgUrl: 'img/online-user.png' },
    { name: 'Sineth Kavinda', imgUrl: 'img/sineth.jpg' },
    { name: 'Nethma Chathuranga', imgUrl: 'img/nethma.jpg' }
  ];
}
