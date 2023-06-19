import Link from "next/link";
import { Icons } from "./icons";
import { Button, buttonVariants } from "./ui/button";

const TeamCard = ({
    Name,
    position,
    github_url,
    twitter_url,
    linkedin_url
  }: {
    Name: string;
    position: string;
    github_url: string;
    twitter_url: string;
    linkedin_url: string
  }) => {
  return (
    <div>
        <div className="border-2 border-black my-5 mx-auto" style={{backgroundColor: "white" , width: "150px", height:"150px" ,borderRadius: "50%"}}></div>
        <h1 className="text-center my-1">{Name}</h1>
        <h2 className="my-1 text-center">{position}</h2>
        <div className="flex gap-4 px-5 my-6 place-content-center">
        <Link href={github_url} target="_blank">
                <Icons.gitHub
                  className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                  width={25}
                  height={25}
                />
        </Link>
        <Link href={twitter_url} target="_blank">
                <Icons.twitter
                  className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                  width={25}
                  height={25}
                />
        </Link>
        <Link href={linkedin_url} target="_blank">
                <Icons.linkedin
                  className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                  width={25}
                  height={25}
                />
        </Link>
        </div>
    </div>
  );
};

export default TeamCard;
