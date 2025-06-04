import ImageComponent from "@/app/components/Image";

export default function AboutSection() {
  const fileS3Image = `${process.env.NEXT_AWS_S3_URL}/BAFC0BF7-56D4-4AA6-BE85-CA416587EDB0.JPG`;

  return (
    <div className="flex flex-col items-baseline justify-evenly max-h-2/8 py-11 md:flex-row md:items-center">
      <span className="flex md:w-1/5">
        <h2 className="font-bold text-8xl underline underline-offset-10 decoration-secondary md:text-4xl">
          Let’s Know More About Me
        </h2>
      </span>
      <span className="text-center flex p-7 md:w-1/5 whitespace-pre-line md:p-0 md:text-lg">
        {
          "👋 Hi, I'm Miguel — a passionate Software Engineer from Brazil 🇧🇷 \n\n Welcome to my website! \n\n Here you'll find real-world projects I've built, insights from my 8+ years of experience, and blog posts covering topics like .NET, databases, backend architecture, and developer career tips. Feel free to connect with me on social media and send a DM. Let's build something great together!"
        }
      </span>

      <ImageComponent
        src={fileS3Image}
        alt="front-page-description-image"
        title="front-page-description-image"
        className="w-2/3 self-center rounded-full md:w-2/9"
      />
    </div>
  );
}
