import Sleigh from './Sleigh';

const snowflakes = Array.from({ length: 40 }, (_, index) => index);

function ChristmasDecoration() {
  return (
    <div className="christmas-decoration" >
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