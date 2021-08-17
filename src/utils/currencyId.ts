import { Currency, ETHER, Token } from '@uniswap/sdk-core'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'AVAX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
