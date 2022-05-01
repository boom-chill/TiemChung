import { Schema, model, connect, ObjectId } from 'mongoose';
import GoiTiemChung from './GoiTiemChung.model';
import Vaccine from './Vaccine.model';

interface HoSoDangKiTiemChung {
    MaHoSoDangKiTiemChung: string
    MaKH: ObjectId,
    NgayLap: Date,
    TongTien: number,
    DSVaccine: Array<Vaccine>,
    DSGoiTiemChung: Array<GoiTiemChung>
}

const HoSoDangKiTiemChungSchema = new Schema<HoSoDangKiTiemChung>(
    {
        MaHoSoDangKiTiemChung: String,
        MaKH:   {
            type: Schema.Types.ObjectId,
            ref: 'KhachHang',
        },
        DSVaccine: [
            {
                MaVaccine: {
                    type: Schema.Types.ObjectId,
                    ref: 'Vaccine',
                },
                SoLuong: Number,
                TrangThai: String,
                NgayHenTiem: Date,

            }
        ],
        DSGoiTiemChung: [
            {
                MaGoiTiemChung: {
                    type: Schema.Types.ObjectId,
                    ref: 'GoiTiemChung',
                },
                SoLuong: Number,
                TrangThai: String,
                NgayHenTiem: Date,
            }
        ],
        NgayLap: Date,
        TongTien: Number,
    }
)

const HoSoDangKiTiemChung = model<HoSoDangKiTiemChung>('HoaDon', HoSoDangKiTiemChungSchema)
export default HoSoDangKiTiemChung
