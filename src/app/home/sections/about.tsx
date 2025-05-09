import ImageComponent from "@/app/components/Image";

export default function AboutSection() {
  const fileS3Image = `${process.env.NEXT_AWS_S3_URL}/BAFC0BF7-56D4-4AA6-BE85-CA416587EDB0.JPG`;

  return (
    <div className="flex items-center justify-evenly max-h-2/8 py-11">
      <span className="flex w-1/5">
        <h2 className="font-bold text-4xl underline underline-offset-10 decoration-secondary">
          Let’s More About Me
        </h2>
      </span>
      <span className="flex w-1/5">
        Hello! My name is Miguel and I am a Software Engineer with over 6 years
        of experience specializing in backend development with .NET (C#) and
        Python, with additional exposure to NodeJS and Java. Expertise in
        building scalable applications and integrating relational databases such
        as SQL Server, PostgreSQL, and MySQL, as well as NoSQL solutions like
        MongoDB and Redis. Proficient in working with Message Brokers, including
        RabbitMQ and Azure Queues, and experienced in cloud integration with AWS
        and Azure. Skilled in observability tools such as Elastic Stack,
        Grafana, and Prometheus, as well as containerization technologies like
        Docker and Kubernetes. Also experienced in frontend development with
        NodeJS and React.
      </span>
      <ImageComponent
        src={fileS3Image}
        alt="front-page-description-image"
        title="front-page-description-image"
        className="w-2/9 rounded-full"
      />
    </div>
  );
}
