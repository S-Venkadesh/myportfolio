import create from 'zustand';

export const themeStore = create((set)=>({
    theme: "light",
    setTheme: (theme)=>set((state)=>({
        theme: theme
    }))
}))
