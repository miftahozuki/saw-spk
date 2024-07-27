import Footer from "../Footer";
import NavBar from "../NavBar";


export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  })  {
    return (
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    )
}
