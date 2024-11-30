import axios from "axios";

/** 로그인이 필요하지 않은 axios 요청 */
export const publicApi = axios.create({
  baseURL: "요청 URL",
  timeout: 10000, // 10초가 넘었을 때 요청 중단 : 수정 필요
});

/** 로그인이 필요한 않은 axios 요청 */
export const privateApi = axios.create({
  baseURL: "요청 URL",
  timeout: 10000, // 10초가 넘었을 때 요청 중단 : 수정 필요
});

// 요청 인터셉터 : 토큰 추가
privateApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 : 토큰 만료 시 처리
privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Access Token 만료 시
    if (error.response?.status === 401) {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          // 백엔드 api로 변경 필요
          const { data } = await publicApi.post("/refresh", { refreshToken }); // Refresh Token으로 Access Token 재발급
          // 재발급 받은 Access Token 저장
          localStorage.setItem("accessToken", data.accessToken);

          // 요청 다시 시도
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return privateApi(originalRequest);
        }
      } catch (refreshError) {
        // Refresh Token 만료 시
        localStorage.clear(); // 토큰 제거 (로컬)
        navigate(); // 필요한 페이지로 이동
      }
    }

    return Promise.reject(error);
  }
);
