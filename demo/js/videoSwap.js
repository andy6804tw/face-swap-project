/** Post File */
const addFile = () => {
  // File
  const imageFile = document.getElementById('imageFile').files;
  // const vildeFile = document.getElementById('vildeFile').files;
  if (imageFile.length) {
    document.getElementById("loading").classList.remove("d-none");
    // 上傳 Indicator 檔案
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
        document.getElementById("loading").classList.add("d-none");
      })
  }
}
