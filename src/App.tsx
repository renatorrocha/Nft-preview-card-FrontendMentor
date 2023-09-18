import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { ImagePreview } from "./components/ImagePreview";
import { Owner } from "./components/Owner";
import { SubTitle } from "./components/SubTitle";
import { Title } from "./components/Title";

function App() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center bg-veryDarkBlue_main">
      <div className="h-auto w-72 rounded-2xl bg-veryDarkBlue_card p-6">
        <ImagePreview />

        <Title />

        <SubTitle />

        <Description />

        <hr className="border-veryDarkBlue_line" />

        <Owner />
      </div>
      <Footer />
    </main>
  );
}

export default App;
