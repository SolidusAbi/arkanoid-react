export default function Paddle(props){
    const { position } = props;

    return (
        <div 
            className="paddle"
            style={{ left: `${position[0]}px`, bottom: `${position[1]}px` }}
        > 
            {position[0]} 
        </div>
    );
}