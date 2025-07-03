import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink ,MatToolbarModule, MatIconModule, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'login';
}
