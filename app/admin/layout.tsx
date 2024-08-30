import { auth } from "@/auth";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  })  {

    const session = await auth()
    if(!session?.user) {
      redirect("/login")
    }

    return (
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    )
}
