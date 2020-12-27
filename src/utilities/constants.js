import { Dimensions } from 'react-native';
import Firebase from '../../config/FirebaseConfig'

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

// Sign in and Sign up pages
export const TEXT_NEED_AN_ACCOUNT = "Don't have an account?"
export const TEXT_SIGN_UP = "Sign up"
export const TEXT_SIGN_IN = "Sign in"
export const TEXT_EMAIL = "Email"
export const TEXT_USERNAME = "Username"
export const TEXT_PASSWORD = "Password"
export const TEXT_SIGNIN_HEADLINE = "Photo Sharing"
export const TEXT_SIGNIN_SUBHEADLINE = "The easiest way to share photos with family and friends"
export const TEXT_SIGNUP_NOTE = "An account will allow you to save and access photo information across devices. You can delete your account at any time and your information will not be shared."
export const TEXT_SIGNUP_PASSWORD_REQUIRED = "At least 8 characters required"


export const IMAGE_LOGO = "logo"
export const IMAGE_USER_PLACEHOLDER = "user-placeholder"
export const IMAGE_PHOTO = "plus.circle"

