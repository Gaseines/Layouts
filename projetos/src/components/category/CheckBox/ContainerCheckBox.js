import styles from './ContainerCheckBox.module.css';

import Container from '../Container';
import Section from '../Section';
import Code from '../Code';
import Item from '../Item';
import BoxItem from '../BoxItem';
import { useState } from 'react';
import BtnVoltar from '../layoutsCategory/BtnVoltar';
import CheckFlip from './checkFlip/CheckFlip';
import CodeCheckFlip from './checkFlip/CodeCheckFlip';
import CheckSimpleAnimation from './checkSimpleAnimation/CheckSimpleAnimation';
import CodeCheckSimpleAnimation from './checkSimpleAnimation/CodeCheckSimpleAnimation';

function ContainerCheckBox() {

    const [tela, setTela] = useState('Principal')
    console.log(tela)

    return (
        <Container>
            {tela === 'Principal' && (
                <>
                    <Section>
                        {/* CheckBox Flip */}
                        <BoxItem idRef={'checkFlip'} setActiveCode={setTela}>
                            <CheckFlip />
                        </BoxItem>

                        {/* CheckBox Simple Animation */}
                        <BoxItem idRef={'checkSimpleAnimation'} setActiveCode={setTela}>
                            <CheckSimpleAnimation />
                        </BoxItem>

                    </Section>
                </>
            )}

            {tela === 'checkFlip' && (
                <>
                    <BtnVoltar setTela={setTela} />
                    <Section>
                        <Item>
                            <CheckFlip />
                        </Item>
                        <Code linkHtml={'htmlCheckFlip'} linkCss={'cssCheckFlip'} linkJs={'jsCheckFlip'}>
                            <CodeCheckFlip />
                        </Code>
                    </Section>
                </>
            )}

            {tela === 'checkSimpleAnimation' && (
                <>
                    <BtnVoltar setTela={setTela} />
                    <Section>
                        <Item>
                            <CheckSimpleAnimation />
                        </Item>
                        <Code linkHtml={'htmlCheckSimpleAnimation'} linkCss={'cssCheckSimpleAnimation'} linkJs={'jsCheckSimpleAnimation'}>
                            <CodeCheckSimpleAnimation />
                        </Code>
                    </Section>
                </>
            )}

        </Container>
    );
}

export default ContainerCheckBox;
