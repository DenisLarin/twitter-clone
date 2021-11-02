import React from 'react'
import classes from './page.module.css'

interface IPageProps {
    children: React.ReactChild
}

export const Page = ({ children }: IPageProps) => {
    return <div className={classes.page}>{children}</div>
}
