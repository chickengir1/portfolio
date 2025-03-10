import Profile from "../chip/Profile";
import Interview from "../chip/Interview";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center text-gray-200">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] px-4 py-8">
        <Profile />
        <Interview />
      </div>
    </section>
  );
};

export default About;
