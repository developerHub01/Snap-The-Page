import React, { useState } from "react";
import Container from "../Components/Container";
import SearchBox from "../Components/SearchBox";
import LoadedContent from "../Components/LoadedContent";

const Home = () => {
  const [searchUrl, setSearchUrl] = useState("codeforces.com");
  return (
    <section className="w-full bg-primaryColor flex-grow">
      <Container>
        <SearchBox searchUrl={searchUrl} setSearchUrl={setSearchUrl} />
        {searchUrl && <LoadedContent searchUrl={searchUrl} />}
      </Container>
    </section>
  );
};

export default Home;
