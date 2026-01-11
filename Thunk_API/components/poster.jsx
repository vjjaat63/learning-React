

export default function Poster(args){
    const coin = args.coin;

    return <>
        <div className="coin">
            <img width = "100px" src={coin.image} alt="" />
            <h3> {coin.name} (<span>{coin.symbol}</span>)</h3>
            <h4> Market Cap Rank : {coin.market_cap_rank}</h4>
            <h4> Price : ${coin.current_price}</h4>
        </div>
    </>
}