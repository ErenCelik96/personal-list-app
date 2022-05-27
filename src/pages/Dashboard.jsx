import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card';
import { Row, Col, Spin } from 'antd'
import '../style/sass/Dashboard.scss'
import DetailPage from './DetailPage';

const Dashboard = () => {
    const employees = useSelector((state) => state.employees);
    const status = useSelector((state) => state.status)
    const [currentId, setCurrentId] = React.useState('');
    const [detailPage, setDetailPage] = React.useState(false);

    const handleVotes = (id) => {
        setCurrentId(id)
    }

    const handleDetailPage = () => {
        setCurrentId('');
        setDetailPage(false);
    }
    
    return (
        <>
            {status === 'success' ?
                <div className="dashboard-container">
                    {
                        employees.slice().sort((first, second) => {
                            return first.rate > second.rate ? -1 : 1;
                        }).map((employee, index) => (
                            !detailPage && !currentId ?
                                <Row key={index}>
                                    <Col className="order-index" span={1}>{index + 1}</Col>
                                    <Col span={22}>
                                        <Card employee={employee} handleVotes={handleVotes} order={index} />
                                    </Col>
                                </Row>
                                :
                                employee.id === currentId ?
                                <DetailPage currentId={currentId} key={index} employee={employee} handleDetailPage={handleDetailPage}/>
                                :
                                null
                        ))

                    }
                </div>
                :
                <Spin tip="Loading..." size='large' />
            }
        </>
    )
}

export default Dashboard;