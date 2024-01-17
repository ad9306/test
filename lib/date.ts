import dayjs from 'dayjs'

export const now = dayjs()

export function today(){
    const realtoday = now.format("YYYY.MM.DD")

    return realtoday
}

export function year(){
    const realyear = now.format("YYYY")

    return  realyear
}

export function month(){
    const realmonth = now.format("MM")

    return realmonth
}

export function day(){
    const realday = now.format("DD")

    return realday
}
