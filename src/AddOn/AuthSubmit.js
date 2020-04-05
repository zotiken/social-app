import { SubmissionError } from "redux-form";
import { auth } from "../reduses/auth-reducer";

export function submit(value) {
  // console.log(value);
  auth(value.login, value.password);
}
