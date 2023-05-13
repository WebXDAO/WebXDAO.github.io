import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";

export default function WebXLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#13111C] via-[#14111D] to-[#30122A]">
      <Navbar></Navbar>
      <div className="flex flex-1 md:flex-row">
        <main className="flex-1">{children}</main>
      </div>
      <Footer></Footer>
    </div>
  );
}
