export function extractYouTubeThumbnailUrl(videoId: string) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return thumbnailUrl;
}

export default extractYouTubeThumbnailUrl;
