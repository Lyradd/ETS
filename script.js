const ElementID = document.getElementById("result");
const apiUrl = "http://159.223.51.203/api/bio";

function Card(name, id) {
  const outer = document.createElement("div");
  outer.classList.add("col-lg-2", "col-md-3", "col-sm-12", "col-12", "mb-3");
  outer.style.marginTop = "20px";

  const cardStyle = document.createElement("div");
  cardStyle.classList.add(
    "card",
    "border-left-primary",
    "shadow",
    "h-120",
    "py-3"
  );
  cardStyle.style.borderRadius = "5px";

  const body = document.createElement("div");
  body.classList.add("card-body");

  const content = document.createElement("div");
  content.classList.add("row", "no-gutters", "align-items-center");

  const column = document.createElement("div");
  column.classList.add("col", "mr-5");

  const title = document.createElement("div");
  title.classList.add("text-xs", "font-weight-bold", "text-primary", "mb-1");
  title.textContent = name;
  title.style.marginRight = "8px";

  const value = document.createElement("div");
  value.classList.add("h6", "mb-1", "font-weight-normal", "text-black");
  value.textContent = id;

  column.appendChild(title);
  column.appendChild(value);
  content.appendChild(column);
  body.appendChild(content);
  cardStyle.appendChild(body);
  outer.appendChild(cardStyle);
  ElementID.appendChild(outer);
}
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response error");
    }
    return response.json();
  })
  .then((data) => {
    for (let index = 0; index < 20; index++) {
      const name = data[index].name;
      const id = data[index].id;
      Card(name, id);
    }
  })
  .catch((error) => console.error("Error:", error));
