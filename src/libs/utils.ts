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

export const checkStatus = (order: any) => {
    if (order.status === "confirmed") return {
        status: "realizado",
        action: 'aguardando pagamento',
        color: 'info',
        disabled: true
    }
    if (order.status === "paid") return {
        status: "faturado",
        action: 'liberar para entrega',
        color: 'success',
        disabled: false
    }
    if (order.status === "dispatched") return {
        status: "em rota",
        action: 'marcar como entregue',
        color: 'info',
        disabled: false
    }
    if (order.status === "finished") return {
        status: "finalizado",
        action: 'entregue',
        color: 'secondary',
        disabled: true
    }
    if (order.status === "canceled") return {
        status: "cancelado",
        action: 'entregue',
        color: 'danger',
        disabled: true
    }
}

export function cpfMask(value) {
    return (
        value &&
        value
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    ) // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export function dateMask(value) {
    let v = value.replace(/\D/g, '').slice(0, 10)
    if (v.length >= 5) {
        return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`
    } else if (v.length >= 3) {
        return `${v.slice(0, 2)}/${v.slice(2)}`
    }
    return v
}

export function formatZipCode(cep) {
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2")
    if (cep.length >= 10) {
        cep = cep.slice(0, 9)
    }
    return cep
}

export function formatToBRL(value: string | number): string {
    return value ? Number(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    }) : 'Não disponível'
}

export function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '')
    if (cpf === '') return false
    // Elimina CPFs invalidos conhecidos
    if (cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999')
        return false
    // Valida 1o digito
    let add = 0
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i)
    let rev = 11 - (add % 11)
    if (rev === 10 || rev === 11)
        rev = 0
    if (rev !== parseInt(cpf.charAt(9)))
        return false
    // Valida 2o digito
    add = 0
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i)
    rev = 11 - (add % 11)
    if (rev === 10 || rev === 11)
        rev = 0

    return rev === parseInt(cpf.charAt(10))
}

export function formatName(value) {
    return value && value.replace(/[^[a-zA-Zà-ú-'\s]/g, '')
}

export function formatCode(value) {
    return formatToOnlyDigits(value)
}

export function removePhoneMask(value) {
    return formatToOnlyDigits(value)
}

export function formatToOnlyDigits(value) {
    return value && value.replace(/[^0-9]+/g, '')
}

export function formatPhone(numero) {
    if (!numero) return numero

    numero = numero.replace(/[^0-9]+/g, '')
    if (numero.length > 2) {
        numero = '(' + numero.substring(0, 2) + ') ' + numero.substring(2)
    }
    if (numero.length > 6) {
        numero = numero.substring(0, 6) + ' ' + numero.substring(6)
    }
    if (numero.length > 11) {
        numero = numero.substring(0, 11) + '-' + numero.substring(11, 15)
    } //(XX) X XXXX-XXXX

    return numero
}

export function formatDateString(date) {
    const date_arr = date.split('/')

    const dd = date_arr[0]
    const mm = date_arr[1]
    const yyyy = date_arr[2]

    return yyyy + '-' + mm + '-' + dd
}

const INITIAL_PERCENTAGE_TO_HIDE: number = 8
const FINAL_PERCENTAGE_TO_HIDE: number = 1.2

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