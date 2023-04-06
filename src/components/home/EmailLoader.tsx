import styled from 'styled-components'
import check from "../../assets/warnings/check.svg"
import close from "../../assets/warnings/close.svg"
import directions from "../../assets/warnings/directions.svg"

const EmailLoader = ({ status }: { status: number | undefined }) => {

    if (!status) return null;

    const statusMessage = {
        image: directions,
        message: "SENDING..."
    }

    if (status !== 1) {
        if (status === 200) {
            statusMessage.image = check,
                statusMessage.message = "THE EMAIL HAS BEEN SENT!";
        }

        if (status !== 200) {
            statusMessage.image = close,
                statusMessage.message = "SOME ERROR OCURRED, TRY AGAIN LATER...";
        }
    }

    return (
        <Container>
            <WarningContainer>
                <WarningImage src={statusMessage.image} />
                <p>{statusMessage.message}</p>
            </WarningContainer>
        </Container>
    )
}

const WarningContainer = styled.div`
    text-align: center;
`

const WarningImage = styled.img`
    width: 100px;
    margin-bottom: 35px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    border-radius: inherit;
    width: 100%;
    margin: -30px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.699);
    position: absolute;
`

export default EmailLoader