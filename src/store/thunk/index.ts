export * from './user/index';

export interface ApiResponse<T> {
    statusCode?: number;
    message?: string | string[];
    data?: T;
    meta?: any;
}
