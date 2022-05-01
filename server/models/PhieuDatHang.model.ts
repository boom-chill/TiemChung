import { Schema, model, connect } from 'mongoose';
import Vaccine from './Vaccine.model';

interface PhieuDatHang {
    MaPhieu: string,
    LanTra: string,
    NgayLap: Date,
    TongTien: number,
    TrangThai: string,
    DSVaccine: Array<Vaccine>,
}

const PhieuDatHangSchema = new Schema<PhieuDatHang>(
    {
        MaPhieu: String,
        NgayLap: Date,
        TongTien: Number,
        TrangThai: String,
        DSVaccine: [
            {
                MaVaccine: {
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
