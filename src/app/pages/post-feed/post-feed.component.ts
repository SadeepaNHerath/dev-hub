import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  name: string;
  image: string;
}

interface Post {
  userName: string;
  userImage: string;
  date: Date;
  text: string;
  mentions: string[];
  hashtags: string[];
  image: string;
  likes: number;
  comments: number;
  shares: number;
}


@Component({
  selector: 'app-post-feed',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.css'
})
export class PostFeedComponent {
  onlineUsers: User[] = [];
  posts: Post[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadStories();
    this.loadPosts();
  }

  loadStories(): void {
    this.onlineUsers = [
      { name: 'Sadeepa Herath', image: 'img/online-user.png' },
      { name: 'Dileepa Herath', image: 'img/online-user.png' },
      { name: 'Akila Chathuranga', image: 'img/online-user.png' },
      { name: 'Sachira Bandara', image: 'img/online-user.png' }
    ];
  }

  loadPosts(): void {
    this.posts = [
      {
        userName: 'Sadeepa Herath',
        userImage: 'img/profile-pic.png',
        date: new Date('2024-11-02T13:40:00'),
        text: 'Sunday Funday',
        mentions: ['Senura', 'Malinga', 'Nipun'],
        hashtags: ['Panadura', 'Beach'],
        image: 'img/post-3.jpg',
        likes: 250,
        comments: 65,
        shares: 3
      },
      {
        userName: 'Dileepa Herath',
        userImage: 'img/online-user.png',
        date: new Date('2024-11-01T10:35:00'),
        text: 'Pre-Engineering Meetup - 2024',
        mentions: [],
        hashtags: ['Kurunegala', 'pre-engineering'],
        image: 'img/post-2.jpg',
        likes: 360,
        comments: 80,
        shares: 20
      },
      {
        userName: 'Sadeepa Herath',
        userImage: 'img/profile-pic.png',
        date: new Date('2024-06-10T13:40:00'),
        text: 'Book Fair -2024',
        mentions: ['Nipun Anupama'],
        hashtags: ['BMICH', 'bookfair'],
        image: 'img/post-1.png',
        likes: 450,
        comments: 95,
        shares: 15
      }
    ];
  }
}
