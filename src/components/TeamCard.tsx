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
        <div className="mx-auto my-5 border-2 border-black" style={{backgroundColor: "white" , width: "150px", height:"150px" ,borderRadius: "50%"}}></div>
        <h1 className="my-1 text-center">{Name}</h1>
        <h2 className="my-1 text-center">{position}</h2>
        <div className="my-6 flex place-content-center gap-4 px-5">
        <Link href={github_url} target="_blank"                   
                  aria-label="Visit us on GitHub"
                  title="GitHub (External Link)"
                  rel="noopener noreferrer">
                <Icons.gitHub
                  className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                  width={25}
                  height={25}
                />
        </Link>
        <Link href={twitter_url} target="_blank"                   
                  aria-label="Visit us on Twitter"
                  title="Twitter (External Link)"
                  rel="noopener noreferrer">
                <Icons.twitter
                  className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                  width={25}
                  height={25}
                />
        </Link>
        <Link href={linkedin_url} target="_blank"                   
                  aria-label="Visit us on Linkedin"
                  title="Linkedin (External Link)"
                  rel="noopener noreferrer">
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
