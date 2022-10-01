import { Theme } from "./theme/Theme";
import { Palette } from "./components/palette/index";
import {ViewPort} from "./components/viewport/index";

function App() {
  return (
    <div className="App">
      <Theme>
        <ViewPort />
        {/* <Palette /> */}
      </Theme>
    </div>
  );
}

export default App;
