import Head from "next/head";
import RepoCard from "../components/Projcts/ RepoCard";

export const getStaticProps = async () => {
    try {
        const res = await fetch('https://api.github.com/orgs/WebXDAO/repos');
        const data = await res.json()

        if (!data) {
            return {
                props: {
                    success: false,
                    message: "No data found"
                }
            };
        }
        return {
            props: {
                success: true,
                projectsData: data
            }
        };
    } catch (e) {
        return {
            props: {
                success: false,
                message: e
            }
        };
    }
}

const Projects = ({ success = false, projectsData = [] }) => {
  return (
    <>
      <Head>
        <title>Projects | WebXDAO</title>
      </Head>
      <section className="py-8">
        <div className="container max-w-5xl mx-auto">
          <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-white">
            Resources/Projects
          </h1>
          <div className="w-full mt-6 text-lg md:text-xl font-light leading-tight text-center text-white">
            Here you can find a list of good projects and resources to learn
            about Blockchain and Web 3.0
          </div>
        </div>
      </section>

      <div className="container max-w-screen-xl mx-auto my-8 grid pb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-0 sm:mb-8 gap-6 px-8">
          { success ? projectsData.length > 0 && projectsData.map((repo, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-stretch col-span-3 md:col-span-1 cursor-pointer p-2 shadow rounded-md focus:outline-none focus:shadow-outline transform transition hover:shadow-lg hover:scale-105 duration-300 ease-in-out"
            >
                <RepoCard repo={repo}/>
            </div>
            )
          ) : (
              <div>
                  Error fetching data! Please try again later.
              </div>
          ) }
      </div>
    </>
  );
}

export default Projects;
