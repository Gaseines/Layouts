import styles from './ContainerButtons.module.css';

import Container from '../Container';
import Section from '../Section';
import BtnFolha from './btnFolhaCode/BtnFolha';
import Code from '../Code';
import CodeBtnFolha from "./btnFolhaCode/CodeBtnFolha";
import CodeBtnMenu1 from "./btnMenu1/CodeBtnMenu1";
import Item from '../Item';
import BoxItem from '../BoxItem';
import { useState } from 'react';
import BtnVoltar from '../layoutsCategory/BtnVoltar';
import BtnMenu1 from './btnMenu1/BtnMenu1';

function ContainerButtons() {

    const [tela, setTela] = useState('Principal')
    console.log(tela)

    return (
        <Container>
            {tela === 'Principal' && (
                <>
                    <Section>
                        {/* Botao Folha */}
                        <BoxItem idRef={'btnFolha'} setActiveCode={setTela}>
                            <BtnFolha />
                        </BoxItem>

                        {/* Botao Menu 1 */}
                        <BoxItem idRef={'btnMenu1'} setActiveCode={setTela}>
                            <BtnMenu1 />
                        </BoxItem>



                    </Section>
                </>
            )}

            {tela === 'btnFolha' && (
                <>
                    <BtnVoltar setTela={setTela} />
                    <Section>
                        <Item>
                            <BtnFolha />
                        </Item>
                        <Code linkHtml={'htmlFolha'} linkCss={'cssFolha'} linkJs={'jsFolha'}>
                            <CodeBtnFolha />
                        </Code>
                    </Section>
                </>
            )}

            {tela === 'btnMenu1' && (
                <>
                    <BtnVoltar setTela={setTela} />
                    <Section>
                        <Item>
                            <BtnMenu1 />
                        </Item>
                        <Code linkHtml={'htmlMenu1'} linkCss={'cssMenu1'} linkJs={'jsMenu1'}>
                            <CodeBtnMenu1 />
                        </Code>
                    </Section>
                </>
            )}

        </Container>
    );
}

export default ContainerButtons;
