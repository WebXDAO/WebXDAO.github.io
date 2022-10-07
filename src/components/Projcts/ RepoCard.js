import {FaStar} from "react-icons/fa";

const RepoCard = ({ repo }) => {
    const { name, html_url, stargazers_count, language, owner, description } = repo;
    return (
            <a href={html_url} target="_blank" rel="noopener noreferrer"
               className="bg-slate-900 border flex flex-col justify-between rounded-lg border-gray-700 p-5 shadow hover:bg-gray-700 delay-100 h-full duration-200 w-full">
               <div>
                    <div className="flex flex-row">
                        {/*<img src={owner?.avatar_url} className="rounded h-40 w-40"/>*/}
                        <p>
                            <span className="text-gray-500 font-semibold">{owner.login}/</span>
                            <span className="text-gray-300 font-semibold">{name}</span>
                        </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                        { description }
                    </p>
                </div>
                <div className="flex justify-between mt-4">
                    <span className="text-xs text-gray-500">{language}</span>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row text-gray-500 hover:text-white">
                            <FaStar className="h-4 w-4"/>
                            <span className="text-xs ml-1">{stargazers_count}</span>
                        </div>
                    </div>
                </div>
            </a>
    )
}

export default RepoCard;