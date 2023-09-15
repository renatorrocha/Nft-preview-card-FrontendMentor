function App() {
  return (
    <main className="min-h-screen bg-veryDarkBlue_main flex">
      <div className="bg-veryDarkBlue_card flex flex-col">
        <img
          src="src/assets/images/image-equilibrium.jpg"
          alt=""
          className="h-64 w-64"
        />

        <div>
          <p className="text-white text-lg font-bold">Equilibrium #3429</p>
        </div>

        <p className="text-softBlue text-sm">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="flex items-center">
          <img
            src="src/assets/images/icon-ethereum.svg"
            alt=""
            className="h-4 w-2"
          />
          <p className="text-cyan">0.041 ETH</p>

          <div className="flex items-center">
            <img
              src="src/assets/images/icon-clock.svg"
              alt=""
              className="h-4 w-4"
            />
            <p className="text-softBlue font-semibold">3 days left</p>
          </div>
        </div>
        <hr />

        <div className="flex items-center">
          <img
            src="src/assets/images/image-avatar.png"
            alt=""
            className="h-8 w-8"
          />
          <p className="text-softBlue font-medium">
            Creation of <b className="text-white">Jules Wyvern</b>
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
