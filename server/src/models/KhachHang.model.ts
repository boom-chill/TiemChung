import { Schema, model, connect } from 'mongoose';

interface KhachHang {
    MaKH: string,
    CMND: string,
    TenKH: string,
    DiaChi: string,
    GioiTinh: string,
    SDT: string,
    NgaySinh: Date,
    NguoiGiamHo: NguoiGiamHo,
}

interface NguoiGiamHo {
    TenNguoiGiamHo: string,
    NgaySinh: Date,
    GioiTinh: string,
}


const KhachHangSchema = new Schema<KhachHang>(
    {
        MaKH: String,
        CMND: String,
        TenKH: String,
        DiaChi: String,
        GioiTinh: String,
        SDT: String,
        NgaySinh: Date,
        NguoiGiamHo: {
            TenNguoiGiamHo: String,
            NgaySinh: Date,
            GioiTinh: String,
            required: false,
        }
    }
)

const KhachHang = model<KhachHang>('KhachHang', KhachHangSchema)
export default KhachHang
