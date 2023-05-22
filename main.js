let data = [];
let myarray = JSON.parse(localStorage.getItem("user")) || [];

function saveData(event) {
  event.preventDefault();

  let myarray = JSON.parse(localStorage.getItem("user")) || [];

  let item = document.getElementById("index").value;

  if (item >= 0) {
    myarray[item].name = document.getElementById("name").value;
    myarray[item].country = document.getElementById("country").value;
    myarray[item].salary = document.getElementById("salary").value;
    myarray[item].email = document.getElementById("email").value;
  } else {
    let myobj = {
      name: document.getElementById("name").value,
      country: document.getElementById("country").value,
      salary: document.getElementById("salary").value,
      email: document.getElementById("email").value,
    };
    myarray.push(myobj);
  }

  // for edit the item
  document.getElementById("index").value = -1;
  localStorage.setItem("user", JSON.stringify(myarray));
  display(myarray); // for editData call display() fun
}

// display(); // for saveData call display() fun

// for remove the data
function removeData(index) {
  let myarray = JSON.parse(localStorage.getItem("user")) || [];

  myarray.splice(index, 1);

  localStorage.setItem("user", JSON.stringify(myarray));

  display(myarray); // for remove the data call display()
}

// for edit the data
function editData(index) {
  let myarray = JSON.parse(localStorage.getItem("user")) || [];

  document.getElementById("name").value = myarray[index].name;
  document.getElementById("country").value = myarray[index].country;
  document.getElementById("salary").value = myarray[index].salary;
  document.getElementById("email").value = myarray[index].email;

  document.getElementById("index").value = index;
}

function display(myarray) {
  //console.log(myarray);
  data = myarray;

  let myhtml = data.map((value, index) => {
    return `<tbody><tr><td>${value.name}</td>
                      <td>${value.country}</td>
                      <td>${value.salary}</td>
                      <td>${value.email}</td>
                      <td><button onclick=removeData(${index})
                    class ="btn btn-outline-warning m-2">Delete</button>
                    <button onclick=editData(${index})
                    class = "btn btn-outline-success ms-3">Edit</button></td>
                </tr></tbody>`;
  });

  myhtml.unshift(`<thead> <tr class="text-center"><th>Name </th>
                                      <th> Country </th>
                                      <th> Salary</th>
                                      <th> Email </th>
                                      <th> Action </th>
                                   </tr></thead>`);

  document.getElementById("display").innerHTML = myhtml.join("");
}
display(myarray); // bydefault display function call kiya

// for clear all data define clearData() fun
function clearData() {
  localStorage.clear();
  display(myarray);
}

function searchData() {
  let searchTerm = document.getElementById("searchTerm").value.toLowerCase();
  let myarray = JSON.parse(localStorage.getItem("user")) || [];

  let filteredData = myarray.filter((value) =>
    value.name.toLowerCase().includes(searchTerm)||
    value.email.toLowerCase().includes(searchTerm)
  );

  display(filteredData);
}


