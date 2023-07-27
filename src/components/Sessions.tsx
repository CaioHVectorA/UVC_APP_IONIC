import { Link } from "react-router-dom";
import { Session } from "../types";
import { ColumnContainer, SliderContainer } from "./styled/Containers";
import { Text } from "./styled/Texts";
import { Subtitle } from "./styled/Titles";

function _Session({hists,subtitle,title}: Session) {
    return (
        <ColumnContainer gap={5} padding="16px 0px 500px 16px">
        <Subtitle>{title}</Subtitle>
        <Text>{subtitle}</Text>
        <SliderContainer>
            {hists.map(item => (
                <>
                <Link key={item.Ref} to={`/hist/${item.Ref}`}>
                <img src={item.ImgRef} style={{width: '150px',height: '180px', maxWidth: '150px'}}/>
                </Link>
                </>
                ))}
        </SliderContainer>
        </ColumnContainer>
    )
}

export default function Sessions({data}: {data: Session[]}) {
    return (
        <>
        {data.map(({hists,subtitle,title}) => <_Session hists={hists} subtitle={subtitle} title={title} />)}
        </>
    )
}