const Phone = require("./models").Phone;

Phone.create({
  model: "iPhone 13",
  year: 2021,
  ram: 6,
  processor: "A15 Bionic",
  nfc: true,
})
  .then((phone) => {
    console.log("Phone created successfully:", phone);
  })
  .catch((error) => {
    console.error("Error creating phone:", error);
  });

const year = 2022;

Phone.findAll({
  where: {
    year: year,
  },
}).then((phones) => console.log("Phones: ", phones)).catch(error => console.error(`Error: ${error}`))