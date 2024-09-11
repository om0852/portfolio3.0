import Image from "next/image";
import Intro from "./components/Intro";
import About from "./components/about/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import MyService from "./components/MyServices";
import ContactPage from "./components/ContactMe";

export default function Home() {
  return (
    <>
      <Intro />
      <About/>
      <Skill/>
      <Project/>
      <MyService/>
      <ContactPage/>
    </>
  );
}
