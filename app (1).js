const express = require("express");
const app = express();

// GET semua mahasiswa
app.get("/mahasiswa", (req, res) => {
    const data = [
        { id: 1, nama: "Yanti", prodi: "Informatika" },
        { id: 2, nama: "Yanto", prodi: "Mesin" },
    ];
    res.json(data);
});

// POST tambah mahasiswa
app.use(express.json());

app.post("/mahasiswa", (req, res) => {
    const { nama, prodi } = req.body;

    res.status(201).json({
        pesan: "Ditambahkan!",
        nama,
        prodi
    });
});

app.listen(3000, () => console.log("Express di port 3000"));