"use client"
import { useEffect, useState } from "react";
import { Header } from "./_components/Header/Header";
import { Sidebar } from "./_components/Sidebar/Sidebar";
import { Content } from "./_components/Content/Content";
import { Footer } from "./_components/Footer/Footer";
import style from "./style.module.scss";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
        setShowSidebar(window.innerWidth > 700);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={style.layout}>
      <Header />
        <main className={style.main}>
          {showSidebar && <Sidebar />}
          <Content />
        </main>
      <Footer />
    </div>
  );
}
