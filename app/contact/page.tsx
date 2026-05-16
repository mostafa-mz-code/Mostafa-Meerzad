import React from "react";
import Header from "./Header";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";

const page = () => {
  return (
    <section className={"bg-gradient-to-b from-darkblue/8 to-darkblue"}>
      <Header />
      <div className={"grid grid-cols-1 lg:grid-cols-2 border-t "}>
        <SocialMedia />
        <ContactForm />
      </div>
    </section>
  );
};

export default page;
