import type { NextConfig } from "next";
import nextra from 'nextra'



const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};


const withNextra = nextra({
  // 可添加 Nextra 特定选项
})

// 你原有的 Next.js 配置
export default withNextra(nextConfig)

