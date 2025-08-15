"use client";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function GiscusComments() {
  const { theme } = useTheme();

  return (
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Bình luận
      </h3>
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
  );
}
