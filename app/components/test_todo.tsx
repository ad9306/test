
// async function TEST(data =  {

//   try {
//       fetch("/api/gettodo", {
//           body: JSON.stringify(data),
//           headers: {
//               "Content-Type": "application/json",
//           },
//           method: "POST",
//       })
//           .then((response) => response.status === 404 ? alert("서버에러") : response.json())

//           // .then((response) => response.json())

//           .then((result) => alert(result))
//   } catch (error) {
//       throw (alert("서버에러"));
//   }

// }