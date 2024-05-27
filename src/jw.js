import React, {useEffect, useState} from 'react';

const Jw = () => {
    const [gasPrices, setGasPrices] = useState({});
    const [requestCount, setRequestCount] = useState(0); // 添加请求总计数状态
    let [intervalTime, setIntervalTime] = useState(1000); // 初始化定时器时间为 1000 毫秒

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
            setRequestCount(prevCount => prevCount + 1); // 递增请求总计数
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
                setRequestCount(prevCount => prevCount + 1); // 递增请求总计数
                await fetchJwBalance(url);

            })
        );
        setGasPrices(newGasPrices);
    };

    useEffect(() => {
        const intervalId = setInterval(fetchAllGasPrices, intervalTime); // 1 second interval
        return () => clearInterval(intervalId);
    }, [intervalTime]);

    return (
        <div>
            <ul>
                {Object.entries(gasPrices).map(([url, gasPrice]) => (
                    <li key={url}>
                        {url}: {typeof gasPrice === 'object' ? JSON.stringify(gasPrice) : gasPrice}
                    </li>
                ))}
            </ul>

            <div>
                <p>总共请求次数: {requestCount}</p>
                <p>当前定时: {intervalTime / 1000} s</p>
                输入定时：
                <input
                    type="number"
                    value={intervalTime / 1000}
                    onChange={(e) => {
                        const time = parseInt(e.target.value);
                        console.log("设置时间", time)
                        setIntervalTime(isNaN(time) || time < 1 ? 1000 : time*1000);
                    }}
                    placeholder="设置定时的时间，单位s"
                />
            </div>
        </div>


    );
};

export default Jw;

