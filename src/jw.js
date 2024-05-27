import React, {useEffect, useState} from 'react';

const Jw = () => {
    const [gasPrices, setGasPrices] = useState({});

    const fetchGasPrice = async (url) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: 'dontcare',
                    method: 'gas_price',
                    params: [null],
                }),
            });
            const result = await response.json();
            return result.result; // Assuming result.result contains the gas price
        } catch (error) {
            console.error('Error fetching gas price:', error);
            return null; // Return null in case of error
        }
    };

    const fetchJwBalance = async (url) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: 'dontcare',
                    method: 'query',
                    "params": {
                        "request_type": "view_account",
                        "finality": "final",
                        "account_id": "jiang_wei.near"
                    }
                }),
            });
            const result = await response.json();
            console.log(`江伟余额：${url}`, result.result.amount)
            return result.result; // Assuming result.result contains the gas price
        } catch (error) {
            console.error('Error fetching gas price:', error);
            return null; // Return null in case of error
        }
    };

    const fetchAllGasPrices = async () => {
        const urls = JSON.parse(localStorage.getItem('userUrls')) || [];

        const newGasPrices = {};
        await Promise.all(
            urls.map(async (url) => {
                const gasPrice = await fetchGasPrice(url);
                if (gasPrice !== null) {
                    newGasPrices[url] = gasPrice;
                }

                await fetchJwBalance(url);

            })
        );
        setGasPrices(newGasPrices);
    };

    useEffect(() => {
        fetchAllGasPrices();
        const intervalId = setInterval(fetchAllGasPrices, 1200); // 1 second interval
        return () => clearInterval(intervalId);
    }, );

    return (
        <div>
            <ul>
                {Object.entries(gasPrices).map(([url, gasPrice]) => (
                    <li key={url}>
                        {url}: {typeof gasPrice === 'object' ? JSON.stringify(gasPrice) : gasPrice}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Jw;

