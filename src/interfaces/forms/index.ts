import { FieldErrors, Control } from "react-hook-form";

export interface BookForm {
  title: string;
  author: string;
  category: string;
  price: string;
  link: File;
  coverImage: File;
  version: string;
  olderVersion: string;
  edition: string;
  isbn: string;
  releaseDate: null;
  brief: string;
}

export interface IFormFields {
  handleFormReset?: () => void;
  submitHandler?: React.FormEventHandler<HTMLFormElement> | undefined;
  errors: FieldErrors<BookForm>;
  control: Control<BookForm>;
}
