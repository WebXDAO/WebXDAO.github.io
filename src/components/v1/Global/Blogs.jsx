import Image from "next/image";
import Link from "next/link";

const Blogs = ({ articles, contentOnly = false, show = articles.length }) => {
  return (
    <section className="bg-white py-8">
      {!contentOnly && (
        <div className="container mx-auto max-w-5xl">
          <h1 className="my-2 w-full text-center text-4xl font-bold leading-tight text-gray-800">
            Blogs
          </h1>
          <div className="mb-4 w-full">
            <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
          </div>
        </div>
      )}
      <div className="container mx-auto mb-8 grid max-w-screen-xl grid-cols-3 gap-6 px-8 pb-8 pt-4">
        {articles.length > 0 ? (
          articles.slice(0, show).map((article, index) => (
            <Link key={article.title + index} href={article.url} passHref>
              <div className="focus:shadow-outline col-span-3 flex cursor-pointer flex-col items-stretch justify-between rounded-md p-2 shadow transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none md:col-span-1">
                <div className="rounded-lg bg-white p-4">
                  <div className="relative bg-contain">
                    <Image
                      alt={article.title}
                      width={400}
                      height={250}
                      className="xs:h-72 mb-6 h-72 w-full rounded-md object-cover object-center sm:h-72 md:h-64 lg:h-60 xl:h-56"
                      src={article.social_image}
                    />
                  </div>
                  <div className="flex justify-between">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                      {article.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {article.description}
                  </p>
                </div>
                <time className="flex items-end p-4 text-xs text-gray-500">
                  <Image
                    src={article?.user?.profile_image}
                    alt={article.user.name}
                    width={70}
                    height={70}
                    className="mr-1 h-16 w-16 rounded-full"
                  />
                  <p className="ml-2 opacity-50">
                    by {article.user.name} on
                    {" " + article.readable_publish_date}
                  </p>
                </time>
              </div>
            </Link>
          ))
        ) : (
          <div className="w-full text-center">No Blogs found....</div>
        )}
      </div>
      {!contentOnly && (
        <div className="flex justify-center">
          <a href="https://dev.to/WebXDAO" target="_blank" rel="noreferrer">
            <button className="hover:scale-85 mx-auto rounded-md bg-gray-700 px-8 py-2 text-white shadow transition duration-300 ease-in-out hover:shadow-lg lg:mx-0">
              See All
            </button>
          </a>
        </div>
      )}
    </section>
  );
};

export default Blogs;
