import Header from "./components/Header";
import ImageComponent from "./components/Image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-evenly max-h-2/8 py-11">
        <span className="flex w-1/5">
          <h2 className="font-bold text-4xl underline underline-offset-10 decoration-secondary">
            Let’s More About Me
          </h2>
        </span>
        <span className="flex w-1/5">
          Hello! My name is Miguel and I am a Software Engineer with over 6
          years of experience specializing in backend development with .NET (C#)
          and Python, with additional exposure to NodeJS and Java. Expertise in
          building scalable applications and integrating relational databases
          such as SQL Server, PostgreSQL, and MySQL, as well as NoSQL solutions
          like MongoDB and Redis. Proficient in working with Message Brokers,
          including RabbitMQ and Azure Queues, and experienced in cloud
          integration with AWS and Azure. Skilled in observability tools such as
          Elastic Stack, Grafana, and Prometheus, as well as containerization
          technologies like Docker and Kubernetes. Also experienced in frontend
          development with NodeJS and React.
        </span>
        <ImageComponent
          src="https://mp-general-bucket.s3.sa-east-1.amazonaws.com/BAFC0BF7-56D4-4AA6-BE85-CA416587EDB0.JPG"
          alt="front-page-description-image"
          title="front-page-description-image"
          className="w-2/9 rounded-full"
        />
      </div>
      <div className="flex bg-gray-light py-11 items-center justify-center flex-col">
        <span className="text-center w-1/3 text-5xl/tight pb-4 border-b-1 border-black">
          Trusted with a variety of more experiences
        </span>
        <span className="text-center w-3xl pt-11">
          With over 6 years of experience specializing in backend development
          with .NET (C#), with additional exposure to NodeJS and Java. I have a
          lot of expertise about building scalable applications, and integration
          with other tools, like RabbitMQ, Kafka Apache, Observability tools.
        </span>
        <div className="flex py-11 border-y-1 border-black w-5/6 px-3 mt-11 justify-evenly">
          <span className="flex flex-col text-center px-8">
            <p className="text-5xl">
              <span className="text-secondary">6</span> Years
            </p>
            <p className="text-lg font-light">Experience</p>
          </span>
          <span className="flex flex-col text-center px-30 border-x-1 border-black">
            <p className="text-5xl">
              <span className="text-secondary">6</span> Years
            </p>
            <p className="text-lg font-light">Experience</p>
          </span>
          <span className="flex flex-col text-center px-3">
            <p className="text-5xl">
              <span className="text-secondary">6</span> Years
            </p>
            <p className="text-lg font-light">Experience</p>
          </span>
        </div>
      </div>
    </>
  );
}
