import { Button, Col, Row, Space, Typography } from 'antd'
import React from 'react'
import '../style/sass/DetailPage.scss';

const DetailPage = ({ employee, handleDetailPage }) => {
    return (
        <div className='detail-page-container'>
            <Row>
                <Col span={2}>
                    <Button className='detail-back' onClick={() => handleDetailPage()}>Back</Button>
                </Col>
            </Row>
            <Space className='detail-card'>
                <Row>
                    <img className='detail-page' width='150px' src={employee.image} alt='profile page' />
                </Row>
                <Row>
                    <Typography className='detail-text'>{employee.firstName}&nbsp;{employee.lastName}</Typography>
                </Row>
                <Row>
                    <Typography className='detail-text'>{employee.phone}</Typography>
                </Row>
                <Row>
                    <Typography className='detail-text'>{employee.address}</Typography>
                </Row>
                <Row>
                    <Typography className='detail-text'>{employee.job}</Typography>
                </Row>
            </Space>
        </div>
    )
}

export default DetailPage