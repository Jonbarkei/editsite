const videosContainer = document.getElementById('videos');

// Sample video data (replace with your own data or fetch from a server)
const videosData = [
  {
    title: 'Video 1',
    thumbnail: 'https://example.com/video1-thumbnail.jpg',
    url: 'https://example.com/video1.mp4'
  },
  {
    title: 'Video 2',
    thumbnail: 'https://example.com/video2-thumbnail.jpg',
    url: 'https://example.com/video2.mp4'
  },
  {
    title: 'Video 3',
    thumbnail: 'https://example.com/video3-thumbnail.jpg',
    url: 'https://example.com/video3.mp4'
  }
];

// Function to render videos
function renderVideos() {
  videosContainer.innerHTML = '';

  videosData.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';

    const videoTitle = document.createElement('div');
    videoTitle.className = 'video-title';
    videoTitle.textContent = video.title;

    const videoThumbnail = document.createElement('img');
    videoThumbnail.className = 'video-thumbnail';
    videoThumbnail.src = video.thumbnail;

    const videoLink = document.createElement('a');
    videoLink.href = video.url;
    videoLink.target = '_blank';
    videoLink.textContent = 'Watch Video';

    videoItem.appendChild(videoTitle);
    videoItem.appendChild(videoThumbnail);
    videoItem.appendChild(videoLink);

    videosContainer.appendChild(videoItem);
  });
}

// Call the function to render videos
renderVideos();
