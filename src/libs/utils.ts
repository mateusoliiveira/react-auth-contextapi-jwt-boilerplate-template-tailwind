import { FINAL_PERCENTAGE_TO_HIDE, INITIAL_PERCENTAGE_TO_HIDE } from "./constants"

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

export function hideEmail(email: string) {
  console.log(email)
  const emailSplitted: string[] = email.split('@')
  console.log(emailSplitted)
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
