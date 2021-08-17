// used to mark unsupported tokens, these are hosted lists of unsupported tokens
/**
 * @TODO add list from blockchain association
 */
export const UNSUPPORTED_LIST_URLS: string[] = []
export const AVA_AEB_LIST = 'https://raw.githubusercontent.com/pangolindex/tokenlists/main/ab.tokenlist.json'
export const AVA_DEFI_LIST = 'https://raw.githubusercontent.com/pangolindex/tokenlists/main/defi.tokenlist.json'
// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  AVA_DEFI_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [AVA_DEFI_LIST]
