import { createClient } from "../../../lib/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { FaEnvelope, FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default async function AuthorPage() {
  const client = createClient();

  const [author] = await client.getAllByType("author");

  return (
    <div className="w-[1000px] mx-auto h-auto">
      <h1 className="text-2xl font-bold text-center pb-4">ABOUT</h1>
      <div className="flex flex-row gap-4 w-full max-w-[1000px] mx-auto">
        {/* About Left */}
        <div className="flex flex-col w-1/2 gap-2">
          <h3><b>ABOUT ME</b></h3>
          <hr />
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 w-1/3">
              <Image
                src={author.data.avatar.url || "/public/assets/images/default-avatar.png"}
                alt={author.data.avatar.alt || "Author"}
                width={100}
                height={100}
              />
                <div className="flex flex-col">
                    <p><b>{author.data.name}</b></p>
                    <p><i>Author</i></p>
                </div>
            </div>
            <div>
              <PrismicRichText field={author.data.bio} />
            </div>
          </div>
          
        </div>

        {/* About Right */}
        <div className="flex flex-col w-1/2 gap-2">
          <h3><b>CONTACT ME</b></h3>
          <hr />
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-1/3">
              <p>{author.data.email}</p>
              <p>{author.data.phone}</p>
              <div className="flex flex-row gap-2">
                <FaFacebook className="hover:text-blue-600 cursor-pointer text-xl" />
                <FaXTwitter className="hover:text-black cursor-pointer text-xl" />
                <FaPinterest className="hover:text-red-600 cursor-pointer text-xl" />
                <FaEnvelope className="hover:text-green-600 cursor-pointer text-xl" />
              </div>
            </div>

            <div className="flex flex-col w-2/3 gap-2">
              <p>First Name</p>
              <input type="text" className="py-2 px-4 w-full border" />
              <p>Last Name</p>
              <input type="text" className="py-2 px-4 w-full border" />
              <p>Email</p>
              <input type="email" className="py-2 px-4 w-full border" />
              <p>Message</p>
              <textarea className="py-2 px-4 w-full border h-32" />
              <button className="bg-black text-white py-2 w-full">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
