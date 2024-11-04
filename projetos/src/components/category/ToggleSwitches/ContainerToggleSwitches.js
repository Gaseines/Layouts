import Container from '../Container';
import Section from '../Section';
import Code from '../Code';
import Item from '../Item';
import BoxItem from '../BoxItem';
import { useState } from 'react';
import BtnVoltar from '../layoutsCategory/BtnVoltar';
import SilverSwitche from './silverSwitche/SilverSwitche';
import CodeSwitcheSilver from './silverSwitche/CodeSwitcheSilver';

function ContainerToggleSwitches(){
    const [tela, setTela] = useState('Principal')
    console.log(tela)

    return (
        <Container>
            {tela === 'Principal' && (
                <>
                    <Section>
                        {/* CheckBox Flip */}
                        <BoxItem idRef={'switcheSilver'} setActiveCode={setTela}>
                            <SilverSwitche />
                        </BoxItem>

                    </Section>
                </>
            )}

            {tela === 'switcheSilver' && (
                <>
                    <BtnVoltar setTela={setTela} />
                    <Section>
                        <Item>
                            <SilverSwitche />
                        </Item>
                        <Code linkHtml={'htmlSwitcheSilver'} linkCss={'cssSwitcheSilver'} linkJs={'jsSwitcheSilver'}>
                            <CodeSwitcheSilver />
                        </Code>
                    </Section>
                </>
            )}

            
        </Container>
    );
}

export default ContainerToggleSwitches