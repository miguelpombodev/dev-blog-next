import { Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col h-sm bg-background w-full items-center py-11">
      <div className="flex flex-col text-white p justify-center items-center md:w-1/2">
        <h1 className="text-2xl text-center leading-10 font-clash md:text-7xl md:leading-24">
          Let's Hire Me And Make The Best Product
        </h1>
        <div className="flex flex-col gap-6 items-center justify-center w-full mt-10 md:flex-row">
          <button
            className=" bg-secondary md:mr-30 hover:bg-secondary-darker 
             text-white transition-colors duration-300 ease-in-out"
          >
            Contact Me
          </button>
          <button
            className="border border-secondary text-secondary flex items-center w-49
             hover:bg-secondary hover:text-white 
             transition-colors duration-300 ease-in-out"
          >
            <Download className="mr-4" />
            Get My CV Here!
          </button>
        </div>
      </div>
      <div className="flex w-4/5 mt-15 py-12 border-t-1 border-t-secondary text-secondary md:py-12">
        <div className="flex flex-2/3 flex-col links md:flex-row">
          <a target="_blank" href="#">
            X
          </a>
          <a target="_blank" href="#">
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
