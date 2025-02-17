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

    toggleThemeMode() {
        this._themeService.theme.update((theme) => {
            const mode = !this._themeService.isDark ? 'dark' : 'light';
            return { ...theme, mode: mode };
        });
    }
}
