import { Schema, model, connect } from 'mongoose';
import Vaccine from './Vaccine.model';

interface PhieuDatHang {
    MaPhieu: string,
    LanTra: string,
    NgayLap: Date,
    TongTien: number,
    Vaccines: Array<Vaccine>,
}

const PhieuDatHangSchema = new Schema<PhieuDatHang>(
    {
        MaPhieu: String,
        NgayLap: Date,
        TongTien: Number,
        Vaccines: [
            {
                _id: {
                    type: Schema.Types.ObjectId,
                    ref: 'Vaccine',
                },
                SoLuong: Number,
            }
        ],
    }
)

const PhieuDatHang = model<PhieuDatHang>('HoaDon', PhieuDatHangSchema)
export default PhieuDatHang
