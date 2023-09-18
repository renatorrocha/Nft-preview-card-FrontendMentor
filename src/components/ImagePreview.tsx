export function ImagePreview() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-xl">
      <img
        src="src/assets/images/image-equilibrium.jpg"
        alt=""
        className="h-60 w-60 rounded-xl"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center justify-center overflow-hidden bg-cyan bg-opacity-20 bg-fixed opacity-0 transition-all duration-300 hover:opacity-100">
        <img src="src/assets/images/icon-view.svg" alt="" />
      </div>
    </div>
  );
}
