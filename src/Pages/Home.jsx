import React, { useState } from "react";
import Container from "../Components/Container";
import SearchBox from "../Components/SearchBox";
import LoadedContent from "../Components/LoadedContent";

const Home = () => {
  const [searchUrl, setSearchUrl] = useState("");
  return (
    <section className="w-full min-h-[60vh] bg-primaryColor flex-grow flex justify-center items-center py-5">
      <Container>
        <SearchBox searchUrl={searchUrl} setSearchUrl={setSearchUrl} />
        {searchUrl && <LoadedContent searchUrl={searchUrl} />}
      </Container>
    </section>
  );
};

export default Home;
