import {themeConstants} from '../constants'
const {UPDATE_THEME_FONT, UPDATE_THEME_COLOR} = themeConstants

export const updateThemeFont = (font) => dispatch => {
dispatch({type: UPDATE_THEME_FONT, payload: font})
}
export const updateThemeColor = (color) => dispatch => {
dispatch({type: UPDATE_THEME_COLOR, payload: color})
}