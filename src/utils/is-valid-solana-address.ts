export const isValidSolanaAddress = (address: string): boolean => {
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]+$/

  return typeof address === 'string' && address.length >= 32 && address.length <= 44 && base58Regex.test(address)
}
