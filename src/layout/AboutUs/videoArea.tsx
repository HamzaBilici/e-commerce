import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const VideoArea = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-white py-12 lg:py-24 flex justify-center items-center">
      <div className="max-w-262.5 w-full px-12 lg:px-8">
        <div className="relative w-full aspect-square lg:aspect-video rounded-[20px] overflow-hidden shadow-2xl group">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://placehold.co/1200x675/2D3E50/white?text=Video+Poster"
            onClick={togglePlay}
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Tarayıcınız video etiketini desteklemiyor.
          </video>

          {!isPlaying && (
            <div className="absolute inset-0 flex justify-center items-center bg-black/20">
              <button
                onClick={togglePlay}
                className="w-24 h-24 lg:w-28 lg:h-28 bg-[#23A6F0] rounded-full flex justify-center items-center shadow-lg hover:scale-110 transition-transform"
              >
                <Play size={32} fill="white" color="white" />
              </button>
            </div>
          )}

          {isPlaying && (
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
              <button onClick={togglePlay}>
                <Pause size={48} color="white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoArea;
