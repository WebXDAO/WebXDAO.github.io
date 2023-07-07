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
      <section className="container mt-10 flex flex-wrap justify-center gap-8 p-8">
        {contributorList.map((data: Card) => {
          return (
            <ContributorCard
              key={data.id}
              data={data}
            />
          );
        })}
      </section>
    </>
  );
}
