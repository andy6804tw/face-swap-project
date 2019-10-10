slider = new juxtapose.JXSlider('.compare',
  [
    {
      src: './image/1.jpg',
      label: 'Before',
      // credit: 'Image Credit'
    },
    {
      src: './image/2.jpg',
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



