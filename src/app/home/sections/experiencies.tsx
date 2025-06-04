import FetchApiClient from "@/lib/axios";
import { IGetGithubUser } from "@/lib/interfaces/github.interface";
import { getYearOfExperienceDiff } from "@/util/dates.util";

export default async function ExperiencesSection() {
  const fetchApi = new FetchApiClient();

  const getRepoCount = await fetchApi.Get<IGetGithubUser>(
    "github",
    "users/miguelpombodev"
  );

  return (
    <div className="flex bg-gray-light py-11 items-center justify-center flex-col">
      <span className="text-center w-4/5 text-5xl/tight pb-4 border-b-1 border-black md:w-1/3">
        Trusted with a variety of more experiences
      </span>
      <span className="text-center px-10 pt-11 md:w-3xl md:px-0">
        {`With ${getYearOfExperienceDiff()}+ years of experience in backend development using .NET (C#) —
        plus hands-on work with Node.js and Java — I specialize in building
        scalable, high-performance systems. I’ve integrated applications with
        tools like RabbitMQ, Apache Kafka, and observability stacks to ensure
        reliability and visibility in production environments.`}
      </span>
      <div className="flex flex-col items-center py-5 border-y-1 text-center border-black w-5/6 px-3 mt-11 justify-evenly md:flex-row md:py-11">
        <span className="flex flex-col w-4/5 py-5 text-center border-b-1 border-black md:w-auto md:pr-12 md:px-6 md:border-y-0 md:border-r-1 md:border-black">
          <p className="text-5xl">
            <span className="text-secondary">{getYearOfExperienceDiff()}+</span>{" "}
            Years
          </p>
          <p className="text-lg font-light">Software Engineering Experience</p>
        </span>
        <span className="flex flex-col w-4/5 py-5 text-center border-b-1 border-black md:w-auto md:pr-12 md:px-6 md:border-y-0 md:border-r-1 md:border-black">
          <p className="text-5xl">
            <span className="text-secondary">{`${getRepoCount.public_repos}+`}</span>{" "}
            repos
          </p>
          <p className="text-lg font-light">On Github</p>
        </span>
        <span className="flex flex-col w-4/5 py-5 text-center border-b-1 border-black md:w-auto md:pr-12 md:px-6 md:border-y-0 md:border-r-1 md:border-black">
          <p className="text-5xl">
            <span className="text-secondary">20+</span> Active Members
          </p>
          <p className="text-lg font-light">
            In My Developer Discord Community
          </p>
        </span>
        <span className="flex flex-col w-4/5 py-5 text-center md:w-auto">
          <p className="text-5xl">
            <span className="text-secondary">5+</span> Mentees
          </p>
          <p className="text-lg font-light">
            Personally Mentored into the Tech Industry
          </p>
        </span>
      </div>
    </div>
  );
}
