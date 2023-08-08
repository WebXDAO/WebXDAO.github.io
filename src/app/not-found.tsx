import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center bg-gray-50">
      <div className="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
        <div className="mx-8 w-full text-center lg:w-1/2">
          <div className=" mb-8  text-7xl font-bold "style={{ color: 'rgba(65, 26, 255, 1)' }}>Oops!</div>
          <div className="flex justify-center">
            <Image src="/Frame.png"  width={300} height={300} alt="404 Error" />
          </div>
          <div className=" my-8 text-4xl  font-bold"style={{ color: 'rgba(65, 26, 255, 1)' }}>Page not found</div>
          <div className=" my-8 text-2xl text-gray-400">
            It seems like you wandered off too far! You must return back to our guild!
          </div>
          <Link
            href="/"
            className="duration-400 inline rounded-lg border border-transparent bg-blue-600 px-6 py-4 text-base font-medium leading-6 text-white shadow-2xl transition-all hover:bg-blue-500 focus:outline-none active:bg-blue-300">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
