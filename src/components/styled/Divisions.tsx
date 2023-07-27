import styled from 'styled-components'
const S_Division = styled.hr`
width: 100%;
border-top: 1px solid rgba(255, 255, 255, .5);
border-radius: 9999px;
`

export const Division = ({wPercent, opacity}: {wPercent?: number,opacity?: string}) => {
    return <S_Division style={{width: wPercent ? `${wPercent}%` : '', opacity}}/>
}