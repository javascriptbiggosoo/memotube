// 메모에서 보여지는 시간을 포맷하는 함수
// 예시 출력
// console.log(formatTime(125)); // "02:05"
// console.log(formatTime(3665)); // "01:01:05"
export default function formatTime(seconds: number | string) {
  seconds = Number(seconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  // 분초는 항상 표시, 1시간 미만인 경우 시간은 표시하지 않음
  const formattedTime = [
    hours > 0 ? String(hours).padStart(2, "0") : null,
    String(minutes).padStart(2, "0"),
    String(remainingSeconds).padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");

  return formattedTime;
}
