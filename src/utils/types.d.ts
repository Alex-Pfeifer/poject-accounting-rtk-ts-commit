export enum UpdateMode {
    DEFAULT, EDIT_PROFILE, CHANGE_PASSWORD
}

export interface UserProfile {
    login: string
    firstName: string
    lastName: string
    roles: string[]
}