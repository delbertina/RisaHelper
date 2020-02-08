import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'risa-helper';

  constructor(private router: Router){}

  clickVoteButton() {
    console.log('Vote Clicked');
    this.router.navigate(['/vote']);
  }

  clickHomeButton() {
    console.log('Home Clicked');
    this.router.navigate(['/home']);
  }
}

