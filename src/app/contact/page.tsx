import { Metadata } from "next";
import { createClient } from "../../lib/prismicio";
import { FaEnvelope, FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const [contact] = await client.getAllByType("author");

  return {
    title: contact.data.name ,
    description: contact.data.bio,
  };
}


export default async function ContactPage() {
  const client = createClient();

  const [author] = await client.getAllByType("author");

  return (
    <div className="max-w-screen-xl w-[1000px] mx-auto h-auto">
      <h1 className="text-2xl font-bold text-center pb-4">CONTACT</h1>
      <div className="flex flex-row gap-4 w-full max-w-[1000px] mx-auto">
          <hr />
          <div className="flex flex-row w-full gap-4">
            <div className="flex flex-col">
              <p>{author.data.email}</p>
              <p>{author.data.phone}</p>
              <div className="flex flex-row gap-2">
                <FaFacebook className="hover:text-blue-600 cursor-pointer text-xl" />
                <FaXTwitter className="hover:text-black cursor-pointer text-xl" />
                <FaPinterest className="hover:text-red-600 cursor-pointer text-xl" />
                <FaEnvelope className="hover:text-green-600 cursor-pointer text-xl" />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
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
  );
}