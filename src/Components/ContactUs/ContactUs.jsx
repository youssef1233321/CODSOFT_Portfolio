import { Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

const ContactUs = () => {
    
  const [success , setSuccess] = useState(false)
  const ref = useRef()

  if (success) {
    for (let i = 0; i < ref.current.children.length-1; i++) {
        ref.current.children[i].children[1].value = ""
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    emailjs.sendForm("service_f3ijlb9", "template_xnt3dtd", e.target).then(
      () => {
        setSuccess(true);
        toast.success("The Message was sent"); 
        setTimeout(()=>{
            setSuccess(false);  // Reset form after 6 seconds to allow user to resend the message
        }, 6000)
      },
      (err) => {
        console.log(err, "asdasderrrr");
        toast.error(err.text);
      }
    );
  };
  useEffect(() => {
    emailjs.init("idoSUrCAna4PR2TLL");
  }, []);

  return (
    <section className="contact" id="Contact">
      <Container>
        <h2 className="special-heading">Contact Us</h2>
        <p>
          If you have any questions or need assistance, please don't hesitate to
          reach out.
        </p>
        <form className="formContact" onSubmit={sendEmail} ref={ref}>
          <div className="form-group">
            <label htmlFor="name" className="mb-3">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="user_name"
              aria-describedby="nameHelp"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="mb-3">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="user_email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="mb-3">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              name="message"
              required
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary py-2" disabled={success}>
              Submit
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default ContactUs;
