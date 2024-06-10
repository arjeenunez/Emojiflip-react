import "./Coin.css"

function Coin(toss) {
    return (
        <div className="Coin">
            {toss.toss === 0 ? "🙂" : "😭"}
        </div>
    )
}

export default Coin;