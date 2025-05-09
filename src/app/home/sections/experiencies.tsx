import { api } from "@/lib/axios";
import { IGetGithubUser } from "@/lib/interfaces/github.interface";
import { getYearOfExperienceDiff } from "@/util/dates.util";

export default async function ExperiencesSection() {
  const res = (await api.get<IGetGithubUser>("/users/miguelpombodev")).data;

  return (
    <div className="flex bg-gray-light py-11 items-center justify-center flex-col">
      <span className="text-center w-1/3 text-5xl/tight pb-4 border-b-1 border-black">
        Trusted with a variety of more experiences
      </span>
      <span className="text-center w-3xl pt-11">
        With over 6 years of experience specializing in backend development with
        .NET (C#), with additional exposure to NodeJS and Java. I have a lot of
        expertise about building scalable applications, and integration with
        other tools, like RabbitMQ, Kafka Apache, Observability tools.
      </span>
      <div className="flex py-11 border-y-1 border-black w-5/6 px-3 mt-11 justify-evenly">
        <span className="flex flex-col text-center px-8">
          <p className="text-5xl">
            <span className="text-secondary">{getYearOfExperienceDiff()}</span>{" "}
            Years
          </p>
          <p className="text-lg font-light">Experience</p>
        </span>
        <span className="flex flex-col text-center px-30 border-x-1 border-black">
          <p className="text-5xl">
            <span className="text-secondary">{res.public_repos}</span> repos
          </p>
          <p className="text-lg font-light">On Github</p>
        </span>
        <span className="flex flex-col text-center px-3">
          <p className="text-5xl">
            <span className="text-secondary">6</span> Years
          </p>
          <p className="text-lg font-light">Experience</p>
        </span>
      </div>
    </div>
  );
}
