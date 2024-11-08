import Container from '../Container';
import Section from '../Section';
import Code from '../Code';
import Item from '../Item';
import BoxItem from '../BoxItem';
import { useState } from 'react';
import BtnVoltar from '../layoutsCategory/BtnVoltar';
import CardPizza from './CardPizza/CardPizza';
import CodeCardPizza from './CardPizza/CodeCardPizza';
import Card3D from './Card3D/Card3D';
import CodeCard3D from './Card3D/CodeCard3D';

function ContainerCards() {
    const [tela, setTela] = useState('Principal')
    console.log(tela)

    return (
        <Container>
            {tela === 'Principal' && (
                <>
                    <Section>
                        {/* Card Pizza */}
                        <BoxItem idRef={'cardPizza'} setActiveCode={setTela}>
                            <CardPizza />
                        </BoxItem>

                        {/* Card 3D */}
                        <BoxItem idRef={'card3D'} setActiveCode={setTela}>
                            <Card3D />
                        </BoxItem>


                    </Section>
                </>
            )}

            {tela === 'cardPizza' && (
                <>
                    <BtnVoltar setTela={setTela} />
                    <Section>
                        <Item>
                            <CardPizza />
                        </Item>
                        <Code linkHtml={'htmlCardPizza'} linkCss={'cssCardPizza'} linkJs={'jsCardPizza'}>
                            <CodeCardPizza />
                        </Code>
                    </Section>
                </>
            )}

            {tela === 'card3D' && (
                <>
                    <BtnVoltar setTela={setTela} />
                    <Section>
                        <Item>
                            <Card3D />
                        </Item>
                        <Code linkHtml={'htmlCard3D'} linkCss={'cssCard3D'} linkJs={'jsCard3D'}>
                            <CodeCard3D />
                        </Code>
                    </Section>
                </>
            )}


        </Container>
    );
}

export default ContainerCards