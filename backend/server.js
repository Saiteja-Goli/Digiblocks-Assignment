// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");
// const app = express();
// const port = 3001;

// app.use(cors());

// app.get("/", (req, res) => {
//   res.json({ Message: "Welcome To GSTIN" });
// });

// app.get("/api/data", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://api.mastergst.com/public/search?email=saitejagoli111@gmail.com&gstin=${gstin}`,
//       {
//         headers: {
//           client_id: "294a7a5d-f4a3-425e-9780-4e52484010a4",
//           client_secret: "087ace83-d952-4785-8ce1-f32bde187986",
//         },
//       }
//     );

//     res.json(response.data);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ Message: "Welcome To GSTIN" });
});

app.get("/api/data", async (req, res) => {
  const { gstin } = req.query; // Get GSTIN from query parameter
  try {
    const response = await axios.get(
      `https://api.mastergst.com/public/search?email=saitejagoli111%40gmail.com&gstin=${gstin}`,
      {
        headers: {
          client_id: "294a7a5d-f4a3-425e-9780-4e52484010a4",
          client_secret: "087ace83-d952-4785-8ce1-f32bde187986",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
