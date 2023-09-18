function App() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center bg-veryDarkBlue_main">
      <div className="h-auto w-72 rounded-2xl bg-veryDarkBlue_card p-6">
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

        <p className="font-outift my-2 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-cyan">
          Equilibrium #3429
        </p>

        <p className="font-outift text-sm text-softBlue">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="item flex justify-between">
          <div className="my-2 flex items-center">
            <img
              src="src/assets/images/icon-ethereum.svg"
              alt=""
              className="mr-1 h-3 w-2"
            />
            <p className="font-outift text-sm font-semibold text-cyan">
              0.041 ETH
            </p>
          </div>

          <div className="flex items-center">
            <img
              src="src/assets/images/icon-clock.svg"
              alt=""
              className="h-4 w-4"
            />
            <p className="font-outift text-sm font-semibold text-softBlue">
              3 days left
            </p>
          </div>
        </div>

        <hr className="border-veryDarkBlue_line" />

        <div className="mt-3 flex items-center">
          <img
            src="src/assets/images/image-avatar.png"
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
      </div>
      <footer className="pt-6">
        <p className="font-outift text-gray-400">
          Feito por{" "}
          <a
            href="https://github.com/renatorrocha"
            target="_blank"
            className="transition-all duration-300 ease-in-out hover:text-gray-200"
          >
            @renatorrodrigues
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
