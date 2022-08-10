import { APP_CLEAN_ALERTS_TIMEOUT } from "./libs/constants"

export const formatDate = (originalDate: Date) => {
  if (!originalDate) return 'Não disponível'
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

export const handleFeedbackColor = (status: number): string => {
  const SUCCESS: string = "green-500"
  const FAILURE: string = "red-500"
  const verifyFirstChar = (): string => status.toString().charAt(0)
  const availableColors: { [x: string]: string } = {
    "2": SUCCESS,
    "4": FAILURE,
  }
  return availableColors[verifyFirstChar()] ?? "yellow-500"
}

export function formatZipCode(cep: any) {
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

export function formatName(value: any) {
  return value && value.replace(/[^[a-zA-Zà-ú-'\s]/g, '')
}

export function formatToOnlyDigits(value: any) {
  return value && value.replace(/[^0-9]+/g, '')
}

export function formatPhone(phone: any) {
  if (!phone) return phone

  phone = phone.replace(/[^0-9]+/g, '')
  if (phone.length > 2) {
    phone = '(' + phone.substring(0, 2) + ') ' + phone.substring(2)
  }
  if (phone.length > 6) {
    phone = phone.substring(0, 6) + ' ' + phone.substring(6)
  }
  if (phone.length > 11) {
    phone = phone.substring(0, 11) + '-' + phone.substring(11, 15)
  } //(XX) X XXXX-XXXX

  return phone
}

export function formatDateString(date: any) {
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

const startCeps: any = [
  { AC: [699, 699] },
  { AL: [570, 579] },
  { AM: [690, 692] },
  { AM2: [694, 698] },
  { AP: [689, 689] },
  { BA: [400, 489] },
  { CE: [600, 639] },
  { DF: [700, 727] },
  { DF2: [730, 736] },
  { ES: [290, 299] },
  { GO: [728, 729] },
  { GO2: [737, 767] },
  { MA: [650, 659] },
  { MG: [300, 399] },
  { MS: [790, 799] },
  { MT: [780, 788] },
  { PA: [660, 688] },
  { PB: [580, 589] },
  { PE: [500, 569] },
  { PI: [640, 649] },
  { PR: [800, 879] },
  { RJ: [200, 289] },
  { RN: [590, 599] },
  { RO: [768, 769] },
  { RR: [693, 693] },
  { RS: [900, 999] },
  { SC: [880, 899] },
  { SE: [490, 499] },
  { SP: [0o10, 199] },
  { TO: [770, 779] }
]
const increaserRanger = (diff: any) => {
  let start: number = diff[0]
  let end: number = diff[1]
  let intermediate: number[] = []
  for (start; start < end; start++) {
    intermediate.push(start)
  }
  intermediate.push(end)
  return intermediate

}
let arrayNuns = startCeps.map((data: any) => Object.values(data))


















export const alertClear = (alertSetter: Function): void => {
  setTimeout((): void => {
    alertSetter({
      status: 0,
      message: '',
    })
  }, APP_CLEAN_ALERTS_TIMEOUT)
}
