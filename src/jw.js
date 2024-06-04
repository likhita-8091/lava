import React, {useEffect, useRef, useState} from 'react';

const Jw = () => {
    let accounts = [
        "jiang_wei.near",
        "jw.near",
        "root.near",
        "huawei.near",
        "nike.near",
        "eth.near",
        "btc.near",
        "sol.near",
        "dot.near",
        "fil.near"
    ]
    const [requestCount, setRequestCount] = useState(0); // 添加请求总计数状态
    let [intervalTime, setIntervalTime] = useState(1000); // 初始化定时器时间为 1000 毫秒
    const idRef = useRef(0);

    const fetchJwBalance = async (id, url) => {
        try {
            // 随机选一个账户
            let index = Math.floor(Math.random() * 10)
            let account_id = accounts[index]
            console.log("view account: ", account_id)

            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: id,
                    method: 'query',
                    "params": {
                        "request_type": "view_account",
                        "finality": "optimistic",
                        "account_id": account_id,
                    }
                }),
            });
            const result = await response.json();
            if (response.status === 200) {
                setRequestCount(prevCount => prevCount + 1); // 递增请求总计数
                // console.log(`${account_id}余额：${url}`, result.result.amount)
            }

            return result.result; // Assuming result.result contains the gas price
        } catch (error) {
            console.error('Error fetching gas price:', error);
            return null; // Return null in case of error
        }
    };

    const fetchRef = async (id, url) => {
        try {
            id = id + 1
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(
                    {
                        "method": "query",
                        "params": {
                            "request_type": "call_function",
                            "account_id": "v2.ref-finance.near",
                            "method_name": "get_rated_pool",
                            "args_base64": "eyJwb29sX2lkIjozNjg4fQ==",
                            "finality": "optimistic"
                        },
                        "id": id,
                        "jsonrpc": "2.0"
                    }
                ),
            });
            const result = await response.json();
            if (response.status === 200) {
                setRequestCount(prevCount => prevCount + 1); // 递增请求总计数
                console.log(`ref响应：`, result)
            }

            return result.result; // Assuming result.result contains the gas price
        } catch (error) {
            console.error('Error fetching gas price:', error);
            return null; // Return null in case of error
        }
    };

    const fetchRef1 = async (id, url) => {
        try {
            id = id + 2
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(
                    {
                        "method": "query",
                        "params": {
                            "request_type": "call_function",
                            "account_id": "dclv2.ref-labs.near",
                            "method_name": "list_pools",
                            "args_base64": "e30=",
                            "finality": "optimistic"
                        },
                        "id": id,
                        "jsonrpc": "2.0"
                    }
                ),
            });
            const result = await response.json();
            if (response.status === 200) {
                setRequestCount(prevCount => prevCount + 1); // 递增请求总计数
            }

            return result.result; // Assuming result.result contains the gas price
        } catch (error) {
            console.error('Error fetching gas price:', error);
            return null; // Return null in case of error
        }
    };

    const fetchRef2 = async (id, url) => {
        try {
            id = id + 3
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(
                    {
                        "method": "query",
                        "params": {
                            "request_type": "call_function",
                            "account_id": "v2.ref-finance.near",
                            "method_name": "get_stable_pool",
                            "args_base64": "eyJwb29sX2lkIjozNDMzfQ==",
                            "finality": "optimistic"
                        },
                        "id": id,
                        "jsonrpc": "2.0"
                    }
                ),
            });
            const result = await response.json();
            if (response.status === 200) {
                setRequestCount(prevCount => prevCount + 1); // 递增请求总计数
                console.log(`ref响应：`, result)
            }

            return result.result; // Assuming result.result contains the gas price
        } catch (error) {
            console.error('Error fetching gas price:', error);
            return null; // Return null in case of error
        }
    };

    const fetchRef3 = async (id, url) => {
        try {
            id = id + 4
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(
                    {
                        "method": "query",
                        "params": {
                            "request_type": "call_function",
                            "account_id": "v2.ref-finance.near",
                            "method_name": "get_pool",
                            "args_base64": "eyJwb29sX2lkIjoxOTEwfQ==",
                            "finality": "optimistic"
                        },
                        "id": id,
                        "jsonrpc": "2.0"
                    }
                ),
            });
            const result = await response.json();
            if (response.status === 200) {
                setRequestCount(prevCount => prevCount + 1); // 递增请求总计数
                console.log(`ref响应：`, result)
            }

            return result.result; // Assuming result.result contains the gas price
        } catch (error) {
            console.error('Error fetching gas price:', error);
            return null; // Return null in case of error
        }
    };

    const fetchRef4 = async (id, url) => {
        try {
            id = id + 5
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(
                    {
                        "method": "query",
                        "params": {
                            "request_type": "call_function",
                            "account_id": "v2.ref-finance.near",
                            "method_name": "get_pool",
                            "args_base64": "eyJwb29sX2lkIjoxOTEwfQ==",
                            "finality": "optimistic"
                        },
                        "id": id,
                        "jsonrpc": "2.0"
                    }
                ),
            });
            const result = await response.json();
            if (response.status === 200) {
                setRequestCount(prevCount => prevCount + 1); // 递增请求总计数
                console.log(`ref响应：`, result)
            }

            return result.result; // Assuming result.result contains the gas price
        } catch (error) {
            console.error('Error fetching gas price:', error);
            return null; // Return null in case of error
        }
    };

    const fetchAllGasPrices = async (id) => {
        const urls = JSON.parse(localStorage.getItem('userUrls')) || [];
        console.log("id", id)
        await Promise.all(
            urls.map(async (url) => {
                await Promise.all([fetchJwBalance(id, url), fetchRef(id, url), fetchRef1(id, url), fetchRef2(id, url), fetchRef3(id, url), fetchRef4(id, url)]);
                // await fetchJwBalance(id, url);
                // await fetchRef(id, url);
                // await fetchRef1(id, url);
                // await fetchRef2(id, url);
                // await fetchRef3(id, url);
                // await fetchRef4(id, url);
            })
        );
    };

    useEffect(() => {
        // const intervalId = setInterval(fetchAllGasPrices, intervalTime); // 1 second interval
        // 1 1、2、3、4、5、6
        const intervalId = setInterval(() => {
            idRef.current += 1;
            fetchAllGasPrices(idRef.current).then(r => console.log());
	    idRef.current += 6;
        }, intervalTime);

        return () => clearInterval(intervalId);
    }, [intervalTime]);

    return (
        <div>
            <div>
                <p>总请求次数: {requestCount}</p>
                <p>当前定时: {intervalTime / 1000} s</p>
                输入定时：
                <input
                    type="number"
                    value={intervalTime / 1000}
                    onChange={(e) => {
                        const time = parseInt(e.target.value);
                        console.log("设置时间", time)
                        setIntervalTime(isNaN(time) || time < 1 ? 1000 : time * 1000);
                    }}
                    placeholder="设置定时的时间，单位s"
                />
            </div>
        </div>


    );
};

export default Jw;


