import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div>
        <Spotlight className=" h-screen" fill="grey" />
        <Spotlight className=" left-full h-[80vh]" fill="violet" />
        <Spotlight className=" left-80 h-[80vh] w-[50vw]" fill="#87CEEB" />
      </div>
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[40vw]">
          Feel Free <span className="text-purple">To Reach</span> out to Me !!!
        </h1>
        
        <a href="mailto:dishantdrugkar4@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
  
    </footer>
  );
};

export default Footer;
