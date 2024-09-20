import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
//@ts-ignore
import Typewriter from 't-writer.js';
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.loadParticles();
    
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white'
    })
    
    writer
      .type('Hello! <br>'+'Welcome to my gameplace')
      .rest(500)
      .changeOps({ deleteSpeed: 70 })
      .remove(36)
      .type('I will let you see something')
      .rest(500)
      .changeOps({ deleteSpeed: 70 })
      .remove(28)
      .type('You can look')
      .rest(500)
      .remove(4)
      .type('share')
      .rest(800)
      .changeOps({ deleteSpeed: 20 })
      .remove(13)
      .type('Just enjoy and have fun :D')
      .rest(800)
      .clear()
      .start()
  }

  loadParticles(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

  
}
