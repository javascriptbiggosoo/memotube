export default function extractYouTubeID(url: string): string | undefined {
  // URL에서 'v=' 파라미터를 찾아 영상 ID를 추출합니다.
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/
  );
  if (match && match[1]) {
    // 'v=' 파라미터 뒤에 오는 값이 영상 ID입니다.
    // '&' 또는 공백 이전까지의 문자열을 영상 ID로 반환합니다.
    return match[1].split("&")[0];
  }

  // 올바른 YouTube URL 형식이 아니거나 'v=' 파라미터가 없는 경우 undefined를 반환합니다.
  return undefined;
}
