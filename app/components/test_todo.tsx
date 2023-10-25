
async function getTest(data: any)  {

  try {
      fetch("/api/gettodo", {method: "GET"})
        .then((response) => response.json())

        .then((result) => alert(result))
  } catch (error) {
      throw (alert("서버에러"));
  }

}