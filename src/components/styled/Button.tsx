import { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const S_Button = styled.button`
background-color: #ffbb3d;
box-shadow: 0 0 14px -7px #f09819;
color: #020202;
font-size: 20px;
font-weight: bold;
padding: 8px 4px;
margin: 0 auto;
border-radius: 25px;
font-family: 'Gotu';
`

export const Button = ({children,Action,fs,href,margin,padding, buttonProps} : {href?: string, Action?: Function, padding?: string, fs?: number, margin?: string, children: ReactNode,buttonProps?: ComponentProps<"button">}) => {
    if (href) return <Link to={href}><S_Button {...buttonProps} style={{margin,padding,fontSize: `${fs}px`}}>{children}</S_Button></Link>
    return <S_Button {...buttonProps} style={{margin,padding,fontSize: `${fs}px`}}>{children}</S_Button>
}