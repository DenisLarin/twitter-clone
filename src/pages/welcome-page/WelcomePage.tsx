import React from 'react'
import { Page } from '../../layouts/page/Page'

interface IWelcomePageProps {}

export const WelcomePage = ({}: IWelcomePageProps) => {
    return (
        <Page>
            <h1>Hello world</h1>
        </Page>
    )
}
