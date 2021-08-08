export interface LoginFormProps {
    setLoading: (isLoading?: boolean) => void;
}

export interface LoginUserDto {
    email: string;
    password: string;
}
