import Image from "next/image";
import { prefix } from "../../constants";

const Testimonials = () => {
  const data = [
    {
      name: "Wahid Ari",
      imgUrl: "/placeholder/placeholder_1.png",
      userTitle: "Designer",
      text: "Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif",
      rating: 2,
    },
    {
      name: "Wahid Ari",
      imgUrl: "/placeholder/placeholder_2.png",
      userTitle: "Developer",
      text: "Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif",
      rating: 5,
    },
    {
      name: "Wahid Ari",
      imgUrl: "/placeholder/placeholder_3.png",
      userTitle: "UI/UX Designer",
      text: "Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif",
      rating: 3,
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container m-8 mx-auto max-w-5xl">
        <h1 className="my-2 w-full text-center text-4xl font-bold leading-tight text-gray-800">
          Testimonials
        </h1>
        <p className="mx-10 mb-5 px-6 text-center text-base text-gray-800">
          Community Members Experience
        </p>
        <div className="mb-4 w-full">
          <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
        </div>
      </div>

      <div className="mx-auto mb-8 flex flex-wrap px-8 pb-12 pt-4 lg:container">
        <div className="grid grid-cols-1 items-center gap-6 text-black md:grid-cols-3">
          {data.map(({ name, imgUrl, userTitle, rating, text }, index) => (
            <div
              key={name + index}
              className="focus:shadow-outline mx-auto flex h-full cursor-pointer flex-col content-start justify-evenly rounded-md bg-white p-6 shadow transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none"
            >
              <div className="flex py-4">
                <div className="flex items-center">
                  {Array.from(Array(Math.floor(rating)).keys()).map(
                    (item, index) => (
                      <svg
                        key={item + index}
                        className="mx-1 h-4 w-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    )
                  )}
                  {Array.from(Array(5 - Math.floor(rating)).keys()).map(
                    (item, index) => (
                      <svg
                        key={item + index}
                        className="mx-1 h-4 w-4 fill-current text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    )
                  )}
                </div>
              </div>
              <p className="mb-2 text-base text-gray-600">{text}</p>
              <div className="flex flex-row items-center justify-start py-2">
                <div className="relative h-16 w-16 shrink-0">
                  <Image
                    src={prefix + imgUrl}
                    width={400}
                    height={250}
                    alt={name}
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center pl-3">
                  <div className="w-full text-xl font-bold text-gray-800">
                    {name}
                  </div>
                  <p className="text-base text-gray-800">{userTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
