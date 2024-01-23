import { JsonPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate, VersionEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  version = 'v1.0.0';
  swUpdate = inject(SwUpdate);
  logs: VersionEvent[] = [];

  constructor() {
    this.swUpdate.versionUpdates.subscribe((event) => {
      this.logs.push(event);
    });
  }
}
