/** Post File */
const addFile = () => {
    // File
    const vildeoFile = document.getElementById('videoFile').files;
    if (vildeoFile.length) {
      document.getElementById("loading").classList.remove("d-none");
      // 上傳 Image 檔案
      const formData = new FormData();
      formData.append("videoFile", vildeoFile[0]);
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
          axios.get(`http://localhost:5000/alignment/landmark/video`)
            .then((response) => {
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
                height: "350",
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
  
  
  