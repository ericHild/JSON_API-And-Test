import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsondataService } from './services/jsondata.service';
import { Post } from './models/post';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit, OnDestroy {

  title = 'Jsonplaceholder + Jest + Cypress';

  private postService = inject(JsondataService);

  posts: Post[] = [];

  private subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {}

  getPosts() {
    this.subscription =  this.postService.getPosts().subscribe( (res) => { this.posts = res });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}
