import express from "express";

const app = express(); // library exress initilized

const PORT = 5500;

app.use("/", (req, res) => {
    res.status(200).json({
        message: "Hello Saskia dan Fazilla!! ",
    });
});

app.use("*", (req, res) => {
    res.status(404).json({
        message: "not found",
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});