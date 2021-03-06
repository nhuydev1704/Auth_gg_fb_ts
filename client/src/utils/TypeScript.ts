import rootReducer from '../redux/reducers/index'
import { ChangeEvent } from 'react'

export type RootStore = ReturnType<typeof rootReducer>

export type InputChange = ChangeEvent<HTMLInputElement>

export interface IParams {
    page: string
    slug: string
}

export interface IUserLogin {
    account: string
    password: string
}

export interface IUserRegister extends IUserLogin {
    name: string
}

export interface IUser extends IUserLogin {
    avatar: string
    createdAt: string
    name: string
    role: string
    type: string
    updatedAt: string
    _id: string
}

export interface IUserProfile {
    avatar: string | File
}

export interface IAlert {
    loading?: boolean
    success?: string | string[]
    errors?: string | string[]
}
