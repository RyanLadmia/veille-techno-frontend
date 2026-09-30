import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Header } from '../../core/components/header/header';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-home',
  imports: [Header, FeatureCard, Button],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  message = signal('');

  features = [
    {
      title: 'Organisez vos tâches',
      description: 'Créez et organisez vos tâches dans des listes Kanban.',
    },
    {
      title: 'Travaillez en équipe',
      description: 'Collaborez facilement avec les membres de votre équipe.',
    },
    {
      title: 'Suivez votre progression',
      description: 'Visualisez rapidement l’avancement de vos projets.',
    },
  ];

  constructor(private apiService: ApiService) {}

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

  start(): void {
    console.log('Démarrage du Kanban');
  }
}