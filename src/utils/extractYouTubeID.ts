export default function extractYouTubeID(url: string): string | undefined {
  // URL에서 도메인과 경로를 제외한 모든 부분을 제거합니다.
  url = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)[2];

  if (url !== undefined) {
    // URL에 쿼리 문자열이나 추가 경로가 있는 경우 처리합니다.
    return url.split(/[^0-9a-z_\-]/i)[0];
  }

  // 올바른 YouTube URL 형식이 아닌 경우 undefined를 반환할 수 있습니다.
  return undefined;
}
