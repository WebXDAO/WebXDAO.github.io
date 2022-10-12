import {FaStar} from "react-icons/fa";

const RepoCard = ({ repo }) => {
    const { name, html_url, stargazers_count, language, owner, description, forks_count,open_issues, topics } = repo;
    return (
            <a href={html_url} target="_blank" rel="noopener noreferrer"
               className="bg-slate-900/60 border flex flex-col justify-between rounded-lg border-gray-700 p-5 shadow hover:bg-gray-700 delay-100 h-full duration-200 w-full">
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
                <div className="flex flex-wrap justify-start mt-2">
                    {topics?.map((topic, index) => (
                        <div key={index} className="flex m-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-xl px-2 py-1">{topic}</div>
                    ))}
                </div>

                <div className="flex justify-start mt-4">
                    <span className="text-xs text-gray-500">{language}</span>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row text-gray-500 hover:text-white ml-3">
                            <FaStar className="h-4 w-4"/>
                            <span className="text-xs ml-1">{stargazers_count}</span>
                        </div>
                        <div className="flex flex-row text-gray-500 hover:text-white ml-3">
                        <svg 
                        aria-hidden="true" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        version="1.1" 
                        width="16" 
                        data-view-component="true" 
                        class="octicon octicon-repo-forked mr-1 fill-current">
                            <path 
                            fill-rule="evenodd" 
                            d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z">
                            </path>
                        </svg>
                            <span className="text-xs ml-1">{forks_count}</span>
                        </div>

                        <div className="flex flex-row text-gray-500 hover:text-white ml-3">
                        <svg 
                        aria-hidden="true" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        version="1.1" 
                        width="16" 
                        data-view-component="true" 
                        class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline fill-current">
                            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                            </path>
                            <path 
                            fill-rule="evenodd" 
                            d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z">
                            </path>
                        </svg>
                            <span className="text-xs ml-1">{open_issues}</span>
                        </div>
                    </div>
                </div>
            </a>
    )
}

export default RepoCard;
