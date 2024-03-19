export interface Login {
    userName: string | null,
    password: string | null,
}

export interface LoginResponse {
    name?: string,
    id?: number,
    organisation?: string,
    isLogginIn?: boolean,
    response?: string,
}