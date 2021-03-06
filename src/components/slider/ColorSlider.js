export default function ColorSlider( {name, value, updateColor} ){
    return (
        <div>
        <span>{name}</span>
        <input
        className="slider"
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(event) => updateColor(name, event.target.value)}
        />
        <span>{value}</span>
        </div>

    )
}