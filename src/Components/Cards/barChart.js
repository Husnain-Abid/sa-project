import React, { useEffect, useState } from 'react';
import FlagsSvg from '../FlagsSvg';


const BarChart = () => {
    const [heights, setHeights] = useState([20, 50, 80, 60, 40]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeights(heights.map(() => Math.floor(Math.random() * 100)));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex justify-center relative'>
            <div className='2xl:w-96 w-80 v-card absolute bottom-0 top-5 left-0 px-4 py-3 rounded-xl ChartBarHeight'>
                <p className='serviceAmount pb-2'>$20,245</p>
                <p className='flex gap-2 pb-4'>
                    <svg width="51" height="28" viewBox="0 0 51 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="50" height="27" rx="13.5" fill="#E8FFF4" />
                        <rect x="0.5" y="0.5" width="50" height="27" rx="13.5" stroke="#8FE7BE" />
                        <path d="M12.6666 11.219V19.3334H11.3333V11.219L7.75726 14.795L6.81445 13.8522L11.9999 8.66675L17.1853 13.8522L16.2425 14.795L12.6666 11.219Z" fill="#1DBF73" />
                        <path d="M24.9834 8.99219V19H23.7188V10.5713L21.1689 11.501V10.3594L24.7852 8.99219H24.9834ZM35.2236 17.9609V19H28.709V18.0908L31.9697 14.4609C32.3708 14.0143 32.6807 13.6361 32.8994 13.3262C33.1227 13.0117 33.2777 12.7314 33.3643 12.4854C33.4554 12.2347 33.501 11.9795 33.501 11.7197C33.501 11.3916 33.4326 11.0954 33.2959 10.8311C33.1637 10.5622 32.9678 10.348 32.708 10.1885C32.4482 10.029 32.1338 9.94922 31.7646 9.94922C31.3226 9.94922 30.9535 10.0358 30.6572 10.209C30.3656 10.3776 30.1468 10.6146 30.001 10.9199C29.8551 11.2253 29.7822 11.5762 29.7822 11.9727H28.5176C28.5176 11.4121 28.6406 10.8994 28.8867 10.4346C29.1328 9.96973 29.4974 9.60059 29.9805 9.32715C30.4635 9.04915 31.0583 8.91016 31.7646 8.91016C32.3936 8.91016 32.9313 9.02181 33.3779 9.24512C33.8245 9.46387 34.1663 9.77376 34.4033 10.1748C34.6449 10.5713 34.7656 11.0361 34.7656 11.5693C34.7656 11.861 34.7155 12.1572 34.6152 12.458C34.5195 12.7542 34.3851 13.0505 34.2119 13.3467C34.0433 13.6429 33.8451 13.9346 33.6172 14.2217C33.3939 14.5088 33.1546 14.7913 32.8994 15.0693L30.2334 17.9609H35.2236ZM36.4678 11.4873V10.9609C36.4678 10.5827 36.5498 10.2386 36.7139 9.92871C36.8779 9.61882 37.1126 9.37044 37.418 9.18359C37.7233 8.99674 38.0856 8.90332 38.5049 8.90332C38.9333 8.90332 39.2979 8.99674 39.5986 9.18359C39.904 9.37044 40.1387 9.61882 40.3027 9.92871C40.4668 10.2386 40.5488 10.5827 40.5488 10.9609V11.4873C40.5488 11.8564 40.4668 12.196 40.3027 12.5059C40.1432 12.8158 39.9108 13.0641 39.6055 13.251C39.3047 13.4378 38.9424 13.5312 38.5186 13.5312C38.0947 13.5312 37.7279 13.4378 37.418 13.251C37.1126 13.0641 36.8779 12.8158 36.7139 12.5059C36.5498 12.196 36.4678 11.8564 36.4678 11.4873ZM37.418 10.9609V11.4873C37.418 11.6969 37.4567 11.8952 37.5342 12.082C37.6162 12.2689 37.7393 12.4215 37.9033 12.54C38.0674 12.654 38.2725 12.7109 38.5186 12.7109C38.7646 12.7109 38.9674 12.654 39.127 12.54C39.2865 12.4215 39.4049 12.2689 39.4824 12.082C39.5599 11.8952 39.5986 11.6969 39.5986 11.4873V10.9609C39.5986 10.7467 39.5576 10.5462 39.4756 10.3594C39.3981 10.168 39.2773 10.0153 39.1133 9.90137C38.9538 9.78288 38.751 9.72363 38.5049 9.72363C38.2633 9.72363 38.0605 9.78288 37.8965 9.90137C37.737 10.0153 37.6162 10.168 37.5342 10.3594C37.4567 10.5462 37.418 10.7467 37.418 10.9609ZM41.3145 17.0928V16.5596C41.3145 16.1859 41.3965 15.8441 41.5605 15.5342C41.7246 15.2243 41.9593 14.9759 42.2646 14.7891C42.57 14.6022 42.9323 14.5088 43.3516 14.5088C43.7799 14.5088 44.1445 14.6022 44.4453 14.7891C44.7507 14.9759 44.9854 15.2243 45.1494 15.5342C45.3135 15.8441 45.3955 16.1859 45.3955 16.5596V17.0928C45.3955 17.4665 45.3135 17.8083 45.1494 18.1182C44.9899 18.4281 44.7575 18.6764 44.4521 18.8633C44.1514 19.0501 43.7891 19.1436 43.3652 19.1436C42.9414 19.1436 42.5768 19.0501 42.2715 18.8633C41.9661 18.6764 41.7292 18.4281 41.5605 18.1182C41.3965 17.8083 41.3145 17.4665 41.3145 17.0928ZM42.2646 16.5596V17.0928C42.2646 17.3024 42.3034 17.5029 42.3809 17.6943C42.4629 17.8812 42.5859 18.0339 42.75 18.1523C42.9141 18.2663 43.1191 18.3232 43.3652 18.3232C43.6113 18.3232 43.8141 18.2663 43.9736 18.1523C44.1377 18.0339 44.2585 17.8812 44.3359 17.6943C44.4134 17.5075 44.4521 17.307 44.4521 17.0928V16.5596C44.4521 16.3454 44.4111 16.1449 44.3291 15.958C44.2516 15.7712 44.1309 15.6208 43.9668 15.5068C43.8073 15.3883 43.6022 15.3291 43.3516 15.3291C43.11 15.3291 42.9072 15.3883 42.7432 15.5068C42.5837 15.6208 42.4629 15.7712 42.3809 15.958C42.3034 16.1449 42.2646 16.3454 42.2646 16.5596ZM43.666 10.4619L38.8057 18.2412L38.0947 17.79L42.9551 10.0107L43.666 10.4619Z" fill="#1DBF73" />
                    </svg>

                    vs last years</p>
                <div>
                    <div className="bar-chart">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month, index) => (
                            <div key={month} className={`bar-container bar-${index + 1}`}>
                                <div
                                    className="bar"
                                    style={{
                                        height: `${heights[index]}%`,
                                        background: `linear-gradient(166.28deg, #00D2D3 43.18%, #00B3FF 90.5%);`,
                                    }}
                                ></div>
                                <span className="label">{month}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FlagsSvg />
        </div>
    );
};

export default BarChart;