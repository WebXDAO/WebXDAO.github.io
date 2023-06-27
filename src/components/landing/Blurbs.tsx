import { Icons } from "@/components/icons";

export default function Blurbs() {
    return (
      <section className=" flex justify-center px-4 py-0 md:px-10">
        <div className="my-12 flex flex-col md:flex-row md:gap-10 lg:gap-20">
          <Card
            title="Collaborate"
            desc="Collaborate with other members to achieve common goals and objectives."
            icon={<Icons.collaborate className="h-15 w-15 mr-1" />}
          />
          <Card
            title="Blockchain"
            desc="Dedicated to exploring new ways to leverage the power of this transformative technology."
            icon={<Icons.blockchain className="h-15 w-15 mr-1" />}
          />
          <Card
            title="Decentralization"
            desc="Operates in a decentralized manner, giving power to its community members."
            icon={<Icons.decentralization className="h-15 w-15 mr-1" />}
          />
        </div>
      </section>
    );
}

interface Cards {
  title: string,
  desc: string,
  icon: JSX.Element,
}

function Card({title, desc, icon}: Cards) {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center md:mt-0">
      <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
        {icon}
      </div>
      <div className="text-lg font-bold">{title}</div>
      <span className="text-sm max-w-xs">
        {desc}
      </span>
    </div>
  );
}