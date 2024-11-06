import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";
import Experience from "../components/Experience";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ProjectList />
      <Experience />
      <ContactForm />
    </main>
  );
};

export default Home;
