import React, { useState } from "react";
import swal from "sweetalert";
import { useForm, Controller } from "react-hook-form";

import "./form.css";

//Form Hilda

const FormValidation = () => {
  const [checkButton, setCheckButton] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const customSubmit = (data) => {
    console.log(data);
    swal("Submitted form!", "Successful validation", "Success");
  };

  return (
    <>
      <div className="form-section" id="form">
        <div className="container-form">
          <form onSubmit={handleSubmit(customSubmit)} className="form-react">
            <h2>Contact us</h2>
            <div className="form-control">
              <label>Name</label>
              <input
                className="rectangle"
                placeholder="Enter name"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 8,
                })}
              />
              {errors.name?.type === "required" && (
                <small className="fail">The field cannot be empty</small>
              )}
              {errors.name?.type === "maxLength" && (
                <small className="fail">Maximum characters are eight</small>
              )}
            </div>

            <div className="form-control">
              <label>Mail</label>
              <input
                className="rectangle"
                placeholder="Enter last name"
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <small className="fail">The field cannot be empty</small>
              )}
              {errors.email?.type === "pattern" && (
                <small className="fail">
                  {" "}
                  Mail can only contain letters, numbers, periods, hyphens, and
                  underscores
                </small>
              )}
            </div>

            <div className="form-control">
              <label>Menssage</label>
              <input
                className="rectangle message"
                placeholder="Enter your message"
                type="text"
                {...register("message", {
                  required: true,
                  minLength: 5,
                  maxLength: 200,
                })}
              />
              {errors.message?.type === "required" && (
                <small className="fail">The field cannot be empty</small>
              )}
              {errors.message?.type === "minLength" && (
                <small className="fail">The minimum characters must be 5</small>
              )}
              {errors.message?.type === "maxLength" && (
                <small className="fail">
                  The maximum characters should be 200
                </small>
              )}
            </div>

            <div className="form-check form-switch">
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...field}
                  />
                )}
              />
              <label>I accept terms and conditions</label>
              {errors.checkbox?.type === "required" && (
                <small className="fail">
                  The field cannot be empty
                  <br></br>
                </small>
              )}
            </div>

            <div className="form-check">
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...field}
                  />
                )}
              />
              <label>
                Accept if you want to receive news from our Newsletter
              </label>
            </div>

            <div className="captcha">
              <div className="spinner">
                <label>
                  <input
                    type="radio"
                    onClick={() => setCheckButton(true)}
                    disabled={checkButton}
                  />
                  <span className="checkmark">
                    <span>&nbsp;</span>
                  </span>
                </label>
                <div className="text">I'm not a robot</div>
                <div className="logo">
                  <img
                    src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/"
                    alt=""
                  />
                  <p>reCAPTCHA</p>
                  <small>Privacy - Terms</small>
                </div>
              </div>
            </div>

            <div className="form">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
