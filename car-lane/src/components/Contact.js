import Form from "./Form";
import About from "./About";

const Contact = () => {
    return (
        <div className="flex flex-row flex-wrap content-around">
        <About/>
        <Form />
        </div>
      );
}
 
export default Contact;