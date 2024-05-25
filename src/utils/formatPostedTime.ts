export function formatPostedTime(timestamp: number) {
  const now = new Date().getTime();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 1) {
    return `${seconds}초 전`;
  } else if (hours < 1) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else {
    return `${days}일 전`;
  }
}

// // 사용 예시
// const timestamp = new Date().getTime() - 5 * 60 * 60 * 1000; // 5시간 전
// console.log(timeAgo(timestamp)); // "5시간 전"

// const timestamp2 = new Date().getTime() - 3 * 24 * 60 * 60 * 1000; // 3일 전
// console.log(timeAgo(timestamp2)); // "3일 전"
