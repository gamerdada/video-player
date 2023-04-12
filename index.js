import videojs from "video.js";

import "video.js/dist/video-js.css";

import "videojs-contrib-quality-levels";
import "videojs-http-source-selector";

const options = {
  muted: true,
  language: "en",
  preload: "auto",
  fluid: true,
  html5: {
    hls: {
      overrideNative: true,
      limitRenditionByPlayerDimensions: true,
      useDevicePixelRatio: true
      // bandwidth: 16777216,
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false,
    useBandwidthFromLocalStorage: true
  },
  controlBar: {
    pictureInPictureToggle: false
  }
};

const video = videojs("player", options, () => {
  let element = document.querySelector(".demo");
  element.style.opacity = "1";
});
video.httpSourceSelector();
