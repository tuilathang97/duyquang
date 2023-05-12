import Header from "@components/Header";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function Layout({ children } : Props) {
  return (
    <>
      <Header />
      <main className="background-color: rgb(15 23 42/1);">{children}</main>
    </>
  )
}   