import Container from '../Container';
import Section from '../Section';
import Code from '../Code';
import Item from '../Item';
import BoxItem from '../BoxItem';
import { useState } from 'react';
import BtnVoltar from '../layoutsCategory/BtnVoltar';
import CardPizza from './CardPizza/CardPizza';
import CodeCardPizza from './CardPizza/CodeCardPizza';

function ContainerCards(){
    const [tela, setTela] = useState('Principal')
    console.log(tela)

    return (
        <Container>
            {tela === 'Principal' && (
                <>
                    <Section>
                        {/* CheckBox Flip */}
                        <BoxItem idRef={'cardPizza'} setActiveCode={setTela}>
                            <CardPizza />
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

            
        </Container>
    );
}

export default ContainerCards