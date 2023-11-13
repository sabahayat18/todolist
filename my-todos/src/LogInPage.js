import { Container, Row, Col, Button } from "react-bootstrap";
import { Divider, TextField } from "@mui/material";
import './login.css';
import credential from './idPassw.json'
import { useState } from "react";
import {useNavigate} from "react-router-dom"

// IdPassw
function LogInPage() {

    const [myId, setMyId] = useState('')
    const [myPassw, setMyPassw] = useState('')
    const navigate = useNavigate()

    const updateId = (e) => {
       setMyId(e.target.value) 
    }

    const updatePass = (e) => {
        setMyPassw(e.target.value)
    }

    const validationData = () => {
        if (credential.id === myId && credential.password === myPassw){
            localStorage.setItem('logIn', JSON.stringify(credential))
            navigate('/todolistpage')
        } else {
            alert("Credintials isn't valid")
        }
    }

    return (
        <>
            <Container className="logReg-container">
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col lg={7} style={{marginTop: '100px'}}>
                        <div className="form-div my-5 bg-light">
                            <h2 className="my-5" style={{ fontWeight: 300 }}>Log-In</h2>
                            <div className="login-div">

                                <TextField className="textfield my-3" id="standard-basic" autoComplete="off" label="e-mail" variant="standard" onChange={updateId} /><br />

                                <TextField className="textfield my-3" id="standard-basic" autoComplete="off" type="password" label="password" onChange={updatePass} variant="standard" /><br />

                                <Button className='mt-5' variant="primary" onClick={validationData}>Sign-In</Button><br />

                                <Divider className="mt-5" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LogInPage