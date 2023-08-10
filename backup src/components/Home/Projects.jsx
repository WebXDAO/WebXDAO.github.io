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
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        {projectsData.map((item, index) => (
          <div
            key={item.title + index}
            className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center"
          >
            <div className="flex-1 bg-white overflow-hidden">
              <Link
                href="#"
                className="flex flex-wrap no-underline  hover:no-underline"
              >
                <div className={`w-full font-bold text-3xl px-6 ${item.color}`}>
                  {item.num}+
                </div>
                <div className="w-full font-bold text-xl text-gray-900 px-6 p-5">
                  {item.title}
                </div>
                <p className="text-gray-800 text-base px-6 mb-5 text-center mx-10">
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
