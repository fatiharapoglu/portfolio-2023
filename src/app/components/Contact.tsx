import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { ReactSVG } from "react-svg";
import "react-toastify/dist/ReactToastify.css";

import Title from "./Title";
import Socials from "./Socials";
import Image from "next/image";
import loadingGif from "../../../public/animated-logo-black.gif";
import { smoothScroll } from "../utilities/scroll";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const sendMessage = async (values: string) => {
        const response = await fetch(`/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: values,
        });
        return response.json();
    };

    const handleSubmit = async (values: any, { resetForm }: { resetForm: () => void }) => {
        setIsSubmitting(true);
        const response = await sendMessage(JSON.stringify(values));
        if (response.success) {
            resetForm();
            setIsSubmitting(false);
            return toast.success("Message sent. I'll get back to you as soon as possible.", {
                position: toast.POSITION.BOTTOM_CENTER,
                theme: "dark",
            });
        }
        setIsSubmitting(false);
        toast.error("Something went wrong. Please try again.", {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: "dark",
        });
    };

    return (
        <section id="contact">
            <Title count={4} title="What's Next?" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-4 flex flex-col items-center justify-center"
            >
                <h1 className="mb-4 text-3xl font-bold text-slate-300">Get In Touch</h1>
                <p className="mb-1">Have a question or want to work together?</p>
                <p className="mb-4">Connect with me via social media or send me an e-mail.</p>
                <Socials />
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                viewport={{ once: true }}
                className="my-8 text-center text-3xl font-bold text-slate-300"
            >
                OR
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.25 }}
                viewport={{ once: true }}
                className="mx-auto flex w-2/5 flex-col items-center justify-center rounded-xl border border-slate-800/90 p-4 shadow-xl"
            >
                {!isSubmitting ? (
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form>
                            <h1 className="mb-4 mt-2 text-center text-3xl font-bold text-slate-300">Send a Message</h1>
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
                ) : (
                    <motion.div
                        initial={{ opacity: 0, mixBlendMode: "lighten" }}
                        whileInView={{ opacity: 1, mixBlendMode: "lighten" }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="my-28 flex h-full w-full select-none items-center justify-center"
                    >
                        <Image src={loadingGif} alt="loading" className="w-48 mix-blend-lighten" />
                    </motion.div>
                )}
            </motion.div>
            <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                className="mx-auto mt-16 flex justify-center"
                onClick={() => smoothScroll("")}
            >
                <ReactSVG
                    src="/svg/up.svg"
                    className="fill-current text-slate-200 transition-all duration-300 hover:animate-bounce hover:text-red-200"
                />
            </motion.button>
            <ToastContainer />
        </section>
    );
}
