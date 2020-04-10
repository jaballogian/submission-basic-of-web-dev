const barang = {
  namaBarang: null,
  hargaBarang: null
};

const listBarang = ["Kemaja", "Kaos", "Jaket", "Topi",
                    "Celana Panjang", "Celana Pendek", "Rok", "Jeans",
                    "Sepatu Sneakers", "Sepatu Gunung", "Sepatu Boots", "Kaos Kaki"];

const listHarga = ["500.000", "300.000", "700.000", "200.000",
                   "600.000", "200.000", "500.000", "900.000",
                   "400.000", "800.000", "600.000", "100.000"];

const listIDButton = [];
for(let i = 0; i < listBarang.length; i++){
  listIDButton[i] = i + "x";
}

const listButton = document.querySelectorAll(".buyButton");
for(let button of listButton){
  button.addEventListener('click', function(event) {

    const target = event.target;

    for(let i = 0; i < listButton.length; i++){

      if(target.classList.contains(listIDButton[i])){

        barang.namaBarang = listBarang[i];
        barang.hargaBarang = listHarga[i];

        let historyList = document.querySelector("#historyPembelian");

        let row = document.createElement('tr');
        row.innerHTML = "<td>" + barang.namaBarang + "</td>";
        row.innerHTML += "<td>" + barang.hargaBarang + "</td>";

        historyList.appendChild(row);
      }
    }
  });
}
