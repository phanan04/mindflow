import Image from "next/image";
import { FaEnvelope, FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function AuthorPage() {
    return (
        <div className="w-[1000px] mx-auto h-auto">
            <h1 className="text-2xl font-bold text-center pb-4">ABOUT</h1>
            <div className="flex flex-row gap-4 w-full max-w-[1000px] mx-auto">
                {/* About Left */}
                <div className="flex flex-col w-1/2 gap-2">
                    <h3><b>ABOUT ME</b></h3>
                    <hr></hr>
                    <div className="flex flex-row gap-4 ">
                        <div className="w-1/3">
                            <Image src="/author.jpg" alt="Author" width={100} height={100} />
                        </div>
                        <div>
                            <p>
                                I&rsquo;m a paragraph. Click here to add your own text and edit
                                me. It&rsquo;s easy. Just click “Edit Text” or double click me to
                                add your own content and make changes to the font. Feel free to
                                drag and drop me anywhere you like on your page. I&rsquo;m a great
                                place for you to tell a story and let your users know a little
                                more about you.
                            </p>
                        </div>
                    </div>
                    <p>
                        <b>An Phan</b>
                    </p>
                    <p>
                        <i>Author</i>
                    </p>
                </div>
                {/* About Right */}
                <div className="flex flex-col w-1/2 gap-2">
                    <h3><b>CONTACT ME</b></h3>
                    <hr></hr>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col w-1/3">
                            <p>info@mysite.com</p>
                            <p>1234567890</p>
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
                            <textarea className="py-2 px-4 w-full border h-32"></textarea>
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
