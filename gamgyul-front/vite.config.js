import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  console.log(env.VITE_KAKAO_TOKEN);

  return defineConfig({
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            kakaoMapId: env.VITE_KAKAO_TOKEN,
            naverMapId: env.VITE_NAVER_ID,
          },
        },
      }),
    ],
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
  });
};

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
// 	  host: '0.0.0.0',
// 	  port: 3000,
//   },
// })
