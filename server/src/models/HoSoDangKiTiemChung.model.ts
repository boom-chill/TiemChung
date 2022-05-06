import { Schema, model, connect, ObjectId } from 'mongoose';
import GoiTiemChung from './GoiTiemChung.model';
import Vaccine from './Vaccine.model';

interface HoSoDangKiTiemChung {
    MaHoSoDangKiTiemChung: string
    MaKH: string,
    NgayLap: Date,
    TongTien: number,
    DSVaccine: Array<any>,
    DSGoiTiemChung: Array<any>,
    Gia: number,
}

const HoSoDangKiTiemChungSchema = new Schema<HoSoDangKiTiemChung>(
    {
        MaHoSoDangKiTiemChung: String,
        MaKH: String,
        DSVaccine: [
            {
                MaVaccine: String,
                SoLuong: Number,
                TrangThai: String,
                NgayHenTiem: Date,
                Gia: Number,
            }
        ],
        DSGoiTiemChung: [
            {
                MaGoiTiemChung: String,
                SoLuong: Number,
                TrangThai: String,
                NgayHenTiem: Date,
                Gia: Number,
            }
        ],
        NgayLap: Date,
        TongTien: Number,
    }
)

const HoSoDangKiTiemChung = model<HoSoDangKiTiemChung>('HoSoDangKiTiemChung', HoSoDangKiTiemChungSchema)
export default HoSoDangKiTiemChung
