import background_img3 from "../assets/background-3.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-fixed "
        style={{
          backgroundImage: `url(${background_img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30 tracking-wide font-light ">
        <h1 className="text-5xl md:text-8xl   mb-4">
          Services-Details
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Home / Pages / Services-Details
        </p>
       
      </div>
    </section>
  );
};

export default Hero;