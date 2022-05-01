import { Schema, model, connect } from 'mongoose';
import Vaccine from './Vaccine.model';

interface NhaCungUng {
    MaNCU: string,
    TenNCU: string,
}

const NhaCungUngSchema = new Schema<NhaCungUng>(
    {
        MaNCU: String,
        TenNCU: String,
    }
)

const NhaCungUng = model<NhaCungUng>('HoaDon', NhaCungUngSchema)
export default NhaCungUng
