slider = new juxtapose.JXSlider('.compare',
  [
    {
      src: './../FaceSwap-model/imgs/test11.jpg',
      label: 'Before',
      // credit: 'Image Credit'
    },
    {
      src: './../API/FaceSwap/results/myOut.jpg',
      label: 'After',
      // credit: "Image Credit"
    }
  ],
  {
    animate: true,
    showLabels: true,
    showCredits: true,
    startingPosition: "50%",
    makeResponsive: true
  });


  setTimeout(function(){
    document.getElementsByClassName("jx-knightlab")[0].remove();
  },500)

