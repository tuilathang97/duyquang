import Header from "@components/Header";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="background-color: rgb(15 23 42/1);">{children}</main>
    </>
  )
}   