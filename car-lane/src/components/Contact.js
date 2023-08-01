import React from 'react';
import Form from "./Form";
import About from "./About";

const Contact = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center pt-22">
      <div className="flex-1 p-4">
        <About />
      </div>
      <div className="flex-1 p-4">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
