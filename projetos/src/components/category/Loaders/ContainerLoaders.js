import Container from "../Container";
import Section from "../Section";
import Code from "../Code";
import Item from "../Item";
import BoxItem from "../BoxItem";
import { useState } from "react";
import BtnVoltar from "../layoutsCategory/BtnVoltar";
import LoaderLavaLamp from "./LoaderLavaLamp/LoaderLavaLamp";
import CodeLoaderLavaLamp from "./LoaderLavaLamp/CodeLoaderLavaLamp";
import LoaderOrange from "./LoaderOrange/LoaderOrange";
import CodeLoaderOrange from "./LoaderOrange/CodeLoaderOrange";

function ContainerLoaders() {
  const [tela, setTela] = useState("Principal");
  console.log(tela);

  return (
    <Container>
      {tela === "Principal" && (
        <>
          <Section>
            {/* Loader Lava Lamp */}
            <BoxItem idRef={"loaderLavaLamp"} setActiveCode={setTela}>
              <LoaderLavaLamp />
            </BoxItem>

            {/* Loader Orange */}
            <BoxItem idRef={"loaderOrange"} setActiveCode={setTela}>
              <LoaderOrange />
            </BoxItem>
          </Section>
        </>
      )}

      {tela === "loaderLavaLamp" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <LoaderLavaLamp />
            </Item>
            <Code
              linkHtml={"htmlLoaderLavaLamp"}
              linkCss={"cssLoaderLavaLamp"}
              linkJs={"jsLoaderLavaLamp"}
            >
              <CodeLoaderLavaLamp />
            </Code>
          </Section>
        </>
      )}

      {tela === "loaderOrange" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <LoaderOrange />
            </Item>
            <Code
              linkHtml={"htmlLoaderOrange"}
              linkCss={"cssLoaderOrange"}
              linkJs={"jsLoaderOrange"}
            >
              <CodeLoaderOrange />
            </Code>
          </Section>
        </>
      )}
    </Container>
  );
}

export default ContainerLoaders;
