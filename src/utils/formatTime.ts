export default function formatTime(seconds: number | string) {
  seconds = Number(seconds);
  const hours = Math.floor(seconds / 3600); // 시간 계산
  const minutes = Math.floor((seconds % 3600) / 60); // 남은 분 계산
  const remainingSeconds = Math.floor(seconds % 60); // 남은 초 계산, 소수점 제거

  // 시간이 0인 경우 시간을 표시하지 않음
  const formattedTime = [
    hours > 0 ? String(hours).padStart(2, "0") : null,
    String(minutes).padStart(2, "0"),
    String(remainingSeconds).padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");

  return formattedTime;
}

// 예시 출력
console.log(formatTime(125)); // "02:05"
console.log(formatTime(3665)); // "01:01:05"
