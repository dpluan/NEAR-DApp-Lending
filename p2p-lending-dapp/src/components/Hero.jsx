import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Typography } from 'antd';
const { Title } = Typography;
import Calendar from 'react-calendar'
import DateTimePicker from 'react-datetime-picker'
import {utils} from "near-api-js"
import { Button, Modal } from 'antd';
import Modaldeposit from "./Modaldeposit";

const Hero = () => {

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
      };
    
      const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
        }, 2000);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
      };

    const [value, onChange] = useState(new Date());
    const [showInit, setShowInit] = useState(false);
    const [info, setInfo] = useState();

    useEffect(async () => {
        if (window.accountId) {
            try {
                const inf = await window.contract.get_contract_info();
                setInfo(inf)
                console.log("info in useEffect: ", info)
            } catch (e) {
                console.log(e)
                console.log("set show-init to true");
                setShowInit(true);
            }
        }
    }, [])

    async function deposit(){
        try {
            const inf = await window.contract.get_contract_info();
            setInfo(inf)
            console.log("info in useEffect: ", info)
        } catch (e) {
            console.log(e)
            console.log("set show-init to true");
            setShowInit(true);
        }
    }

    console.log("show info" ,info)

    async function init() {
        console.log("init..")
        const deadline = getdate();
        console.log("deadline: ", deadline)
        await window.contract.new({
            owner_id: window.accountId,
            deadline: deadline
        },
        30000000000000,
        // utils.format.parseNearAmount("0.01")
        )
    }

    function getdate() {
        return Math.floor(new Date(value).getTime()*1000000)
    }

    // console.log("time : ", value)
    // let deadline = Math.floor(new Date(value).getTime()*1000000)
    // console.log("unix time: ", deadline)

    // return (
    //     <>
    //       <Button type="primary" onClick={showModal}>
    //         Open Modal with async logic
    //       </Button>
    //       <Modal
    //         title="Title"
    //         visible={visible}
    //         onOk={handleOk}
    //         confirmLoading={confirmLoading}
    //         onCancel={handleCancel}
    //       >
    //         <p>{modalText}</p>
    //       </Modal>
    //     </>
    //   );
    // };

    return (
        <section >
            <Container>
                <Row className="justify-content-center"> 
                    <Col lg="5" md="6" style={{marginTop: 90}} className="justify-content-center"> 
                        <Title style={{ marginTop: 50, textAlign: 'center', fontSize: 34, fontWeight: 'bold' }} level={3}>P2P Lending + Commitment</Title>
                        <p style={{fontWeight: "lighter", fontSize: 18}} >P2P lending with a commitment to pay on time. here's how you can do exactly that.</p>
                        <div>
                            <button style={{background: "transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box", borderRadius: 40, marginLeft: 50, width: 180}}>Deposit</button>
                            {/* <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button> */}
                            {/* <Modal
                                title="Title"
                                visible={visible}
                                onOk={handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={handleCancel}
                            >
                                <p>this</p>
                            </Modal> */}

                            {/* <Modaldeposit visible={visible} handleOk={handleOk} handleCancel={() => setMintVisible(false)} /> */}

                            <button style={{background: "transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box", borderRadius: 40, marginLeft: 50, width: "180px"}}>Pay</button>   
                        </div>
                        <div style={{marginTop: 30}}>
                            <button style={{background: "transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box", borderRadius: 40, marginLeft: 50, width: 180}}>Add Lenders</button>
                            <button style={{background: "transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box", borderRadius: 40, marginLeft: 50, width: "180px"}}>Add Deadline</button>   
                        </div>
                    </Col>

                    <Col lg="5" md="6" > 
                            <img style={{width: "100%"}} src="https://bafkreibgh6pusv5kd5auvyec2hhexk7pj2npaf7nnbdkyi4lxaaqueql4y.ipfs.nftstorage.link/" alt="img"/>
                    </Col>

                    {/* <Col lg="5" md="6" > 
                        {window.walletConnection.isSignedIn() ? 
                            <>
                                {showInit ? 
                                    <>
                                        <DateTimePicker onChange={onChange} value={value} />
                                        <button style={{background: "transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box", borderRadius: 40, marginLeft: 50, width: 180}} onClick={init} >Initilize Contract</button>
                                    </>
                                    :
                                    <>
                                        <Row >
                                            <p style={{fontWeight: 'bold'}}>Balance</p>
                                            {info && info.loan_amount }
                                        </Row>
                                        <Row>
                                            <p style={{fontWeight: 'bold'}}>Lenders</p>
                                            {info && 
                                            info.user_collateral[0][0] + "-" + info.user_collateral[0][1] }
                                        </Row>
                                    </>
                                }
                            </>
                            :
                            <img style={{width: "100%"}} src="https://bafkreibgh6pusv5kd5auvyec2hhexk7pj2npaf7nnbdkyi4lxaaqueql4y.ipfs.nftstorage.link/" alt="img"/>
                        }
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Hero;