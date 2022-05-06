import GoiTiemChung from "../models/GoiTiemChung.model"
import Vaccine from "../models/Vaccine.model"

export const vaccine = async (req: any, res: any) => {
    try {
        const DSVaccine: Array<Vaccine> = await Vaccine.find()
        res.send(DSVaccine)
    } catch (error) {
        console.log(error)
    }
}

export const goiTiemChung = async (req: any, res: any) => {
    try {
        const DSGoiTiemChung: GoiTiemChung[] = await GoiTiemChung.find()
        const DSGoiTiemChungMoi = JSON.parse(JSON.stringify(DSGoiTiemChung))

        for(let i = 0; i < DSGoiTiemChung.length; i++) {
            const DSVaccineMoi: Vaccine[] = []
            const DSVaccine = DSGoiTiemChung[i].DSVaccine

            for(let j = 0; j < DSVaccine.length; j++) {

                const vaccine: Vaccine | null = await Vaccine.findOne({MaVaccine: DSVaccine[j].MaVaccine}, {_id: 0})
                if(vaccine) DSVaccineMoi.push(vaccine)
            }
            
            DSGoiTiemChungMoi[i].DSVaccine = DSVaccineMoi
        }

        res.send(DSGoiTiemChungMoi)
    } catch (error) {
        console.log(error)
    }
}