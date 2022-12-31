import axios from "axios";
import { FormikErrorType } from "./ContactWithMe";

export const postWithMe = (data: FormikErrorType) => {
  axios
    .post("https://formspree.io/f/mvonopjj", data)
    .then((res) => {
      if (res.data.ok) {
        console.log("OK");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
// action="https://formspree.io/f/mvonopjj"
// method="POST"
