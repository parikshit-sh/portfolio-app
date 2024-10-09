import { useState } from "react";
import "../index.css";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setShowNotification(true);
          setFormData({ from_name: "", email: "", message: "" });
          setTimeout(() => setShowNotification(false), 3000);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <footer className="footer py-16 bg-transparent text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl  mb-8 text-center about-head">
          DROP A MESSAGE
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border-b
             bg-transparent border-black 
             focus:outline-none placeholder:uppercase text-xs" 
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border-b autofill:bg-black
             bg-transparent border-black
             focus:outline-none text-xs placeholder:uppercase " 
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-2 border-b
             bg-transparent border-black 
             focus:outline-none placeholder:uppercase text-xs"  
            required
          ></textarea>
          <div className="px-10">
            <button
              type="submit"
              className="btns inline-block text-lg bg-black border-2 
              text-[#effd92] w-full py-3 px-8 hover:bg-transparent
               hover:text-black hover:border-black rounded-full 
            transition-all duration-300 ease-in-out hover:no-underline md:w-52 text-center"
            >
              Send
            </button>
          </div>
        </form>
        {showNotification && (
          <div className="fixed bottom-4 right-4 bg-black text-white py-2 px-4 rounded shadow-lg transition-opacity duration-300">
            Message sent successfully
          </div>
        )}
        <div className="mt-12 flex justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} FOLIO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
