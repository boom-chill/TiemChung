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
    GoiTiemChungs: Array<GoiTiemChung>,
    Vaccines: Array<Vaccine>,
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
        Vaccines: [
            {
                _id: {
                    type: Schema.Types.ObjectId,
                    ref: 'Vaccine',
                },
                SoLuong: Number,
            }
        ],
        GoiTiemChungs: [
            {
                _id: {
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
