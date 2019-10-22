/** Post File */
const addFile = () => {
  // File
  const imageFile = document.getElementById('imageFile').files;
  const vildeoFile = document.getElementById('videoFile').files;
  if (imageFile.length && vildeoFile.length) {
    document.getElementById("loading").classList.remove("d-none");
    // 上傳 Image 檔案
    const formData = new FormData();
    formData.append("imageFile", imageFile[0]);
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
            document.getElementById("loading").classList.add("d-none");
          })
      })
  }
}
