import axios from "axios";
import { FormikErrorType } from "./ContactWithMe";

export const postWithMe = (data: FormikErrorType) => {
  axios
    .post("https://formspree.io/f/mvonopjj", data)
    .then((res) => {
      if (res.data.ok) {
        console.log(res.data.ok);
      }
    })
    .catch((e) => {
      return e.data.ok;
    });
};
