function App() {
  return (
    <main className="min-h-screen bg-veryDarkBlue_main flex items-center justify-center w-screen">
      <div className="bg-veryDarkBlue_card rounded-2xl w-72 h-auto p-6">
        <img
          src="src/assets/images/image-equilibrium.jpg"
          alt=""
          className="h-60 w-60 rounded-xl"
        />

        <p className="text-white text-lg font-bold my-2">Equilibrium #3429</p>

        <p className="text-softBlue text-sm">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="flex justify-between item">
          <div className="flex items-center my-2">
            <img
              src="src/assets/images/icon-ethereum.svg"
              alt=""
              className="h-3 w-2 mr-1"
            />
            <p className="text-cyan font-semibold text-sm">0.041 ETH</p>
          </div>

          <div className="flex items-center">
            <img
              src="src/assets/images/icon-clock.svg"
              alt=""
              className="h-4 w-4"
            />
            <p className="text-softBlue font-semibold text-sm">3 days left</p>
          </div>
        </div>

        <hr className="border-veryDarkBlue_line" />

        <div className="flex items-center mt-3">
          <img
            src="src/assets/images/image-avatar.png"
            alt=""
            className="h-6 w-6 border border-white rounded-full"
          />
          <p className="text-softBlue font-medium text-sm ms-3">
            Creation of <b className="text-white">Jules Wyvern</b>
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
