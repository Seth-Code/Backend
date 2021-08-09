const fs = require("fs");
const axios = require("axios");

const filePath = "./data/data.json";

async function fetchQuote() {
  responce = await axios.get("https://api.kanye.rest/");
  console.log(responce.data.quote);
  return responce.data.quote;
}

module.exports = async function kanyeQuoteApp() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const displayDate = `${year}/${month}/${day}`;

  const kanyeData = JSON.parse(fs.readFileSync(filePath));
  const previousDate = kanyeData.date.date;
  // console.log(previousDate);
  const currentDate = date.getTime();
  // console.log(currentDate);
  if (currentDate >= previousDate + 86400000) {
    kanyeData.quote = await fetchQuote();
    // console.log(-"\n", kanyeData, "\n-");
    kanyeData.date.date = date.getTime();
    kanyeData.date.year = year;
    kanyeData.date.month = month;
    kanyeData.date.day = day;
    kanyeData.date.displayDate = displayDate;
    console.log("-\n", kanyeData, "\n-");

    fs.writeFileSync(filePath, JSON.stringify(kanyeData));
    console.log("sending and updating kanyeData");
    return kanyeData;
  }
  fs.writeFileSync(filePath, JSON.stringify(kanyeData));
  console.log("sending kanyeData");
  // console.log(kanyeData);
  return kanyeData;
};

1627673734228;
