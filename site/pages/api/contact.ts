import axios from "axios";

export default function contact(req) {
  console.log(req);
  const { email, zip } = req.query;
  return axios
    .post(
      "https://api.airtable.com/v0/appLCQ7R1qR4sb1m4/OaklandForPeople",
      {
        records: [
          {
            fields: {
              Email: email,
              zipcode: zip,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AIR_TABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    .catch(console.error);
}
