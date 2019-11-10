let videoName=''
let imageName=''

/** Post File */
const addFile = () => {
  // File
  const imageFile = document.getElementById('imageFile').files;
  const vildeoFile = document.getElementById('videoFile').files;
  if (imageFile.length) {
    document.getElementById("loading").classList.remove("d-none");
    // 上傳 Image 檔案
    const formData = new FormData();
    imageName=`srcImage.${imageFile[0].name.split(".")[1]}`;
    formData.append("imageFile", imageFile[0]);
    formData.append("fileName", imageName);
    document.getElementById("loading").classList.remove("d-none");
    axios.post(`http://127.0.0.1:5000/upload`, formData,
      {
        headers: {
          'content-type': 'mutipart/form-data'
        }
      })
      .then(function (response) {
        var dataObject = response.data;
        console.log(dataObject);
        const formData = new FormData();
        if (vildeoFile.length){
          videoName=`srcVideo.${vildeoFile[0].name.split(".")[1]}`;
          formData.append("videoFile", vildeoFile[0]);
          formData.append("fileName", videoName);
        }
        else {
          const recordFile = new File([recordedBlob], "webm");
          videoName='srcVideo.webm'
          formData.append("videoFile", recordFile);
          formData.append("fileName", videoName);
        }
        document.getElementById("loading").classList.remove("d-none");
        axios.post(`http://127.0.0.1:5000/upload`, formData,
          {
            headers: {
              'content-type': 'mutipart/form-data'
            }
          })
          .then(function (response) {
            var dataObject = response.data;
            console.log(dataObject);
            axios.post(`http://localhost:5000/swap/video`,
              {
                imageName,
                videoName
              }
            ).then((response) => {
                const dataObject = response.data;
                console.log(dataObject);
                // Render result video
                const videoPlayer = document.getElementById("videoPlayer");
                videoPlayer.innerHTML = '';
                videoPlayer.classList.remove("d-none");
                const player = videojs('videoPlayer', {
                  sources: [{ src: `http://localhost:5000/static/${dataObject.token}-out.mp4` }],
                  loop: false,
                  autoplay: 'muted',
                  // width: "720",
                  controls: true
                });
                document.getElementById("loading").classList.add("d-none");
                window.location.href = '#showResult';
              },
                (error) => {
                  var message = error.response.data.message;
                }
              );
          })
      })
  }
}

// const videoPlayer = document.getElementById("videoPlayer");
// videoPlayer.innerHTML = '';
// const source = document.createElement("source");
// source.setAttribute('src', "http://localhost:5000/static/out.mp4");
// videoPlayer.load();
// videoPlayer.play();
// videoPlayer.appendChild(source);
// videoPlayer.classList.remove("d-none");

// const videoPlayer = document.getElementById("videoPlayer");
// videoPlayer.innerHTML = '';
// videoPlayer.classList.remove("d-none");
// const player = videojs('videoPlayer', {
//   sources: [{ src: "http://localhost:5000/static/out.mp4" }],
//   loop: false,
//   autoplay: 'muted',
//   width: "720",
//   controls: true
// });



