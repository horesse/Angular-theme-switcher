import { effect, Injectable, signal } from '@angular/core';
import { Theme } from '@common/models/theme.model';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    theme = signal<Theme>({
        mode: 'dark',
        color: 'rose',
        background: 'neutral',
    });

    constructor() {
        this.loadTheme();
        effect(() => {
            this.setTheme();
        });
    }

    get isDark(): boolean {
        return this.theme().mode == 'dark';
    }

    private loadTheme() {
        const theme = localStorage.getItem('theme');
        if (theme) {
            this.theme.set(JSON.parse(theme));
        }
    }

    private setTheme() {
        localStorage.setItem('theme', JSON.stringify(this.theme()));
        this.setThemeClass();
    }

    private setThemeClass() {
        document.querySelector('html')!.className = this.theme().mode;
        document
            .querySelector('html')!
            .setAttribute('data-theme', this.theme().color);

        document
            .querySelector('html')!
            .setAttribute('data-background', this.theme().background);
    }
}
