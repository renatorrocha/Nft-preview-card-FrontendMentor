export function Owner() {
  return (
    <div className="mt-3 flex items-center">
      <img
        src="/image-avatar.png"
        alt=""
        className="h-6 w-6 rounded-full border border-white"
      />
      <p className="font-outift ms-3 text-sm font-medium text-softBlue">
        Creation of{" "}
        <b className="font-outift text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-cyan">
          Jules Wyvern
        </b>
      </p>
    </div>
  );
}
