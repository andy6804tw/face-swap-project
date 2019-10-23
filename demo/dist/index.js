const imgBase64 = ``
document.getElementById('image').src = `data:image/jpeg;base64,${imgBase64}`;


const fileUploader = document.querySelector('#file-uploader');
const dst_img = document.getElementById("dst_img");

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
fileUploader.addEventListener('change', async (e) => {

  // console.log(e.target.files[0]); // get file object
});



const postImage = async () => {
  const file1 = await toBase64(fileUploader.files[0]);
  const image1 = file1.split(",")[1];
  const file2 = await toBase64(dst_img.files[0]);
  const image2 = file2.split(",")[1];
  // console.log(image1);
  axios.post(`http://localhost:5000/swap`, {
    image1,
    image2
  })
    .then((response) => {
      var dataObject = response.data;
      // POST success
      const responseImg = dataObject.result.split("'")[1];
      document.getElementById('image').src = `data:image/jpeg;base64,${responseImg}`;
    },
      (error) => {
        var message = error.response.data.message;
      }
    );
}
