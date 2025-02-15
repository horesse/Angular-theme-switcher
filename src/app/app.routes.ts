import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('app/layout/layout.component').then(
                (m) => m.LayoutComponent
            ),
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('app/modules/pages/home/home.routes'),
            },
        ],
    },
];
