export const formatDate = (originalDate: Date) => {
    const date1 = new Date(originalDate)
    const date2 = new Date()
    const diffTime = Math.abs(Number(date2) - Number(date1))
    const finalTime = Number((diffTime / 1000 / 60).toFixed(0))
    if (finalTime < 60) {
        return `${finalTime}m`
    }
    if (finalTime >= 60 && finalTime <= 1440) {
        return `${Math.floor(finalTime / 60).toFixed(0)}h`
    }
    if (finalTime > 1440) {
        return `${(finalTime / 60 / 24).toFixed(0)}d`
    }
}

export function formatToBRL(value: string | number): string {
    return value ? Number(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    }) : 'Não disponível'
}

export function formatName(value) {
    return value && value.replace(/[^[a-zA-Zà-ú-'\s]/g, '')
}

export function formatToOnlyDigits(value) {
    return value && value.replace(/[^0-9]+/g, '')
}

export function formatPhone(number) {
    if (!number) return number

    number = number.replace(/[^0-9]+/g, '')
    if (number.length > 2) {
        number = '(' + number.substring(0, 2) + ') ' + number.substring(2)
    }
    if (number.length > 6) {
        number = number.substring(0, 6) + ' ' + number.substring(6)
    }
    if (number.length > 11) {
        number = number.substring(0, 11) + '-' + number.substring(11, 15)
    } //(XX) X XXXX-XXXX

    return number
}

export function formatDateString(date) {
    const date_arr = date.split('/')

    const dd = date_arr[0]
    const mm = date_arr[1]
    const yyyy = date_arr[2]

    return yyyy + '-' + mm + '-' + dd
}

export function hideEmail(email: string) {
    const emailSplitted: string[] = email.split('@')
    return [[...emailSplitted[0]].map((c: string, i: number): string =>
        i >= email.length / INITIAL_PERCENTAGE_TO_HIDE &&
            i <= email.length / FINAL_PERCENTAGE_TO_HIDE
            ? `${(i !== emailSplitted[0].length - 1 ? '*' : '*@')}`
            : c
    ), ...emailSplitted[1]]
}

export function hideData(data: string) {
    return [...data].map((c, i) =>
        i >= data.length / INITIAL_PERCENTAGE_TO_HIDE &&
            i <= data.length / FINAL_PERCENTAGE_TO_HIDE
            ? "*"
            : c
    )
}