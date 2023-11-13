import { Container, Row, Col, Button } from "react-bootstrap";
import { Divider, TextField } from "@mui/material";
import './login.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const getStorageItems = () => {
    let data = localStorage.getItem('data');
    console.log(data)
    if (data) {
        return JSON.parse(localStorage.getItem('data'));
    } else {
        return [];
    }
}

function ToDoListPage() {

    const [updateText, setUpdateText] = useState('')
    const [items, setItems] = useState(getStorageItems())
    const navigate = useNavigate()

    const textStore = (e) => {
        setUpdateText(e.target.value);
    }

    const addText = () => {
        if(!updateText){

        } else {
            setItems((curItems) => {
                return [...curItems, updateText]
            })
        }
    }

    const deleteItem = (index) => {
        setItems((curItems) => {
            return curItems.filter((e, i) => {
                return i !== index;
            })
        })
    }

    // const editItem = (index) => {
    //     setItems()
    // }

    useEffect(()=>{
        let x = localStorage.getItem('logIn')
        let stayLogin = JSON.parse(x);

        if (!stayLogin){
            navigate('/')
        } 

    }, [])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(items))
    }, [items])

    const removeAll = () => {
        setItems([])
    }

    const logOut = () => {
        localStorage.removeItem('logIn')
        navigate('/')
    }

    return (
        <>
            <Container className="logReg-container">
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col lg={7} style={{marginTop:'40px'}}>
                        <div className="form-div my-5 bg-light">
                            <h2 className="my-5" style={{ fontWeight: 300 }}>To-Do List</h2>
                            <div className="login-div">

                                <TextField className="textfield my-1"
                                    onChange={textStore}
                                    id="standard-basic"
                                    autoComplete="off" label="add your plans"
                                    variant="standard" /><br />

                                <Button className='mt-4' onClick={() => addText()} variant="primary">Add</Button>

                                <Divider className="mt-5" />

                                <div className="my-3 d-grid">
                                    {
                                        items.map((curEle, index) => {
                                            return (

                                                <li className="my-2" key={index}>

                                                    <p id={index} style={{ display: 'contents' }}>{curEle}</p>

                                                    <Button className="del-btn"
                                                        style={{ width: '3.5rem', height: '2.4rem', marginRight: '2rem', marginLeft: '2rem' }} variant="danger"
                                                        onClick={() => deleteItem(index)}
                                                    >Del</Button>

                                                    {/* <Button className="del-btn"
                                                        style={{ width: '3.5rem', height: '2.4rem' }} variant="success"
                                                        onClick={() => editItem(index)}
                                                    >Edit</Button> */} 

                                                </li>
                                            )
                                        })
                                    }

                                </div>
                                
                                <Button className='mt-2' style={{alignItems:'center'}} onClick={() => removeAll()} variant="secondary">Clear All</Button><br/>

                                <Button className='mt-5' style={{alignItems:'center'}} onClick={() => logOut()} variant="dark">Log-Out</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ToDoListPage;



