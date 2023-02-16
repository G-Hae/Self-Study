import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";

interface IHistorycal {
    time_open: string;
    time_close: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}


function Chart({coinId}:ChartProps){
    const isDark = useRecoilValue(isDarkAtom);
    const {isLoading, data} = useQuery<IHistorycal[]>(["ohlcv", coinId], ()=>fetchCoinHistory(coinId), {refetchInterval: 10000});
    
    return (
    <div>
        {isLoading ? "Loading chart..." : (
        <ApexChart 
        type="line" 
        series={[
            {
                name: "price",
                data: data?.map(price => price.close) as number[]     
            },
        ]}
        options={{
            theme: {
                mode: isDark ? "dark" : "light",
            },
            chart:{
                height: 300,
                width: 500,
                toolbar:{
                    show: false,
                },
                background:"transparent"
            },
            grid:{show: false},
            stroke: {
                curve: "smooth",
                width: 4,
            },
            yaxis:{
                show: false,
            },
            xaxis:{
                axisBorder:{show: false,},
                axisTicks:{show: false,},
                labels:{show: false,},
                type: "datetime",
                categories: data?.map((price) => new Date(price.time_close * 1000).toISOString().slice(0,10)
),
            },
            fill:{
                type: "gradient",
                gradient:{gradientToColors:["#0be881"], stops: [0,100]},
            },
            colors:["#0fbcf9"],
            tooltip: {
                y: {
                    formatter: (value)=> `${value.toFixed(3)}`
                },
            }
        }}
        />
    )}
</div>
);
}
export default Chart;

function useRecoilValue(isDarkAtom: boolean) {
    throw new Error("Function not implemented.");
}


function isDarkAtom(isDarkAtom: boolean) {
    throw new Error("Function not implemented.");
}
