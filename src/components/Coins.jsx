import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import Load from './Load';

import { useGetCoinsQuery } from '../services/coinxAPI';

const Coins = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: coinList, isFetching } = useGetCoinsQuery(count);
    const [coins, setCoins] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCoins(coinList?.data?.coins);
        const filteredData = coinList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

        setCoins(filteredData);
    }, [coinList, searchTerm]);

    if (isFetching) return <Load />;



    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {coins?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link key={currency.id} to={`/crypto/${currency.id}`}>
                            <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable>
                                <p>Price: {`${millify(currency.price)} USD`}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default Coins
