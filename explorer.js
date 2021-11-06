const Twilio = require("twilio");
const client = new Twilio(
  "AC122b9715ecd64dc93f9c00a049c0e5fa",
  "2929765443d4b9dab3362b9d5c9ed731"
);

client.messages
  .list()
  .then((messages) =>
    console.log(`The most recent message is ${messages[0].body}`)
  ).catch((err) => console.log(err));
