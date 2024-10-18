// index.d.ts

export interface IntoOptions {
    retries?: number;
    retryDelay?: number;
    error?: string;
}

/**
 * 执行一个 Promise，并返回一个元组，包含错误信息和数据。
 * @param promise - 要执行的 Promise。
 * @param options - 可选配置参数。
 * @returns 一个 Promise，解析为 [错误信息, 数据] 的元组。
 */
declare function into<T>(
    promise: Promise<T>,
    options?: IntoOptions
): Promise<[string | null, T | undefined]>;

export default into;
