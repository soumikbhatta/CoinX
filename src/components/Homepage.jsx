import React from 'react'
import millify from 'millify';
import { Typography,Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCoinsQuery } from '../services/coinxAPI';
import Coins from './Coins';
import News from './News';
import Load from './Load';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCoinsQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Load />;
    return (
        <>
            <Title level={2} className="heading">Global Cryptocurrency Stats</Title>
            <Row>
                {/* antdesign has total 24 spaces */}
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
                </Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to="/coins">Show More</Link></Title>
            </div>
            <Coins simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified />
        
        </>
    )
}

export default Homepage
