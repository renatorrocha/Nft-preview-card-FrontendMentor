export function Description() {
  return (
    <div className="item my-2 flex justify-between">
      <div className="flex items-center">
        <img
          src="src/assets/images/icon-ethereum.svg"
          alt=""
          className="mr-1 h-3 w-2"
        />
        <p className="font-outift text-sm font-semibold text-cyan">0.041 ETH</p>
      </div>
      <div className="flex items-center">
        <img
          src="src/assets/images/icon-clock.svg"
          alt=""
          className="mr-1 h-4 w-4"
        />
        <p className="font-outift text-sm font-semibold text-softBlue">
          3 days left
        </p>
      </div>
    </div>
  );
}
