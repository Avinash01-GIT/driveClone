import { RIGHT_IMG } from "../../constants_urls/urls";

const Hero = () => {
  return (
    <div className="w-[100%] flex my-14 lg:flex-row lg:my-20 sm:flex-col">
      <div className="w-[50%] pl-20 my-10 lg:pl-20 sm:w-full sm:pl-5 sm-my-0">
        <div className="flex flex-col gap-8">
          <p className="text-7xl w-[100%] lg:text-7xl lg:w-[80%] md:text-4xl sm:text-2xl">
            Easy and secure access to your content
          </p>
          <p className="text-2xl w-[75%] sm:text-xl lg:text-2xl lg:w-[80%]">
            Store, share, and collaborate on files and folders from your mobile
            device, tablet, or computer
          </p>
        </div>
      </div>
      <div className="w-[50%] sm:w-full">
        <img
          src={RIGHT_IMG}
          alt=""
          className="w-[90%] sm:m-auto transition-all duration-1000"
        />
      </div>
    </div>
  );
};

export default Hero;
