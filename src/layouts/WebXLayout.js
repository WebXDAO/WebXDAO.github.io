import { useRouter } from 'next/router';
import Navbar from '../components/Global/Navbar';
import Footer from '../components/Global/Footer';

export default function WebXLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#13111C] via-[#14111D] to-[#30122A]">
      <Navbar></Navbar>
      {/* // Info: removed flex-col from flex-1 parent container */}
      <div className="flex md:flex-row flex-1">
        <main className="flex-1">{children}</main>
      </div>
      <Footer></Footer>
    </div>
  );
}
