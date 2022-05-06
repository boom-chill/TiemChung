import express, { Express, Request, Response } from 'express';
import mongoose, { Schema, model, connect } from 'mongoose';
import { json } from 'body-parser'
import dotenv from 'dotenv'
import KhachHang from './models/KhachHang.model';
import cors from 'cors'
import Vaccine from './models/Vaccine.model';
import GoiTiemChung from './models/GoiTiemChung.model';
import HoSoDangKiTiemChung from './models/HoSoDangKiTiemChung.model';
import { dangKiTiemChungVaccine, DSKhachHang, hoSoKhachHang, khachHang, dangKiTiemChungGoi } from './controller/khachhang';
import { goiTiemChung, vaccine } from './controller/vaccine';
const router = express.Router()

dotenv.config()

const app: Express = express()
const PORT = 5000
const DB_URL = process.env.DB_API

app.use(json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/TiemChung' ).then(
    () => app.listen(PORT, () => {
        console.log(`running server on port ${PORT}`);
    })
)

app.get('/', (req, res) => {
    res.send('hello')
})


app.get('/khachhang',DSKhachHang)

app.get('/khachhang/:id', khachHang)

app.get('/ho-so-dang-ki-tc/:id', hoSoKhachHang)

app.get('/vaccine', vaccine)

app.get('/goi-tiem-chung', goiTiemChung)

app.post('/dang-ki-tc/:id',dangKiTiemChungVaccine)

app.post('/dang-ki-tc-gtc/:id', dangKiTiemChungGoi)
