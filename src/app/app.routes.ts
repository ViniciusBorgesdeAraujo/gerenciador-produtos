import {
  Routes,
} from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { getProducts } from './shared/resolvers/get-products.resolver';
import { getProduct } from './shared/resolvers/get-product.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: getProducts,
    },
    component: ListComponent,
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./features/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'edit-product',
    loadComponent: () =>
      import('./freatures/edit/edit.component').then((m) => m.EditComponent),
  },

  {
    path: 'edit-product/:id',
    resolve: {
      product: getProduct,
    },
    loadComponent: () =>
      import('./freatures/edit/edit.component').then((m) => m.EditComponent),
  },
];
