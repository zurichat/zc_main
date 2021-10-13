import { BrowserRouter } from "react-router-dom";
import MarketPlace from './marketplace/marketplace'

export default function Root() {
  return (
    <BrowserRouter>
      <MarketPlace />
    </BrowserRouter>
  );
}
