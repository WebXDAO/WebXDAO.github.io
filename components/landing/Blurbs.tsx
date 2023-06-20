import { Icons } from "@/components/icons";

export default function Blurbs() {
    return (
      <section className=" flex justify-center px-4 py-0 md:px-10">
        <div className="my-12 flex flex-col md:flex-row md:gap-8">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <Icons.collaborate className="h-15 w-15 mr-1" />
            </div>
            <div className="text-lg font-bold">Collaborate</div>
            <span className="text-sm">
              Collaborate with other members to achieve common goals and objectives.
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center md:mt-0">
            <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <Icons.blockchain className="h-15 w-15 mr-1" />
            </div>
            <div className="text-lg font-bold">Blockchain</div>
            <span className="text-sm">
              Dedicated to exploring new ways to leverage the power of this transformative
              technology.
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center md:mt-0">
            <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <Icons.decentralization className="h-15 w-15 mr-1" />
            </div>
            <div className="text-lg font-bold">Decentralization</div>
            <span className="text-sm">
              Operates in a decentralized manner, giving power to its community members.
            </span>
          </div>
        </div>
      </section>
    );
}