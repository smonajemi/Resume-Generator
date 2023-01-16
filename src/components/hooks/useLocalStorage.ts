export const useLocalStorage = () => {
    const setItem = (key: string, value: any) => {
        localStorage.setItem(key, value)
    }
    const getItem = (key: string) => {
        return localStorage.getItem(key)
    }
    const clearItem = (key: string) => {
        localStorage.removeItem(key)
    }
    const clearAll = () => {
        localStorage.clear()
    }
    return {
        setItem,
        getItem,
        clearItem,
        clearAll
    } as const
}