import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { KindComponent } from "../kind/kind.component";
import { IntComponent } from "../int/int.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, KindComponent, IntComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
