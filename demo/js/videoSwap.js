/** Post File */
const addFile = () => {
  // File
  const imageFile = document.getElementById('imageFile').files;
  const vildeFile = document.getElementById('vildeFile').files;
  if (person_id !== '') {
    document.getElementById("loading").classList.remove("d-none");
    axios.post(`${domain}/data`, {
      person_id
    })
      .then((response) => {
        var dataObject = response.data;
        console.log(dataObject)
      },
        (error) => {
          var message = error.response.data.message;
        }
      );
  }
}
