import md5 from 'md5'
export const MARVEL_HASH = `bf82e8d1ba35c9151756f199bf3d63593344869f`
export const MARVEL_KEY = '411f30e793bd61e8cd96ac17f835698d'
export const BASE_URL = 'http://localhost:3001/api'
export const MARVEL_URL = 'https://gateway.marvel.com'
export const MARVEL_COMICS =
  'http://gateway.marvel.com/v1/public/comics?titleStartsWith='
export const SEARCH_BY_CHARACTER =
  'http://gateway.marvel.com/v1/public/characters?name='
export const TIMESTAMP = new Date().getTime()
export const STRING_TO_HASH = TIMESTAMP + MARVEL_HASH + MARVEL_KEY
export const HASH = md5(STRING_TO_HASH)

export const MARVEL_ORDERBY = '&orderBy=focDate'

export const COMICVINE_URL = 'http://comicvine.gamespot.com/api'
export const COMICVINE_KEY = 'c55d019a55254a9ebd48ffa6bf63220facededb9'

//credits https://www.titanwolf.org/Network/q/abce4c5d-da5f-4b90-af3e-d4055c838ffc/y
