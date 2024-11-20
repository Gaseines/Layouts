

import Container from "../Container";
import Section from "../Section";
import BtnFolha from "./btnFolhaCode/BtnFolha";
import Code from "../Code";
import CodeBtnFolha from "./btnFolhaCode/CodeBtnFolha";
import CodeBtnMenu1 from "./btnMenu1/CodeBtnMenu1";
import Item from "../Item";
import BoxItem from "../BoxItem";
import { useState } from "react";
import BtnVoltar from "../layoutsCategory/BtnVoltar";
import BtnMenu1 from "./btnMenu1/BtnMenu1";
import BtnDownloadNow from "./btnDownloadNow/BtnDownloadNow";
import CodeBtnDownloadNow from "./btnDownloadNow/CodeBtnDownloadNow";
import BtnSubmitBlue from "./btnSubmitBlue/BtnSubmitBlue";
import CodeBtnSubmitBlue from "./btnSubmitBlue/CodeBtnSubmitBlue";
import BtnBuyNow from "./btnBuyNow/BtnBuyNow";
import CodeBtnBuyNow from "./btnBuyNow/CodeBtnBuyNow";
import BtnLeftToRight from "./btnLeftToRight/BtnLeftToRight";
import CodeBtnLeftToRight from "./btnLeftToRight/CodeBtnLeftToRight";
import Btn3DYellow from "./btn3DYellow/Btn3DYellow";
import CodeBtn3DYellow from "./btn3DYellow/CodeBtn3DYellow";
import BtnSocialUm from "./btnSocial01/BtnSocialUm";
import CodeBtnSocialUm from "./btnSocial01/CodeBtnSocialUm";

function ContainerButtons() {
  const [tela, setTela] = useState("Principal");
  console.log(tela);

  return (
    <Container>
      {tela === "Principal" && (
        <>
          <Section>
            {/* Botao Folha */}
            <BoxItem idRef={"btnFolha"} setActiveCode={setTela}>
              <BtnFolha />
            </BoxItem>

            {/* Botao Menu 1 */}
            <BoxItem idRef={"btnMenu1"} setActiveCode={setTela}>
              <BtnMenu1 />
            </BoxItem>

            {/* Botao Download Now */}
            <BoxItem idRef={"btnDownloadNow"} setActiveCode={setTela}>
              <BtnDownloadNow />
            </BoxItem>

            {/* Botao Submit Blue*/}
            <BoxItem idRef={"btnSubmitBlue"} setActiveCode={setTela}>
              <BtnSubmitBlue />
            </BoxItem>

            {/* Botao Buy Now*/}
            <BoxItem idRef={"btnBuyNow"} setActiveCode={setTela}>
              <BtnBuyNow />
            </BoxItem>

            {/* Botao Left to Right*/}
            <BoxItem idRef={"btnLeftToRight"} setActiveCode={setTela}>
              <BtnLeftToRight />
            </BoxItem>

            {/* Botao 3D Yellow*/}
            <BoxItem idRef={"btn3DYellow"} setActiveCode={setTela}>
              <Btn3DYellow />
            </BoxItem>

            {/* Botao Social 01*/}
            <BoxItem idRef={"btnSocial01"} setActiveCode={setTela}>
              <BtnSocialUm />
            </BoxItem>
          </Section>
        </>
      )}

      {tela === "btnFolha" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <BtnFolha />
            </Item>
            <Code
              linkHtml={"htmlFolha"}
              linkCss={"cssFolha"}
              linkJs={"jsFolha"}
            >
              <CodeBtnFolha />
            </Code>
          </Section>
        </>
      )}

      {tela === "btnMenu1" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <BtnMenu1 />
            </Item>
            <Code
              linkHtml={"htmlMenu1"}
              linkCss={"cssMenu1"}
              linkJs={"jsMenu1"}
            >
              <CodeBtnMenu1 />
            </Code>
          </Section>
        </>
      )}

      {tela === "btnDownloadNow" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <BtnDownloadNow />
            </Item>
            <Code
              linkHtml={"htmlDownloadNow"}
              linkCss={"cssDownloadNow"}
              linkJs={"jsDownloadNow"}
            >
              <CodeBtnDownloadNow />
            </Code>
          </Section>
        </>
      )}

      {tela === "btnSubmitBlue" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <BtnSubmitBlue />
            </Item>
            <Code
              linkHtml={"htmlSubmitBlue"}
              linkCss={"cssSubmitBlue"}
              linkJs={"jsSubmitBlue"}
            >
              <CodeBtnSubmitBlue />
            </Code>
          </Section>
        </>
      )}

      {tela === "btnBuyNow" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <BtnBuyNow />
            </Item>
            <Code
              linkHtml={"htmlBuyNow"}
              linkCss={"cssBuyNow"}
              linkJs={"jsBuyNow"}
            >
              <CodeBtnBuyNow />
            </Code>
          </Section>
        </>
      )}

      {tela === "btnLeftToRight" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <BtnLeftToRight />
            </Item>
            <Code
              linkHtml={"htmlLeftToRight"}
              linkCss={"cssLeftToRight"}
              linkJs={"jsLeftToRight"}
            >
              <CodeBtnLeftToRight />
            </Code>
          </Section>
        </>
      )}

      {tela === "btn3DYellow" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <Btn3DYellow />
            </Item>
            <Code
              linkHtml={"html3DYellow"}
              linkCss={"css3DYellow"}
              linkJs={"js3DYellow"}
            >
              <CodeBtn3DYellow />
            </Code>
          </Section>
        </>
      )}

      {tela === "btnSocial01" && (
        <>
          <BtnVoltar setTela={setTela} />
          <Section>
            <Item>
              <BtnSocialUm />
            </Item>
            <Code
              linkHtml={"htmlSocial01"}
              linkCss={"cssSocial01"}
              linkJs={"jsSocial01"}
            >
              <CodeBtnSocialUm />
            </Code>
          </Section>
        </>
      )}
    </Container>
  );
}

export default ContainerButtons;
