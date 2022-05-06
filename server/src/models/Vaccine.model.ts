import { Schema, model, connect, ObjectId } from 'mongoose';

interface Vaccine {
    MaVaccine: string,
    TenVaccine: string,
    SoLuong: number,
    TinhTrang: string,
    Gia: number,
    MaNCU: string,
}

const VaccineSchema = new Schema<Vaccine>(
{
        MaVaccine: String,
        TenVaccine: String,
        SoLuong: Number,
        TinhTrang: String,
        Gia: Number,
        MaNCU: String,
    }
)

const Vaccine = model<Vaccine>('Vaccine', VaccineSchema)
export default Vaccine
