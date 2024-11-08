import Container from '../Container';
import Section from '../Section';
import Code from '../Code';
import Item from '../Item';
import BoxItem from '../BoxItem';
import { useState } from 'react';
import BtnVoltar from '../layoutsCategory/BtnVoltar';
import LoaderLavaLamp from './LoaderLavaLamp/LoaderLavaLamp';
import CodeLoaderLavaLamp from './LoaderLavaLamp/CodeLoaderLavaLamp';

function ContainerLoaders() {
    const [tela, setTela] = useState('Principal')
    console.log(tela)

    return (
        <Container>
            {tela === 'Principal' && (
                <>
                    <Section>
                        {/* Loader Lava Lamp */}
                        <BoxItem idRef={'loaderLavaLamp'} setActiveCode={setTela}>
                            <LoaderLavaLamp />
                        </BoxItem>


                    </Section>
                </>
            )}

            {tela === 'loaderLavaLamp' && (
                <>
                    <BtnVoltar setTela={setTela} />
                    <Section>
                        <Item>
                            <LoaderLavaLamp />
                        </Item>
                        <Code linkHtml={'htmlLoaderLavaLamp'} linkCss={'cssLoaderLavaLamp'} linkJs={'jsLoaderLavaLamp'}>
                            <CodeLoaderLavaLamp />
                        </Code>
                    </Section>
                </>
            )}


        </Container>
    );
}

export default ContainerLoaders