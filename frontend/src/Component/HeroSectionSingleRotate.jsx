
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import myVideo from "../assets/wct.mp4";

const HeroSectionSingleRotate = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setShowVideo(false);
  };

  useEffect(() => {
    if (!showVideo || !videoRef.current) return;

    const video = videoRef.current;

    // Start every time from the beginning
    video.currentTime = 0;

    // Make sure the video is NOT muted
    video.muted = false;
    video.volume = 1;

    // Try autoplay with sound
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Browser may block autoplay with sound.
        // User can press Play manually.
        console.log("Autoplay with sound was blocked by the browser.");
      }
    };

    // Wait until video is mounted and ready
    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo, { once: true });
    }

    return () => {
      video.removeEventListener("canplay", playVideo);

      video.pause();
      video.currentTime = 0;
    };
  }, [showVideo]);

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/universe2.jpg')" }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* =====================================================
            SHINING SPRINKLE DOTS
        ====================================================== */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          {Array.from({ length: 70 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${
                  2 + Math.random() * 3
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow:
                  "0 0 8px 2px rgba(34, 211, 238, 0.8)",
              }}
            ></span>
          ))}
        </div>

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className="relative md:w-1/2 text-center md:text-left space-y-6 z-10 mb-14">
          <button className="px-6 py-2 bg-blue-500/30 border-2 border-blue-500 text-[15px] text-white font-semibold rounded-full shadow-lg mt-4">
            Web Collection Technology
          </button>

          <h1 className="text-4xl font-extrabold text-white leading-tight">
            We map the land, build the digital,
            train the people, and think in AI.
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed">
            WCT is a Gilgit-Baltistan-rooted technology company working across
            geospatial intelligence, digital services, applied training, and
            AI — built to take Northern Pakistan's institutions, businesses,
            and talent into the digital era.
          </p>

          {/* =====================================================
              VIEW BUTTON
          ====================================================== */}
          <button
            onClick={openVideo}
            className="
              relative
              px-10
              py-3
              bg-black
              text-white
              font-semibold
              rounded
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              border-0
            "
          >
            <span
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(90deg, #2563eb, #3e5a9c, #050608, #2a4694, #2563eb)",
                backgroundSize: "300% 100%",
                animation: "moveColor 20s linear infinite",
              }}
            ></span>

            <span className="absolute inset-[2px] rounded-2xl bg-black/30"></span>

            <span className="relative z-10">View</span>

            <style>{`
              @keyframes moveColor {
                0% {
                  background-position: 0% 50%;
                }

                100% {
                  background-position: 300% 50%;
                }
              }
            `}</style>
          </button>
        </div>

        {/* =====================================================
            RIGHT EARTH + ORBIT
        ====================================================== */}
        <div className="relative md:w-1/2 flex justify-center items-center mt-14 md:mt-0 z-10">
          {/* MAIN CONTAINER */}
          <div
            className="
              relative
              w-[390px]
              h-[390px]
              md:w-[500px]
              md:h-[500px]
              flex
              items-center
              justify-center
            "
          >
            {/* =================================================
                OUTER SILVER LINE
                BLUE BALL MOVES HERE
            ================================================= */}
            <div
              className="
                absolute
                w-[305px]
                h-[305px]
                md:w-[380px]
                md:h-[380px]
                rounded-full
                border-[2px]
                border-slate-300/35
                z-20
              "
              style={{
                boxShadow: `
                  0 0 4px rgba(255,255,255,0.35),
                  0 0 10px rgba(203,213,225,0.25),
                  0 0 20px rgba(255,255,255,0.12)
                `,
              }}
            ></div>

            {/* =================================================
                EARTH
            ================================================= */}
            <img
              id="img"
              src="/earthc.png"
              alt="earthblue"
              className="
                relative
                w-[280px]
                h-[280px]
                md:w-[340px]
                md:h-[340px]
                rounded-full
                object-cover
                border-2
                border-cyan-400
                z-40
              "
              style={{
                animation: "spinEarth 30s linear infinite",
              }}
            />

            {/* =================================================
                GREEN BALL
                MOVES EXACTLY ON EARTH BORDER
                CLOCKWISE
            ================================================= */}
            <div
              className="
                absolute
                w-[280px]
                h-[280px]
                md:w-[340px]
                md:h-[340px]
                rounded-full
                z-50
                pointer-events-none
              "
              style={{
                animation: "greenEarthBorderOrbit 20s linear infinite",
              }}
            >
              <div
                className="
                  absolute
                  top-[-9px]
                  left-1/2
                  -translate-x-1/2
                  w-[18px]
                  h-[18px]
                  md:w-[18px]
                  md:h-[18px]
                  rounded-full
                  bg-green-300
                  border-2
                  border-green-100
                "
                style={{
                  boxShadow: `
                    0 0 5px rgba(187,247,208,1),
                    0 0 12px rgba(74,222,128,0.95),
                    0 0 22px rgba(34,197,94,0.8),
                    0 0 35px rgba(34,197,94,0.5)
                  `,
                }}
              ></div>
            </div>

            {/* =================================================
                BLUE BALL
                OUTER SILVER LINE
                ANTI-CLOCKWISE
            ================================================= */}
            <div
              className="
                absolute
                w-[305px]
                h-[305px]
                md:w-[380px]
                md:h-[380px]
                rounded-full
                z-[60]
                pointer-events-none
              "
              style={{
                animation: "blueOrbitAntiClockwise 20s linear infinite",
              }}
            >
              <div
                className="
                  absolute
                  top-[-10px]
                  left-1/2
                  -translate-x-1/2
                  w-[19px]
                  h-[19px]
                  md:w-[24px]
                  md:h-[24px]
                  rounded-full
                  bg-blue-300
                  border-2
                  border-blue-100
                "
                style={{
                  boxShadow: `
                    0 0 5px rgba(191,219,254,1),
                    0 0 12px rgba(96,165,250,0.95),
                    0 0 22px rgba(37,99,235,0.85),
                    0 0 38px rgba(37,99,235,0.5)
                  `,
                }}
              ></div>
            </div>

            {/* EARTH BOTTOM GLOW */}
            <div
              className="
                absolute
                bottom-[15px]
                w-72
                h-6
                md:w-96
                md:h-8
                bg-cyan-500/40
                rounded-full
                blur-3xl
                z-10
              "
            ></div>
          </div>
        </div>

        {/* =====================================================
            ANIMATIONS
        ====================================================== */}
        <style>{`
          /* EARTH ROTATION */
          @keyframes spinEarth {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          /* GREEN BALL
             MOVES EXACTLY ON EARTH BORDER */
          @keyframes greenEarthBorderOrbit {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          /* BLUE BALL
             MOVES ON OUTER SILVER LINE
             OPPOSITE DIRECTION */
          @keyframes blueOrbitAntiClockwise {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }

          /* TWINKLING STARS */
          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.15;
              transform: scale(0.7);
            }

            50% {
              opacity: 1;
              transform: scale(1.5);
            }
          }

          /* EARTH GLOW */
          #img {
            box-shadow:
              0 0 40px 15px rgba(0, 200, 255, 0.5);
          }
        `}</style>
      </section>

      {/* =====================================================
          VIDEO MODAL
      ====================================================== */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeVideo}
              className="
                absolute
                -top-12
                right-0
                w-10
                h-10
                rounded-full
                bg-blue-500
                hover:bg-cyan-500
                text-white
                text-2xl
                flex
                items-center
                justify-center
                shadow-lg
                z-50
              "
            >
              ✕
            </button>

            {/* =================================================
                ANIMATED VIDEO BORDER
            ================================================= */}
            <motion.div
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="p-[4px] rounded-3xl"
              style={{
                background:
                  "linear-gradient(90deg, #3b82f6, #06b6d4, #22d3ee, #3b82f6)",
                backgroundSize: "300% 300%",
              }}
            >
              {/* =================================================
                  VIDEO BOX
              ================================================= */}
              <div className="bg-black rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,155,255,0.6)]">
                <video
                  ref={videoRef}
                  key={showVideo ? "video-open" : "video-closed"}
                  controls
                  playsInline
                  preload="auto"
                  muted={false}
                  volume={1}
                  className="w-full h-[580px] object-cover bg-black"
                >
                  <source
                    src={myVideo}
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSectionSingleRotate;
