import React from 'react'
import { WelcomePage } from './pages/welcome-page/WelcomePage'

interface IAppProps {}

export const App = ({}: IAppProps) => {
    //TODO: навигация
    return (
        <>
            <WelcomePage />
        </>
    )
}
