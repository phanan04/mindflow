"use client";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function GiscusComments() {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">💬</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Thảo luận
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Chia sẻ ý kiến và thảo luận về bài viết cùng cộng đồng
        </p>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
        <Giscus
          id="comments"
          repo="phanan04/mindflow"
          repoId="R_kgDOPPeOZw"
          category="General" 
          categoryId="DIC_kwDOPPeOZ84CuH3J"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme={theme === 'dark' ? 'dark' : 'light'} 
          lang="vi"
          loading="lazy"
        />
      </div>
    </div>
  );
}
