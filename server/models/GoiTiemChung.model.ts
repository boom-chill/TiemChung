import { Schema, model, connect } from 'mongoose';
import { ObjectId } from 'mongoose'
import Vaccine from './Vaccine.model';

interface GoiTiemChung {
    MaGoi: string,
    TenGoi: string,
    SoLuong: number,
    Gia: number,
    TinhTrang: string,
    Vaccines: Array<Vaccine>,
}

const GoiTiemChungSchema = new Schema<GoiTiemChung>(
{
        MaGoi: String,
        TenGoi: String,
        SoLuong: Number,
        Gia: Number,
        TinhTrang: String,
        Vaccines: [
            {
                _id: {
                    type: Schema.Types.ObjectId,
                    ref: 'Vaccine',
                },
            }
        ],
    }
)

const GoiTiemChung = model<GoiTiemChung>('GoiTiemChung', GoiTiemChungSchema)
export default GoiTiemChung
