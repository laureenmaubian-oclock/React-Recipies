import Sleigh from './Sleigh';
import garland from "../assets/decorations/garland.png";

const snowflakes = Array.from({ length: 40 }, (_, index) => index);
const lights = [
    { x: 14.7, y: 48.5 },
    { x: 21.2, y: 47.6 },
    { x: 29, y: 49.4 },
    { x: 37.7, y: 45 },
    { x: 43.2, y: 48.4 },
    { x: 57.7, y: 46.8 },
    { x: 65.2, y: 49.8 },
    { x: 71.3, y: 45.4 },
    { x: 78.8, y: 49.8 },
    { x: 86.7, y: 46.5 },
    { x: 96, y: 48.3 },
];

function ChristmasDecoration() {
    return (
        <div className="christmas-decoration" >
            <div className="garland-container" aria-hidden="true">
                <img
                    src={garland}
                    alt=""
                    className="christmas-garland"
                />

                {lights.map((light) => (
                    <span
                        key={light.x}
                        className="garland-light"
                        style={{
                            left: `${light.x}%`,
                            top: `${light.y}%`,
                            animationDelay: `${light.x / 20}s`,
                        }}
                    />
                ))}
            </div>

            {snowflakes.map((flake) => (
                <span aria-hidden="true"
                    key={flake}
                    className="snowflake"
                    style={{
                        left: `${(flake * 37) % 100}%`,
                        animationDuration: `${8 + (flake % 10)}s`,
                        animationDelay: `-${flake * 0.7}s`,
                        width: `${2 + (flake % 4)}px`,
                        height: `${2 + (flake % 4)}px`,
                    }}
                />
            ))}

            <Sleigh />
        </div>
    );
}

export default ChristmasDecoration;