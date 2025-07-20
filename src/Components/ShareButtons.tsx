import { FaFacebook, FaPinterest, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default function ShareButtons() {
  return (
    <>
      <div className= "fixed left-4 top-1/6 z-50 xl:flex flex-col justify-center items-center gap-4 my-4 ">
        <p className="text-lg font-medium">Share:</p>
        <FaFacebook className="hover:text-blue-600 cursor-pointer text-xl" />
        <FaXTwitter className="hover:text-black cursor-pointer text-xl" />
        <FaPinterest className="hover:text-red-600 cursor-pointer text-xl" />
        <FaEnvelope className="hover:text-green-600 cursor-pointer text-xl" />
      </div>

      <div className= "flex flex-row justify-center items-center gap-4 my-4 xl:hidden">
        <p className="text-lg font-medium">Share:</p>
        <FaFacebook className="hover:text-blue-600 cursor-pointer text-xl" />
        <FaXTwitter className="hover:text-black cursor-pointer text-xl" />
        <FaPinterest className="hover:text-red-600 cursor-pointer text-xl" />
        <FaEnvelope className="hover:text-green-600 cursor-pointer text-xl" />
      </div>
    </>
  );
}
