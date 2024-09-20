import { Component } from '@angular/core';
import { RouterOutlet,RouterModule,} from '@angular/router';
// script.js
import "nes.css/css/nes.min.css";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Arupakakun GameSpace'; 
}


