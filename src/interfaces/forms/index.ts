import { Dayjs } from "dayjs";
import { FieldErrors, Control } from "react-hook-form";

export interface BookFields {
  id?: number;
  title: string;
  author: string;
  category: string;
  price: string;
  link?: File;
  coverImage: File | string;
  version: string;
  olderVersion: string;
  edition: string;
  isbn: string;
  releaseDate: Dayjs | null;
  brief: string;
}

export interface IFormFields {
  handleFormReset?: () => void;
  submitHandler?: React.FormEventHandler<HTMLFormElement> | undefined;
  errors: FieldErrors<BookFields>;
  control: Control<BookFields>;
}
