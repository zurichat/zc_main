import { BrowserRouter } from "react-router-dom";
import MarketPlace from "./marketplace/marketplace";
import MarketplaceHeader from "./marketplace/components/MarketplaceHeader";

export default function Root() {
  return (
    <BrowserRouter>
      <MarketplaceHeader />
      <MarketPlace />
    </BrowserRouter>
  );
}
