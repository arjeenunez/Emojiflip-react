import "./Emoji.css"

function Emoji(toss) {
    return (
        <div className="Emoji">
            {toss.toss === 0 ? "🙂" : "😭"}
        </div>
    )
}

export default Emoji;