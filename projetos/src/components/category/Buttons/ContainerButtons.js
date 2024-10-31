import styles from './ContainerButtons.module.css';

import Container from '../Container';
import Section from '../Section';
import BtnFolha from './btnFolhaCode/BtnFolha';
import Code from '../Code';
import CodeBtnFolha from "./btnFolhaCode/CodeBtnFolha";

function ContainerButtons() {
    return (
        <Container>
            <Section>
                <BtnFolha />
                <Code linkHtml={'htmlFolha'} linkCss={'cssFolha'} linkJs={'jsFolha'}>
                    <CodeBtnFolha />
                </Code>
            </Section>
            <div className={styles.divisao}>

            </div>
        </Container>
    );
}

export default ContainerButtons;
