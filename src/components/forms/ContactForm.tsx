import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = ({ disclaimer, description }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(true);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Formulario enviado", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success bg-green-400",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        "brevo_pad",
        "formulario_web_pad",
        templateParams,
        "wI_Hasvxdn5ZbD4Hp",
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="contactForm">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter your name",
                },
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
              className="text-md block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-slate-900"
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email",
                },
                validate: (value) =>
                  value.includes("@") || "Please enter a valid email",
              })}
              className="text-md block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-slate-900"
              placeholder="Email"
            ></input>
            {errors.email && (
              <span className="px-2 text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div>
            <textarea
              rows={3}
              {...register("message", {
                required: true,
              })}
              placeholder="Message"
              className="text-md block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-slate-900"
            />
            {errors.message && (
              <span className="px-2 text-red-500">Please enter a message</span>
            )}
          </div>

          {disclaimer && (
            <div className="mt-3 flex items-start">
              <div className="mt-0.5 flex">
                <input
                  id="disclaimer"
                  name="disclaimer"
                  type="checkbox"
                  onChange={() => setDisabled(!disabled)}
                  className="text-md mt-1 block w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-slate-900"
                />
              </div>
              <div className="ml-3">
                <label
                  htmlFor="disclaimer"
                  className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"
                >
                  {disclaimer.label}
                </label>
              </div>
            </div>
          )}

          <div className="mt-10 grid">
            <button
              disabled={disabled}
              className="btn-primary disabled:cursor-not-allowed disabled:bg-pad/90 disabled:text-black/80 disabled:dark:bg-slate-800"
              type="submit"
            >
              Submit
            </button>
          </div>
          {description && (
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
