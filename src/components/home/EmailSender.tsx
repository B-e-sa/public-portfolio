import emailjs from "@emailjs/browser";
import { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import GoogleReCaptcha from "react-google-recaptcha";
import styled from "styled-components";
import config from "../../../config";
import { Context } from "../../context";
import EmailLoader from "./EmailLoader";

const EmailSender = () => {

    const captchaRef = useRef(null);

    const {
        isModalShowing,
        setIsModalShowing
    } = useContext(Context);

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [captcha, setCaptcha] = useState<string | null>(null);
    const [emailStatus, setEmailStatus] = useState<number | undefined>();

    const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (
            email.trim().length === 0
            || message.trim().length === 0
            || subject.trim().length === 0
            || !captcha || captcha.length === 0
        ) return;

        setEmailStatus(1);

        emailjs.send(
            config.emailjs.serviceId,
            config.emailjs.templateId,
            {
                subject: subject,
                email: email,
                message: message,
            },
            config.emailjs.publicId
        )
            .then((e) => {
                setEmailStatus(e.status);

                if (e.status === 200) {
                    setEmail("");
                    setCaptcha("");
                    setSubject("");
                    setMessage("");
                }

                setTimeout(() => {
                    setEmailStatus(undefined);
                }, 1400);
            })
            .catch(e => console.log(e));

    }

    return ReactDOM.createPortal(
        <FormContainer style={{ top: window.scrollY }} onClick={() => setIsModalShowing(!isModalShowing)}>
            <Form
                onSubmit={handleSend}
                onClick={e => e.stopPropagation()}
                autoComplete="on"
            >
                <Label htmlFor="your email">Your email:</Label>
                <TextInput
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="your email"
                    placeholder="youremail@email.com"
                    aria-label="your email"
                />
                <Label htmlFor="subject">Subject:</Label>
                <TextInput
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    placeholder="something"
                    name="subject"
                    aria-label="subject"
                />
                <TextArea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="email message"
                    placeholder="some something"
                    aria-label="email message"
                    cols={30}
                    rows={10}
                />
                <GoogleReCaptcha
                    ref={captchaRef}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    }}
                    onChange={(token) => setCaptcha(token)}
                    sitekey={config.reCAPTCHA.sitekey}
                />
                <SubmitButton
                    type="submit"
                    aria-label="send"
                >
                    Send
                </SubmitButton>
                <EmailLoader status={emailStatus} />
                <p style={{ alignSelf: "center", marginTop: 15 }}>
                    if the reCAPTCHA does not appear, reload the page
                </p>
            </Form>
        </FormContainer>,
        document.getElementById("email-portal")!
    );
}

const Label = styled.label`
    font-size: 15pt;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
`

const SubmitButton = styled.button`
    background-color: white;
    color: black;
    height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`

const FormContainer = styled.div`
    font-family: "Raleway", sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    z-index: 1000;
    background-color: rgba(78, 78, 78, 0.699);
`

const Form = styled.form`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 650px;
    background-color: black;
    border-radius: 10px;
    padding: 30px;
`

const TextInput = styled.input`
    background-color: transparent;
    border: none;
    margin-bottom: 10px;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
    padding-top: 5px;
    font-size: 12pt;

    &:focus {
        outline: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: white;
        -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    }
`

const TextArea = styled.textarea`

    font-size: 12pt;
    background-color: transparent;
    resize: none;
    border: none;
    border: 1px solid gray;
    padding: 5px;
    margin-bottom: 5px;

    &:focus {
        outline: none;
    }

`

export default EmailSender;