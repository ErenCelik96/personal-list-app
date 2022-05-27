import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import '../style/sass/Card.scss';

const Card = ({ employee, handleVotes, order }) => {
  const [vote, setVote] = React.useState(employee.rate);

  return (
    <Row className='card-container' align='middle' style={{ border: order > 2 ? '2px solid #FFB6C1' : '2px solid #32CD32'}}>
      <Col span={6} className='detail' onClick={()=>handleVotes(employee.id)}>
        <img width='25px' src={employee.image} alt='profile picture'/>
      </Col>
      <Col span={8} className='detail' onClick={()=>handleVotes(employee.id)}>
        <Typography>{employee.firstName}&nbsp;{employee.lastName}</Typography>
      </Col>
      <Col span={4}>Votes: {vote}</Col>
      <Col span={6}>
        <Button className='vote-button' onClick={() => setVote(vote + 1)}>Vote For Me</Button>
      </Col>
    </Row>
  )
}

export default Card;