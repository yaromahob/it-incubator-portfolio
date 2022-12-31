import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./Feedback.module.scss";
import { postWithMe } from "./postMessage";
import sendOK from "../../assets/icons/sendOK.svg";
import sendBAD from "../../assets/icons/sendBAD.svg";

export type FormikType = {
  email?: string;
  name?: string;
  text?: string;
};

const Feedback: React.FC = () => {
  const [sendStatus, setSendStatus] = useState<null | boolean>(null);

  const sendStatusCallback = (value: boolean) => {
    setSendStatus(value);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: "",
    },

    validate: (values) => {
      const errors: FormikType = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.name) {
        errors.name = "Name cannot be empty";
      }
      return errors;
    },
    onSubmit: (values) => {
      postWithMe(values, sendStatusCallback);
      formik.resetForm();
      console.log(sendStatus);
    },
  });
  return (
    <section className={styles.forCommunication} id="contacts">
      <div className={styles.forCommunicationWrapper}>
        <h3 className={styles.title}>Feedback</h3>
        <div className={styles.feedBack}>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.formExample}>
              <label className={styles.label} htmlFor="name">
                Enter your name{" "}
              </label>
              <input
                type="text"
                id="name"
                required
                {...formik.getFieldProps("name")}
              />
              <div className={styles.error}>
                {formik.touched.name &&
                  formik.errors.name &&
                  formik.errors.name}
              </div>
            </div>
            <div className={styles.formExample}>
              <label className={styles.label} htmlFor="email">
                Enter your email{" "}
              </label>
              <input
                type="email"
                id="email"
                required
                {...formik.getFieldProps("email")}
              />
              <div className={styles.error}>
                {formik.touched.email &&
                  formik.errors.email &&
                  formik.errors.email}
              </div>
            </div>

            <div className={styles.yourText}>
              <textarea
                id=""
                cols={30}
                rows={10}
                placeholder="your Message"
                {...formik.getFieldProps("text")}
              ></textarea>
            </div>
            <div className={styles.btnSubmit}>
              <button className={styles.submit} type="submit">
                Submit
              </button>
              {sendStatus !== null ? (
                <img
                  className={styles.status}
                  src={sendStatus ? sendOK : sendBAD}
                  alt="sendStatus"
                />
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
