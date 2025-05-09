export default function Footer() {
  return (
    <footer className="flex flex-col h-sm bg-background w-full items-center py-11">
      <div className="flex flex-col text-white w-1/2 justify-center items-center">
        <h1 className="text-7xl text-center leading-24 font-clash">
          Let's Hire Me And Make The Best Product
        </h1>
        <div className="flex items-center justify-center w-full mt-10">
          <button className="mr-30 bg-secondary hover:bg-secondary-darker">
            Contact Me
          </button>
          <button className="border-1 border-secondary text-secondary">
            Contact Me
          </button>
        </div>
      </div>
    </footer>
  );
}
