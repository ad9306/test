//과장님이 주신 코드

async function TEST(data = fetchdatas) {

  try {
      fetch("/api/post", {
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
          },
          method: "POST",
      })
          .then((response) => response.status === 404 ? alert("서버에러") : response.json())

          // .then((response) => response.json())

          .then((result) => alert(result))
  } catch (error) {
      throw (alert("서버에러"));
  }

}