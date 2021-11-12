var barang = [
  {
    inventory_id: 9382,
    name: "Brown Chair",
    type: "furniture",
    tags: ["chair", "furniture", "brown"],
    purchased_at: 1579190471,
    placement: {
      room_id: 3,
      name: "Meeting Room",
    },
  },
  {
    inventory_id: 9380,
    name: "Big Desk",
    type: "furniture",
    tags: ["desk", "furniture", "brown"],
    purchased_at: 1579190642,
    placement: {
      room_id: 3,
      name: "Meeting Room",
    },
  },
  {
    inventory_id: 2932,
    name: "LG Monitor 50 inch",
    type: "electronic",
    tags: ["monitor"],
    purchased_at: 1579017842,
    placement: {
      room_id: 3,
      name: "Lavender",
    },
  },
  {
    inventory_id: 232,
    name: "Sharp Pendingin Ruangan 2PK",
    type: "electronic",
    tags: ["ac"],
    purchased_at: 1578931442,
    placement: {
      room_id: 5,
      name: "Dhanapala",
    },
  },
  {
    inventory_id: 9382,
    name: "Alat Makan",
    type: "tableware",
    tags: ["spoon", "fork", "tableware"],
    purchased_at: 1578672242,
    placement: {
      room_id: 10,
      name: "Rajawali",
    },
  },
];

// for (var key in data) {
//   if (data.hasOwnProperty(key)) {
//     if (data[key].placement([room_id == 3])) {
//       console.log(data[key].name);
//     } else data[key].placement([names == "Meeting Room"]);
//     {
//       console.log(data[key].name);
//     }
//   }
// }

// const question3 = (data) => {
//   let barang = [];
//   let name = [];
//   data.map((item, i) => {
//     for (var key in data) {
//       if (data.hasOwnProperty(key)) {
//         if (data[key].type == "electronic") {
//           console.log(data[key].name);
//         }
//       }
//     }
//   });
// //   return [barang, name];
// };

// nama.question3();

// for (var key in data) {
//   if (data.hasOwnProperty(key)) {
//     if (data[key].type == "electronic") {
//       console.log(data[key].name);
//     }
//   }
// }

// for (var key in data) {
//   if (data.hasOwnProperty(key)) {
//     if (data[key].type == "furniture") {
//       console.log(data[key].name);
//     }
//   }
// }

// for (var key in data) {
//   if (data.hasOwnProperty(key)) {
//     if (data[key].tags == "brown") {
//       console.log(data[key].name);
//     }
//   }
// }

// function cariFurniture(tags) {
//   var tag = 0;
//   for (let i = 0; i < tags.length; i++) {
//     if (data.hasOwnProperty(key)) {
//       if (data[key].tags == "brown") {
//         console.log(data[key].name);
//       }
//     }
//   }

//   return tags.length;
// }

// const questLima = data.type.filter((d) => a >= d.type.includes("furniture"));

// console.log(questLima);

// const cariFurniture = (data) => {
//   let barang = [];
//   let name = [];
//   data.map((item, i) => {
//     if (item.name.type.includes("furnitures")) {
//       barang.push(item);
//       name.push(item.name);
//     }
//   });
//   return [barang, name];
// };

// let newBarang = cariFurniture;
// console.log(newBarang);

const cariItem = barang.filter((barang) => barang.placement.name.includes("Meeting Room"));
console.log(cariItem);

const cariElektronik = barang.filter((barang) => barang.type.includes("electronic"));
console.log(cariElektronik);

const cariFurniture = barang.filter((barang) => barang.type.includes("furniture"));
console.log(cariFurniture);

const cariBrown = barang.filter((barang) => barang.tags.includes("brown"));
console.log(cariBrown);
