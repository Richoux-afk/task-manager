'use client'

import { MantineProvider } from '@mantine/core';





interface ProviderProps{
    children:React.ReactNode;
}


export const Provider: React.FC<ProviderProps> =({children}) =><MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
    </MantineProvider>
