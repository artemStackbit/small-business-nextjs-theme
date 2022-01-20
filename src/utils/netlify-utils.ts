export function getNetlifyUrl(): string {
    return process?.env?.URL ? process.env.URL : ''
}
