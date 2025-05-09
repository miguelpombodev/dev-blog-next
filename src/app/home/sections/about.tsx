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
      <span className="flex p-7 md:w-1/5 whitespace-pre-line md:p-0 md:text-lg">
        Hello! My name is Miguel! I am a Software Engineer and I am from Brazil
        🇧🇷{"\n"}
        It&apos;s so nice to meet you here in my webpage! Here you&apos;ll see
        some of my professional experiencies, some projects that worked for and
        also some of my blog posts, in which could be related to .NET,
        Databases, Developer Career, and so on.{"\n"}
        Be free to check my social medias, and send me a DM there!{"\n"}
        See you, friend!
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
