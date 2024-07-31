import { useState, useEffect } from 'react'

export default function Ball(props) {
    const { position } = props;
    return (
        <div
            className="ball" 
            style={{ left: `${position[0]}px`, bottom: `${position[1]}px` }}
        />
    );
}