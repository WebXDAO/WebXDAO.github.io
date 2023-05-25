import Image from 'next/image';
import { cn } from '@/lib/utils'
import { fontGilroy } from '@/lib/fonts'
import ContributorCard from '@/components/ContributorCard';

async function getContributorData() {
  // fetch contributors using Github REST API
  const res = await fetch('https://api.github.com/repos/WebXDAO/WebXDAO.github.io/contributors?anon=1');

  // handle errors
  if(!res.ok)
    throw new Error('Failed to fetch Contributor\'s data from Github!');
  
  // returns a promise
  return res.json();
}

export default async function ContributorsPage() {

  const contributorList = await getContributorData();
  
  return (
    <>
      <section className="container mt-20 flex flex-wrap p-11">
        {contributorList.map(({ id, login, html_url, contributions}:{ id:number, login:string, html_url:string, contributions:number }) => {
          return (
            <ContributorCard
              key={id}
              username={login}
              commits={contributions}
              profileLink={html_url}
            />
          )
        })}
      </section>
    </>
  );
}