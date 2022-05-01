import { Schema, model, connect } from 'mongoose';
import { ObjectId } from 'mongoose'
import GoiTiemChung from './GoiTiemChung.model';
import Vaccine from './Vaccine.model';

interface HoaDon {
    MaHD: string,
    HinhThucThanhToan: string,
    LanTra: string,
    NgayLap: Date,
    TongTien: number,
    TrangThai: string,
    MaKH: ObjectId,
    DSGoiTiemChung: Array<GoiTiemChung>,
    DSVaccine: Array<Vaccine>,
}

const HoaDonSchema = new Schema<HoaDon>(
    {
        MaHD: String,
        HinhThucThanhToan: String,
        LanTra: String,
        NgayLap: Date,
        TongTien: Number, 
        MaKH: {
            type: Schema.Types.ObjectId,
            ref: 'KhachHang'
        },
        DSVaccine: [
            {
                MaVaccine: {
                    type: Schema.Types.ObjectId,
                    ref: 'Vaccine',
                },
                SoLuong: Number,
            }
        ],
        DSGoiTiemChung: [
            {
                MaGoiTiemChung: {
                    type: Schema.Types.ObjectId,
                    ref: 'GoiTiemChung',
                },
                SoLuong: Number,
            }
        ],
    }
)

const HoaDon = model<HoaDon>('HoaDon', HoaDonSchema)
export default HoaDon
