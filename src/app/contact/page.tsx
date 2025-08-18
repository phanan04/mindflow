import { createClient } from "@/lib/prismicio";
import { FaEnvelope, FaPinterest } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

export default async function ContactPage() {
  const client = createClient();
  const [author] = await client.getAllByType("author");

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center pb-6">Contact</h1>

      <div className="flex flex-col md:flex-row gap-8 max-w-[1000px] mx-auto mb-4">
        
        <div className="flex-1 bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="flex items-center gap-2">
            {author.data.email}
          </p>
          <p className="flex items-center gap-2 mt-2">
            {author.data.phone}
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-black">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-red-600">
              <FaPinterest />
            </a>
          </div>
        </div>

        <form
          action="https://formspree.io/f/xblkpjbl"
          method="POST"
          className="flex-1 flex flex-col gap-4 p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-sm"
        >
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="First-Name"
                required
                className="w-full border py-2 px-3 dark:bg-zinc-700"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="Last-Name"
                required
                className="w-full border py-2 px-3 dark:bg-zinc-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="Email"
              required
              className="w-full border py-2 px-3 dark:bg-zinc-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="Message"
              required
              className="w-full border py-2 px-3 h-32 dark:bg-zinc-700"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
