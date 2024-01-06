import { CSSProperties } from "react"

const ShowLoading: React.FC = () => {
  const loadingArray = [ "🤖", "🦸", "Loading", "🦇", "🦸‍♂️"];

return (
    <h3 aria-label="loading-misdemeanours" role="status">
    {loadingArray.map((emoji, index) => {
        const style: CSSProperties = {animationDelay: index / 5 + "s",}
        return (
        <div className="loading" aria-hidden="true" key={`${index}${emoji}`} style={style}>
            {emoji}
        </div>
        )
    })}
    </h3>
)
}

export default ShowLoading;