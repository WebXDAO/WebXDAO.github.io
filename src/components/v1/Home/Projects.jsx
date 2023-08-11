import Link from "next/link";

const Projects = () => {
  const projectsData = [
    {
      title: "Total Courses",
      text: "Lot of courses that offer free and premium features",
      num: 100,
      color: "text-blue-500",
      url: "#",
    },
    {
      title: "Free Tools",
      text: "Explore free tools for students that would help you achieve something",
      num: 80,
      color: "text-green-600",
      url: "#",
    },
    {
      title: "Premium Tools",
      text: "Need more features? Let's try the premium tools!",
      num: 40,
      color: "text-red-600",
      url: "#",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex flex-wrap pb-12 pt-4">
        {projectsData.map((item, index) => (
          <div
            key={item.title + index}
            className="flex w-full shrink grow flex-col p-6 text-center md:w-1/3"
          >
            <div className="flex-1 overflow-hidden bg-white">
              <Link
                href="#"
                className="flex flex-wrap no-underline  hover:no-underline"
              >
                <div className={`w-full px-6 text-3xl font-bold ${item.color}`}>
                  {item.num}+
                </div>
                <div className="w-full p-5 px-6 text-xl font-bold text-gray-900">
                  {item.title}
                </div>
                <p className="mx-10 mb-5 px-6 text-center text-base text-gray-800">
                  {item.text}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
