import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
        .sendForm('service_72ngoud', 'template_apw4e88', form.current, {
            publicKey: 'XgJETsikdj1aKLS_r',
        })
        .then(
        () => {
            Swal.fire({
                icon: "success",
                title: "Message sent Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              form.current.reset();
        },
        (error) => {
            Swal.fire({
                icon: "success",
                title: `An error occured ${error.text}`,
                showConfirmButton: false,
                timer: 1500
              });
              form.current.reset();
        },
        );
    };
    return (
        <div id="contact" className="relative py-16">
            <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] inset-0 z-10 absolute opacity-20"></div>
            <div className="bg-slate-200 opacity-65 absolute inset-0"></div>
            <div className="z-20 relative space-y-4">
                <h2 className="text-3xl uppercase font-bold text-center">Contact</h2>
                <div className="max-w-2xl mx-auto pb-16">
                <p className="text-center text-lg">Feel free to contact me by providing information in the form below.</p>
                <form className="flex flex-col bg-white p-2 md:p-16 mt-10 rounded-lg" ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className="bg-slate-100 p-3 rounded-md mb-4" type="text" name="user_name" />
                    <label>Email</label>
                    <input className="bg-slate-100 p-3 rounded-md mb-4" type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className="bg-slate-100 p-3 rounded-md mb-4" name="message" />
                    <input className="btn btn-primary text-white" type="submit" value="Send" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default Contact;