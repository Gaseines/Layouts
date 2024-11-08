import Container from '../Container';
import Section from '../Section';
import Code from '../Code';
import Item from '../Item';
import BoxItem from '../BoxItem';
import { useState } from 'react';
import BtnVoltar from '../layoutsCategory/BtnVoltar';
import SilverSwitche from './silverSwitche/SilverSwitche';
import CodeSwitcheSilver from './silverSwitche/CodeSwitcheSilver';
import SwitcheRotate from './SwitcheRotate/SwitcheRotate';
import CodeSwitcheRotate from './SwitcheRotate/CodeSwitcheRotate';

function ContainerToggleSwitches() {
    const [tela, setTela] = useState('Principal')
    console.log(tela)

    return (
        <Container>
            {tela === 'Principal' && (
                <>
                    <Section>
                        {/* Switche Modern Silver */}
                        <BoxItem idRef={'switcheSilver'} setActiveCode={setTela}>
                            <SilverSwitche />
                        </BoxItem>

                        {/* Switche Simple Rotate */}
                        <BoxItem idRef={'switcheRotate'} setActiveCode={setTela}>
                            <SwitcheRotate />
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

            {tela === 'switcheRotate' && (
                <>
                    <BtnVoltar setTela={setTela} />
                    <Section>
                        <Item>
                            <SwitcheRotate />
                        </Item>
                        <Code linkHtml={'htmlSwitcheRotate'} linkCss={'cssSwitcheRotate'} linkJs={'jsSwitcheRotate'}>
                            <CodeSwitcheRotate />
                        </Code>
                    </Section>
                </>
            )}


        </Container>
    );
}

export default ContainerToggleSwitches