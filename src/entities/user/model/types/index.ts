export interface UserSchema {
    id: string;
    name: string;
}

export interface UserState{
    data: UserSchema | null,
}
