import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {}
