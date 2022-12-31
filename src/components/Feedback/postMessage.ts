import axios from "axios";
import { FormikType } from "./Feedback";

export const postWithMe = (
  data: FormikType,
  changeStatus: (value: boolean) => void
) => {
  axios
    .post("https://formspree.io/f/mvonopjj", data)
    .then((res) => {
      if (res.data.ok) {
        changeStatus(res.data.ok);
      }
    })
    .catch((e) => {
      changeStatus(false);
    });
};
