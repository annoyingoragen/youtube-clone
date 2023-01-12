import { Box } from "@mui/material";
const { BrowserRouter, Routes, Route } = require("react-router-dom");
import {Navbar,VideoDetail,SearchFeed,Feed,ChannelDetail,ChannelCard} from './components';
function App() {
  return (
  <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed />}/>
        <Route path="/video/:id"  element={<VideoDetail />}/>
        <Route path="/channel/:id"  element={<ChannelDetail />}/>
        <Route path="/search/:searchTerm"  element={<SearchFeed />}/>
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;
