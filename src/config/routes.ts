import HomeModule from "../modules/home";
import BooksModule from "../modules/books";
import CategoriesModule from "../modules/categories";
import RentalsModule from "../modules/rentals";
export const routes = [
  {
    path: "/app/home",
    to: "home",
    component: HomeModule,
    title: "Home",
    nameMenu: "Home",
  },
  {
    path: "/app/categories",
    to: "categories",
    component: CategoriesModule,
    title: "Categories",
    nameMenu: "Categorías",
  },
  {
    path: "/app/books",
    to: "books",
    component: BooksModule,
    title: "Books",
    nameMenu: "Libros",
  },
  {
    path: "/app/rentals",
    to: "rentals",
    component: RentalsModule,
    title: "Rentals",
    nameMenu: "Alquileres",
  },
];
