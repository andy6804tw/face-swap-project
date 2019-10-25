
const imgSource = document.getElementById("img_source");

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
    //   const responseImg = dataObject.result.split("'")[1];
    //   document.getElementById('image').src = `data:image/jpeg;base64,${dataObject.image1}`;
        console.log(dataObject)
        document.getElementById("loading").classList.add("d-none");
    },
      (error) => {
        var message = error.response.data.message;
      }
    );
}