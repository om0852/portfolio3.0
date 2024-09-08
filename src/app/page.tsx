import Image from "next/image";
import Intro from "./components/Intro";
import About from "./components/about/About";
import Skill from "./components/Skill";
import Project from "./components/Project";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center w-full justify-between p-24">
      <Intro />
    </main>
      <About/>
      <Skill/>
      <Project/>
    </>
  );
}
