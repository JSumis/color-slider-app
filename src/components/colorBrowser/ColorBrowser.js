import React, { useState } from 'react'
import ColorSlider from '../slider/ColorSlider'
import ColorOutput from '../output/ColorOutput'

export default function ColorBrowser() {
    const [colors, setColors] = useState({
        red: 55,
        green: 150,
        blue: 25,
    })

    function updateColor(name, value) {
        setColors({...colors, [name]: value})
    }
    return (
        <div>
        <ColorSlider name="red" value={colors.red} updateColor={updateColor}/>
        <ColorSlider name="green" value={colors.green} updateColor={updateColor}/>
        <ColorSlider name="blue" value={colors.blue} updateColor={updateColor}/>
        <ColorOutput colors={colors}/>
        </div>
    )
}