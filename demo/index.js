const imgBase64 =`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`

document.getElementById('image').src = `data:image/jpeg;base64,${imgBase64}`;


const fileUploader = document.querySelector('#file-uploader');

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
fileUploader.addEventListener('change', async(e) => {
  console.log(await toBase64(e.target.files[0]));
  // console.log(e.target.files[0]); // get file object
});
