import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Title from "./Title";

export default function Contact() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required."),
        email: Yup.string().email("Invalid e-mail address.").required("E-mail is required."),
        message: Yup.string().required("Message is required."),
    });

    const initialValues = {
        name: "",
        email: "",
        message: "",
    };

    const handleSubmit = (
        values: { name: string; email: string; message: string },
        { resetForm }: { resetForm: () => void }
    ) => {
        console.log(values);
        resetForm();
    };

    return (
        <section id="contact">
            <Title count={4} title="What's Next?" />
            <div className="flex flex-col items-center justify-center">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="w-2/5 rounded-xl border border-slate-800/90 p-4 shadow-xl">
                        <h1 className="mb-4 mt-2 text-center text-3xl font-bold text-slate-300">Get In Touch</h1>
                        <p className="mb-1 text-center text-sm">Have a question or want to work together?</p>
                        <p className="mb-4 text-center text-sm">
                            Leave your details and I’ll get back to you as soon as possible.
                        </p>
                        <div className="mb-4">
                            <label htmlFor="name" className="mb-2 block text-sm font-bold">
                                Name
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="w-full appearance-none rounded border border-slate-800/90 bg-slate-800/50 px-3 py-2 leading-tight shadow"
                            />
                            <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-200" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="mb-2 block text-sm font-bold">
                                E-mail
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="w-full appearance-none rounded border border-slate-800/90 bg-slate-800/50 px-3 py-2 leading-tight shadow"
                            />
                            <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-200" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="mb-2 block text-sm font-bold">
                                Message
                            </label>
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                className="w-full appearance-none rounded border border-slate-800/90 bg-slate-800/50 px-3 py-2 leading-tight shadow"
                            />
                            <ErrorMessage name="message" component="div" className="mt-1 text-sm text-red-200" />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="font-roboto-mono inline-block w-32 rounded border border-slate-800/90 px-4 py-2 text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-800/90"
                            >
                                Send
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>
    );
}
