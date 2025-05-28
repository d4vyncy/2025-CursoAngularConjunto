import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/country-layout/country-layout.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


export const countryRoutes: Routes = [
    {
        path: '',
        component: CountryLayoutComponent,
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPageComponent
            },
            {
                path: 'by-country',
                component: ByCountryComponent
            },
            {
                path: 'by-region',
                component: ByRegionComponent
            },
             {
                path: 'by/:code',
                component: CountryPageComponent
            },
            {
                path: '**',
                redirectTo: 'by-capital',
            },
        ]
    },
];

export default countryRoutes;