export default function parseTimeToSeconds(timeString: string) {
  const parts = timeString.split(":").map(Number);
  let seconds = 0;

  if (parts.length === 3) {
    // HH:MM:SS 형식
    seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    // MM:SS 형식
    seconds = parts[0] * 60 + parts[1];
  } else if (parts.length === 1) {
    // SS 형식
    seconds = parts[0];
  }

  return seconds;
}
