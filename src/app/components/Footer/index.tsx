import { Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col h-sm bg-background w-full items-center py-11">
      <div className="flex flex-col text-white w-1/2 justify-center items-center">
        <h1 className="text-7xl text-center leading-24 font-clash">
          Let's Hire Me And Make The Best Product
        </h1>
        <div className="flex items-center justify-center w-full mt-10">
          <button
            className="mr-30 bg-secondary hover:bg-secondary-darker 
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
      <div className="flex w-4/5 mt-15 py-12 border-t-1 border-t-secondary  text-secondary">
        <div className="flex flex-2/3 links">
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
