const products = [
    {
      id: 1,
      title: "One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
      price: "$1.99",
      image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      category: "category",
    },
    {
      id: 2,
      title: "Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
      price: "$2.99",
      image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      category: "category",
    },
    {
      id: 3,
      title: "Three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
      price: "$3.99",
      pictureUrl: `${process.env.PUBLIC_URL}/assets/1.png`,
      category: "category",
    },
  ];

  const getData = new Promise((resolve, reject) => {
  let afterPromises = true;
   // let afterPromises = false; 
  setTimeout(() => {
    if (afterPromises) {
      resolve(products);
    } else {
      reject("Failed to get data");
    }
  }, 2000);
});  

export default getData;