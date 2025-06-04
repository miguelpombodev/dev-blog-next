import { Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col h-sm bg-background w-full items-center py-11">
      <div className="flex flex-col text-white p justify-center items-center md:w-1/2">
        <span className="flex flex-col gap-2 md:gap-5">
          <h1 className="text-3xl font-bold text-center leading-10 font-clash md:text-6xl md:leading-15">
            {"Let's Build Your Next Great Product Together"}
          </h1>
          <p className="italic text-white text-center text-md md:text-2xl">
            {"Bring your idea, I'll take care of the code."}
          </p>
        </span>
        <div className="flex flex-col gap-6 items-center justify-center w-full mt-10 md:flex-row">
          <button
            className="bg-secondary md:mr-30 hover:bg-secondary-darker 
             text-white transition-colors duration-300 ease-in-out"
          >
            Contact Me
          </button>
          <a
            className="p-3 rounded-[12] font-semibold cursor-pointer border border-secondary text-secondary flex items-center w-64
             hover:bg-secondary hover:text-white 
             transition-colors duration-300 ease-in-out"
            download="Miguel_Pombo_Resume"
            target="_blank"
            href="/resume/Miguel Pombo_Resume.pdf"
          >
            <Download className="mr-4" />
            Download My Resume!
          </a>
        </div>
      </div>
      <div className="flex w-4/5 mt-15 py-12 border-t-1 border-t-secondary text-secondary md:py-12">
        <div className="flex flex-2/3 flex-col links md:flex-row">
          <a target="_blank" href="https://www.instagram.com/pombodev">
            Instagram
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/miguel-pombo/">
            LinkedIn
          </a>
          <a target="_blank" href="https://www.youtube.com/@miguelpombodev">
            Youtube
          </a>
        </div>
        <span>Developed by Miguel Pombo. All rights reserved 2025</span>
      </div>
    </footer>
  );
}
