import { Schema, model, connect } from 'mongoose';
import { ObjectId } from 'mongoose'
import Vaccine from './Vaccine.model';

interface GoiTiemChung {
    MaGoiTiemChung: string,
    TenGoi: string,
    SoLuong: number,
    Gia: number,
    TinhTrang: string,
    DSVaccine: Array<Vaccine>,
}

const DSGoiTiemChungSchema = new Schema<GoiTiemChung>(
{
        MaGoiTiemChung: String,
        TenGoi: String,
        SoLuong: Number,
        Gia: Number,
        TinhTrang: String,
        DSVaccine: [
            {
                MaVaccine: String,
            }
        ],
    }
)

const GoiTiemChung = model<GoiTiemChung>('GoiTiemChung', DSGoiTiemChungSchema)
export default GoiTiemChung
