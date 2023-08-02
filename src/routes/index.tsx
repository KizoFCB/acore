import { Navigate } from "react-router-dom";
import Login from "pages/login";
import { IRoute } from "interfaces/routes";
import Books from "pages/books";

export enum pathnames {
  LOGIN = "/login",
  BOOKS = "/books",
  BOOK_DETAILS = "/books/:id",
  ADD_BOOK = "/books/add",
  EDIT_BOOK = "/books/:id/edit",
  DELETE_BOOK = "/books/:id/delete",
}

export const protectedRoutes: IRoute[] = [
  { path: pathnames.BOOKS, element: <Books /> },
  //   { path: pathnames.ADD_BOOK, element: <AddBook /> },
  //   { path: pathnames.EDIT_BOOK, element: <EditBook /> },
  //   { path: pathnames.DELETE_BOOK, element: <DeleteBook /> },
  //   {
  //     path: pathnames.BOOK_DETAILS,
  //     element: <BookDetails />,
  //   },
  { path: "/", element: <Navigate to={pathnames.BOOKS} /> },
  { path: "/*", element: <Navigate to={pathnames.BOOKS} /> },
];

export const publicRoutes: IRoute[] = [
  { path: pathnames.LOGIN, element: <Login /> },
  { path: "/", element: <Navigate to={pathnames.LOGIN} /> },
  { path: "/*", element: <Navigate to={pathnames.LOGIN} /> },
];
