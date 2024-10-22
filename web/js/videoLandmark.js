let videoName = ''

/** Post File */
const addFile = () => {
    // File
    const vildeoFile = document.getElementById('videoFile').files;
    if (vildeoFile.length) {
      document.getElementById("loading").classList.remove("d-none");
      // 上傳 Image 檔案
      const formData = new FormData();
      videoName=`srcVideo.${vildeoFile[0].name.split(".")[1]}`;
      formData.append("videoFile", vildeoFile[0]);
      formData.append("fileName", videoName);
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
          axios.post(`http://localhost:5000/alignment/landmark/video`,
            {
              videoName
            }
          ).then((response) => {
              const dataObject = response.data;
              console.log(dataObject);
              // Render source video
              const videoPlayerSrc = document.getElementById("videoPlayer-src");
              videoPlayerSrc.innerHTML = '';
              videoPlayerSrc.classList.remove("d-none");
              const playerSrc = videojs('videoPlayer-src', {
                sources: [{ src: `http://localhost:5000/static/${videoName}` }],
                loop: false,
                autoplay: 'muted',
                controls: true
              });
              // Render result video
              const videoPlayerRes = document.getElementById("videoPlayer-res");
              videoPlayerRes.innerHTML = '';
              videoPlayerRes.classList.remove("d-none");
              const playerRes = videojs('videoPlayer-res', {
                sources: [{ src: `http://localhost:5000/static/${dataObject.token}-out.mp4` }],
                loop: false,
                autoplay: 'muted',
                controls: true
              });
              document.getElementById("loading").classList.add("d-none");
            },
              (error) => {
                var message = error.response.data.message;
              }
            );
        })
    }
  }
  
  
  