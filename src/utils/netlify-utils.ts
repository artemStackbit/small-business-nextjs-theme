export function getNetlifyUrl(): string {
    if (process.env) {
        return process.env?.URL;
    }
    return '';
}
