import { Schema, model, connect } from 'mongoose';
import Vaccine from './Vaccine.model';

interface NhaCungUng {
    MaNCU: string,
    TenNCU: string,
    SDT: string,
}

const NhaCungUngSchema = new Schema<NhaCungUng>(
    {
        MaNCU: String,
        TenNCU: String,
        SDT: String,
    }
)

const NhaCungUng = model<NhaCungUng>('NhaCungUng', NhaCungUngSchema)
export default NhaCungUng
