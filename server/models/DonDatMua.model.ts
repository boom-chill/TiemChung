import { Schema, model, connect } from 'mongoose';
import Vaccine from './Vaccine.model';

interface DonDatMua {
    MaPhieu: string,
    LanTra: string,
    NgayLap: Date,
    TongTien: number,
    TrangThai: string,
    DSVaccine: Array<Vaccine>,
}

const DonDatMuaSchema = new Schema<DonDatMua>(
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

const DonDatMua = model<DonDatMua>('DonDatMua', DonDatMuaSchema)
export default DonDatMua
