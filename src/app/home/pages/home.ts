import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from './../../core/services/api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html'
})

export class Home implements OnInit {
  message = signal('');

  constructor(private apiService : ApiService) {}

  ngOnInit(): void {
    this.apiService.getHome().subscribe({
      next: (response) => {
        console.log('Réponse backend :', response);
        this.message.set(response);
      },
      error: (error) => {
        console.error('Erreur API :', error);
      },
    });
  }
}
