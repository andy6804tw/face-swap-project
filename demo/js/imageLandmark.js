
const imgSource = document.getElementById("imgSource");

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
const postImage = async () => {
    document.getElementById("loading").classList.remove("d-none");
    const file1 = await toBase64(imgSource.files[0]);
    const image = file1.split(",")[1];
    axios.post(`http://localhost:5000/alignment/landmark`, {
    image
  })
    .then((response) => {
      var dataObject = response.data;
      // POST success
      const responseImg = dataObject.result.split("'")[1];
      const srcImg=dataObject.image;
      document.getElementById('imgSrc').src=`data:image/jpeg;base64,${srcImg}`;
      document.getElementById('imgRes').src = `data:image/jpeg;base64,${responseImg}`;
      document.getElementById("loading").classList.add("d-none");
      window.location.href = '#showResult';
    },
      (error) => {
        var message = error.response.data.message;
      }
    );
}