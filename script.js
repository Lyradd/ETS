const ElementID = document.getElementById("result");
const Url = "http://159.223.51.203:81/api/bio";

function Card(name, id) {
  //styling cards
  const cardHTML = `
      <div class="col-lg-2 col-md-3 col-sm-12 col-12 mb-3" style="margin-top: 20px;">
        <div class="card border-left-primary shadow h-100 py-3" style="border-radius: 5px;">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-5">
                <div class="text-xs font-weight-bold text-primary mb-1" style="margin-right: 10px;">
                  ${name}
                </div>
                <div class="h6 mb-1 font-weight-normal text-black">${id}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

  ElementID.innerHTML += cardHTML;
}

fetch(Url)
  .then((response) =>
    // menangkap response
    {
      if (!response.ok) {
        //chek status
        throw new Error("Network response error");
      }
      return response.json(); //return jika ok
    }
  )
  .then(
    (
      data //menangkap data json
    ) => {
      for (let index = 0; index < 11; index++) // karna ada 11 data dalam api
      {
        const name = data[index].name;
        const id = data[index].id;
        Card(name, id); //panggil fungsi cards
      }
    }
  )
  .catch((error) => console.error("Error:", error)); //menangkap error
