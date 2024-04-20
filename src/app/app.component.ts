import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MessageComponent} from "./components/message/message.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema-vendas-angular';
}
