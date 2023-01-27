import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;    
`

const CoinsList = styled.ul`
    
`

const Coin = styled.li`
    background-color: white;
    color: ${props=>props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;

    }
    &:hover{
        a{
            color: ${props=>props.theme.accentColor}
        }
    }
`

const Title = styled.h1`
    font-size: 48px;
    color: ${props=>props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins(){
    const { isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins)

    // const [coins, setCoins]=useState<ICoin[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     (async()=>{
    //      const response = await fetch("https://api.coinpaprika.com/v1/coins");
    //      const json = await response.json();
    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     })();
    // }, []);

    return(
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading?<Loader>Loading중입니다</Loader>:<CoinsList>
                {data?.slice(0, 10).map((data)=>(
                    <Coin key={data.id}>
                    <Link to={{
                        pathname:`/${data.id}`,
                        state: {name:data.name}
                        }}>
                        <Img src={`https://coinicons-api.vercel.app/api/icon/${data.symbol.toLowerCase()}`}/>{data.name} ➡</Link> 
                    </Coin>
                ))}
            </CoinsList>}
        </Container>
    );
}
export default Coins;