"use client";

import { FaFacebook, FaPinterest, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
}

export default function ShareButtons({ title, description, url }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareTitle = title || (typeof document !== "undefined" ? document.title : "");
  const shareDescription = description || "";

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(shareTitle)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const handlePinterestShare = () => {
    const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      shareUrl
    )}&description=${encodeURIComponent(shareTitle)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(shareTitle);
    const body = encodeURIComponent(
      `Tôi muốn chia sẻ bài viết này với bạn: ${shareTitle}\n\n${shareDescription}\n\nXem tại: ${shareUrl}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed left-4 top-1/6 z-50 hidden xl:flex flex-col justify-center items-center gap-4 my-4">
        <p className="text-lg font-medium">Chia sẻ:</p>
        <FaFacebook onClick={handleFacebookShare} className="hover:text-blue-600 cursor-pointer text-xl" />
        <FaXTwitter onClick={handleTwitterShare} className="hover:text-black cursor-pointer text-xl" />
        <FaPinterest onClick={handlePinterestShare} className="hover:text-red-600 cursor-pointer text-xl" />
        <FaEnvelope onClick={handleEmailShare} className="hover:text-green-600 cursor-pointer text-xl" />
      </div>

      {/* Mobile Inline */}
      <div className="flex flex-row justify-center items-center gap-4 my-4 xl:hidden">
        <p className="text-lg font-medium">Chia sẻ:</p>
        <FaFacebook onClick={handleFacebookShare} className="hover:text-blue-600 cursor-pointer text-xl" />
        <FaXTwitter onClick={handleTwitterShare} className="hover:text-black cursor-pointer text-xl" />
        <FaPinterest onClick={handlePinterestShare} className="hover:text-red-600 cursor-pointer text-xl" />
        <FaEnvelope onClick={handleEmailShare} className="hover:text-green-600 cursor-pointer text-xl" />
      </div>
    </>
  );
}
