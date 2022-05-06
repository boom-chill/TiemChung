export const dateFormat = (value: string | undefined) => {
    if(!value) return
    const dateSplit: string = value.split('T')[0]
    const year: string = dateSplit.split('-')[0]
    const month: string = dateSplit.split('-')[1]
    const date: string = dateSplit.split('-')[2]
    return `${date}/${month}/${year}`
}