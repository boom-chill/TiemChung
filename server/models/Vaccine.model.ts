import { Schema, model, connect, ObjectId } from 'mongoose';

interface Vaccine {
    MaVaccine: string,
    TenVaccine: string,
    SoLuong: number,
    TinhTrang: string,
    Gia: number,
    MaNCU: ObjectId
}

const VaccineSchema = new Schema<Vaccine>(
{
        MaVaccine: String,
        TenVaccine: String,
        SoLuong: Number,
        TinhTrang: String,
        Gia: Number,
        MaNCU: {
            type: Schema.Types.ObjectId,
            ref: 'NhaCungUng',
        }
    }
)

const Vaccine = model<Vaccine>('Vaccine', VaccineSchema)
export default Vaccine
