import stadium from './stadiums.json'
import fotball from './football.json'

import  templateFotball  from './fotball-template.hbs'
import  templateStadium  from './stadium-template.hbs'
import { log } from 'handlebars'

const listRef = document.querySelector('.football-list')
const listEl = document.querySelector('.stadium-list')

listRef.innerHTML = templateFotball({fotball})
listEl.innerHTML = templateStadium({stadium})