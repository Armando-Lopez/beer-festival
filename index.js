const express = require("express");
const transporter = require("./config");
const dotenv = require("dotenv");
const https = require("https");
const path = require("path");
const cors = require('cors');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client/build/index.html')))


app.get("/api/v1/test", (req, res) => res.send('it works'))

app.post("/api/v1/subcribe", (req, res) => {
  // TODO: VALIDAR CAMPOS REQUERIDOS EN LAS PETICIONES
  try {
    const request = https.request(
      process.env.MAILCHIMP_API,
      {
        method: "POST",
        auth: `${process.env.MAILCHIMP_EMAIL}:${process.env.MAILCHIMP_API_KEY}`,
      },
      function (response) {
        response.on("data", function (data) {
          const responseData = JSON.parse(data);
          console.log(responseData);
          if (responseData?.errors?.length) {
            console.log(responseData.errors[0].error);
            // res.status(400).send({
            //   success: false,
            //   message: responseData.errors[0].error,
            // })
          }
        });
      }
    );
    request.write(
      JSON.stringify({
        members: [
          {
            email_address: req.body.email,
            status: "subscribed",
            merge_fields: {
              FNAME: req.body.firstName,
              LNAME: req.body.lastName,
              CITY: req.body.city,
              PROVINCE: req.body.province,
            },
          },
        ],
      })
    );
    request.end();
    res.send({
      success: true,
      message: "Thanks for contacting us. We will get back to you shortly",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: " Try again later",
    });
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`))