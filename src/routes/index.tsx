import { Navigate } from "react-router-dom";
import Login from "pages/login";
import { IRoute } from "interfaces/routes";

export enum pathnames {
  LOGIN = "/login",
  BOOKS = "/books",
  BOOK_DETAILS = "/books/:id",
  ADD_BOOK = "/books/add",
  EDIT_BOOK = "/books/:id/edit",
  DELETE_BOOK = "/books/:id/delete",
}

export const protectedRoutes: IRoute[] = [
  //   { path: pathnames.BOOKS, element: <Books /> },
  //   { path: pathnames.ADD_BOOK, element: <AddBook /> },
  //   { path: pathnames.EDIT_BOOK, element: <EditBook /> },
  //   { path: pathnames.DELETE_BOOK, element: <DeleteBook /> },
  //   {
  //     path: pathnames.BOOK_DETAILS,
  //     element: <BookDetails />,
  //   },
];

export const publicRoutes: IRoute[] = [
  { path: pathnames.LOGIN, element: <Login /> },
  { path: "/", element: <Navigate to={pathnames.LOGIN} /> },
  { path: "/*", element: <Navigate to={pathnames.LOGIN} /> },
];
