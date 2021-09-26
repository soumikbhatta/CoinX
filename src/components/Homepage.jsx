import React from 'react'
import millify from 'millify';
import { Typography,Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCoinsQuery } from '../services/coinxAPI';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCoinsQuery();
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading...';
    console.log(data)
    return (
        <>
            <Title level={2} className="heading">Global CryptoCoins Stats</Title>
            <Row>
                {/* antdesign has total 24 spaces */}
                <Col span={12}>
                    <Statistic title="Total CryptoCoins" value={globalStats.total} />
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
        
        </>
    )
}

export default Homepage
