const localVideo = document.getElementById('localVideo');

const startDefault = () => getMedia({ video: true, audio: true }); 

const startVGA = () => getMedia({ video: { width: 640, height: 480 }, audio: true });

const startHD = () => getMedia({ video: { width: 1280, height: 720 }, audio: true });

const startFullHD = () => getMedia({ video: { width: 1920, height: 1080 }, audio: true });

const stop = () => {
  if (!localVideo.srcObject) return;

  for (const track of localVideo.srcObject.getTracks()) {
    track.stop();
  }
};

const getMedia = async (constraints) => {
  try {
    console.log('getMedia constraints: ', constraints);
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    localVideo.srcObject = mediaStream;
  } catch (error) {
    alert('failed to get media devices, see console for error');
    console.error(error);
  }
};
