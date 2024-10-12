import Navbar from "../components/Header/Navbar";
import MyPhoto from "../assets/photo_2024-09-25_02-56-42-removebg-preview.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3">
        <div className="col-span-2 flex items-center justify-center ml-8">
          <div className="text-start">
            <p className="text-5xl font-bold">Hi There,</p>
            <p className="text-6xl font-semibold text-blue-400">
              I'm <span>Ken Mark Amandoron</span>
            </p>
            <p className="text-4xl font-medium text-yellow-600">
              I'm Into{" "}
              <span className="text-blue-950">Full-Stack Web Development</span>
            </p>
            <p className="text-3xl font-medium text-black">And I Love Coding</p>
          </div>
        </div>

        <div className="col-start-3">
          <img src={MyPhoto} alt="my photo" className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default Home;
