import { createClient } from "../../../lib/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { FaEnvelope, FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default async function AuthorPage() {
  const client = createClient();

  const [author] = await client.getAllByType("author");

  return (
    <div className="max-w-screen-xl w-[1000px] mx-auto h-auto">
      <h1 className="text-2xl font-bold text-center pb-4">ABOUT</h1>
      <div className="flex flex-row gap-4 w-full max-w-[1000px] mx-auto">
        {/* About Left */}
        <div className="flex flex-col gap-2">
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
      </div>
    </div>
  );
}
