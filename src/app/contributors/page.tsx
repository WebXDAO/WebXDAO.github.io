import ContributorCard from "@/components/ContributorCard";

async function getContributorData() {
  // fetch contributors using Github REST API
  const res = await fetch(
    "https://api.github.com/repos/WebXDAO/WebXDAO.github.io/contributors?anon=1"
  );

  // handle errors
  if (!res.ok) throw new Error("Failed to fetch Contributor's data from Github!");

  // returns a promise
  return res.json();
}

interface Card {
  id: number;
  login: string;
  html_url: string;
  contributions: number;
  avatar_url: string;
}

export default async function ContributorsPage() {
  const contributorList = await getContributorData();

  return (
    <>
      <section className="container grid place-items-center p-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4">Contributors</h1>
          <p>
            Join the WebX DAO community and shape the decentralized web alongside like-minded
            contributors passionate about innovation.
          </p>
        </div>
        <div className="container mt-10 flex flex-wrap justify-center gap-8">
        {contributorList.map((data: Card) => {
          return <ContributorCard key={data.id} data={data} />;
        })}
        </div>
      </section>
    </>
  );
}
