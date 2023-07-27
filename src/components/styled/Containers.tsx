import { Children, ColgroupHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

const S_Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`
const Slider = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
`
export function ColumnContainer({full = false, margin, padding,backgroundColor,children,gap}: {full?: boolean, margin?: string, padding?: string, backgroundColor?: string, children: ReactNode,gap?: number}) {
    return (
        <S_Column style={{margin,padding,backgroundColor, width: full ? '100vw' : '',gap: gap ? `${gap}px` : ''}}>
            {children}
        </S_Column>
    )
}

export function SliderContainer({gap = 15, children}: {gap?: number, children: ReactNode}) {
    return (
        <Slider style={{gap: `${gap}px`}}>{children}</Slider>
    )
}