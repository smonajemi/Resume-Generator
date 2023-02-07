export interface UserTypes {
    key?: string
    firstName?: string | ''
    lastName?: string | ''
    phoneNumber?: string | ''
    email?: string | ''
    address?: string | ''
    city?: string | ''
    province?: string | ''
    postalCode?: string | ''
    summary?: string | ''
    technicalSkill?: string | ''
    skillSet?: string[] | ['']
}

export interface BackendUser {
    firstName?: string
    lastName?: string
}