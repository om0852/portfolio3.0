"use client"
import Intro from "./components/Intro";
import About from "./components/about/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import MyService from "./components/MyServices";
import ContactPage from "./components/ContactMe";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [loader,setLoader]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    },2000);
  },[])
  return (
    <>
    <Toaster/>
{loader &&    <Loader/>
}      <Intro />
      <About/>
      <Skill/>
      <Project/>
      <MyService/>
      <ContactPage/>
    </>
  );
}
