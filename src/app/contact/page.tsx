import { Metadata } from "next";
import { createClient } from "../../lib/prismicio";
import { FaEnvelope, FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const [contact] = await client.getAllByType("author");

  return {
    title: contact.data.name,
    description: contact.data.bio,
    openGraph: {
      title: contact.data.name || "",
      description: contact.data.bio || "",
      type: "website",
    },
  };
}

export default async function ContactPage() {
  const client = createClient();

  const [author] = await client.getAllByType("author");

  return (
    <div className="max-w-screen-xl mx-auto h-auto p-5">
      <h1 className="text-2xl font-bold text-center pb-4">CONTACT</h1>
      <div className="flex flex-col sm:flex-row gap-4 max-w-[1000px] mx-auto mt-4">
        <hr />
        <div className="flex flex-col gap-2 w-1/2">
          <p>{author.data.email}</p>
          <p>{author.data.phone}</p>
          <div className="flex flex-row gap-2">
            <FaFacebook className="hover:text-blue-600 cursor-pointer text-xl" />
            <FaXTwitter className="hover:text-black cursor-pointer text-xl" />
            <FaPinterest className="hover:text-red-600 cursor-pointer text-xl" />
            <FaEnvelope className="hover:text-green-600 cursor-pointer text-xl" />
          </div>
        </div>

        <form
          action="https://formspree.io/f/xblkpjbl"
          method="POST"
          className="flex flex-col gap-2 w-full sm:w-1/2"
        >
          <label>
            First Name
            <input
              type="text"
              name="First-Name"
              required
              className="py-2 px-4 w-full border"
            />
          </label>

          <label>
            Last Name
            <input
              type="text"
              name="Last-Name"
              required
              className="py-2 px-4 w-full border"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="Email"
              required
              className="py-2 px-4 w-full border"
            />
          </label>

          <label>
            Message
            <textarea
              name="Message"
              required
              className="py-2 px-4 w-full border h-32"
            />
          </label>

          <button type="submit" className="bg-black text-white py-2 w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
