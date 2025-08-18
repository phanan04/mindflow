import { createClient } from "@/lib/prismicio";
import { FaEnvelope, FaPinterest, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

export default async function ContactPage() {
  const client = createClient();
  const [author] = await client.getAllByType("author");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="relative max-w-screen-xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">📧</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Có câu hỏi hoặc muốn hợp tác? Chúng tôi rất mong được kết nối và lắng nghe từ bạn.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{author.data.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{author.data.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Vietnam</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    aria-label="Facebook" 
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transform hover:scale-110 transition-all duration-200"
                  >
                    <FaFacebook className="text-lg" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter" 
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transform hover:scale-110 transition-all duration-200"
                  >
                    <FaXTwitter className="text-lg" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Pinterest" 
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transform hover:scale-110 transition-all duration-200"
                  >
                    <FaPinterest className="text-lg" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Response Time</h3>
                <p className="text-purple-100">Usually within 24 hours</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Available</h3>
                <p className="text-green-100">Monday - Friday</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-white text-lg" />
              </div>
              Send Message
            </h2>

            <form
              action="https://formspree.io/f/xblkpjbl"
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="First-Name"
                    required
                    className="w-full py-3 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="Last-Name"
                    required
                    className="w-full py-3 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full py-3 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="Subject"
                  className="w-full py-3 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="Message"
                  required
                  rows={6}
                  className="w-full py-3 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, question, or how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start a Conversation?
              </h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Chúng tôi luôn sẵn sàng lắng nghe ý kiến, câu hỏi và đề xuất từ cộng đồng. 
                Hãy kết nối với chúng tôi ngay hôm nay!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${author.data.email}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <FaEnvelope />
                  Email Us
                </a>
                <a
                  href={`tel:${author.data.phone}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <FaPhone />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
