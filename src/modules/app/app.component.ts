import { Component } from '@angular/core';
import { ToasterContainerComponent, ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  providers: [ToasterService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'super-time-app';
}
