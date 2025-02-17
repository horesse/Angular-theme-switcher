import { Component } from '@angular/core';
import { ThemeService } from '@common/services/theme.service';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    constructor(private _themeService: ThemeService) {}

    toggleThemeMode(mode: 'dark' | 'light') {
        this._themeService.theme.update((theme) => {
            return { ...theme, mode: mode };
        });
    }

    toggleColorMode(color: 'rose' | 'sky' | 'amber') {
        this._themeService.theme.update((theme) => {
            return { ...theme, color: color };
        });
    }

    toggleBackgroundMode(background: 'slate' | 'neutral') {
        this._themeService.theme.update((theme) => {
            return { ...theme, background: background };
        });
    }
}
