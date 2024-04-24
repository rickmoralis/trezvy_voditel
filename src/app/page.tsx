import styles from './styles/styles.module.css'
import Form from "@/app/Form";
import Image from 'next/image'
import img from '../assets/tild6530-3133-4631-b461-386232653562__568x390_usluga-trezv.jpeg'
import img2 from '../assets/tild6264-6238-4662-b631-383332663632__91337ed135a267a61d4f.jpeg'
import {FaBrain, FaBusinessTime, FaCompass, FaRocket, FaSmileBeam, FaThumbsUp} from "react-icons/fa";

export default function Home() {

    return (
        <main>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div>
                        <h1 className={'font-bold text-5xl text-white'}>Трезвый водитель <br/>в минске</h1>
                        <div className={'text-2xl font-bold my-4 text-orange-500 p-0'}><a
                            className={'border-b-[3px] border-b-orange-500'} href="tel:+375333854577">+375 (33)
                            385-45-77</a></div>
                        <button
                            className={'w-full bg-green-700 max-w-[250px] py-4 rounded-md shadow-md font-bold tracking-wider'}>
                            <a href="tel:+375333854577">Позвонить</a></button>
                        <h2 className={'text-orange-500 mt-8 text-lg'}>Занимаемся полезным делом уже более <span
                            className={'bg-orange-500 text-white rounded-md p-1 font-bold'}>10 лет</span></h2>
                    </div>
                    <Form/>
                </div>
            </div>
            <div className={'max-w-[1440px] m-auto bg-gray-100 px-2'}>
                <div><h2 className={'text-5xl font-bold text-center pt-5'}>Услуги</h2></div>
                <div className={'w-full flex flex-col justify-center items-start mt-5 sm:flex-row sm:gap-4'}>
                    <div className={'min-w-[150px] w-full flex justify-end items-center sm:justify-center'}>
                        <Image src={img}
                               alt={'driver'}
                        />
                    </div>
                    <div id={'#price'} className={'min-w-[150px] w-full sm:w-1/2'}>
                        <h3 className={'font-bold text-2xl'}>Услуга трезвый водитель в Минске</h3>
                        <div>Стоимость от <span className={'font-bold text-[#D9711C] text-xl'}>40 р.</span> <br/>
                            + на такси обратно к машине
                        </div>
                    </div>
                </div>
                <div className={'w-full flex flex-col justify-center items-start mt-5 sm:flex-row sm:gap-4'}>
                    <div className={'min-w-[150px] w-full flex justify-end items-center sm:justify-center'}>
                        <Image src={img2}
                               className={'max-w-[568px] w-full'}
                               alt={'driver_stetam'}
                        />
                    </div>
                    <div className={'min-w-[150px] w-full sm:w-1/2'}>
                        <h3 className={'font-bold text-2xl'}>Личный водитель на вашем авто в Минске</h3>
                        <div>Стоимость от <span className={'font-bold text-[#D9711C] text-xl'}>40 р.</span> <br/>
                            + на такси обратно к машине
                        </div>
                    </div>
                </div>
            </div>
            <div className={'max-w-[1440px] m-auto bg-gray-100 py-5'}>
                <div><h2 className={'text-3xl font-bold text-center '}>Преимущества</h2></div>
                <div className={'flex w-full flex-col mt-5 p-2 gap-2 sm:flex-row sm:flex-wrap'}>
                    <div className={'bg-gray-200 p-2 rounded-md sm:w-[32.3%]'}>
                        <svg width="0" height="0">
                            <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#7a6ded" offset="0%"/>
                                <stop stopColor="#591885" offset="100%"/>
                            </linearGradient>
                        </svg>
                        <FaBrain className={'text-4xl w-full '} style={{fill: "url(#gradient)"}}/>
                        <div className={'text-center font-bold mt-3'}>Квалификация</div>
                        <p className={'text-center'}>Большой опыт в управлении автомобилей различных марок</p>
                    </div>
                    <div className={'bg-gray-200 p-2 rounded-md sm:w-[32.3%]'}>

                        <FaThumbsUp className={'text-4xl w-full'} style={{fill: "url(#gradient)"}}/>
                        <div className={'text-center font-bold mt-3'}>НАДЕЖНОСТЬ</div>
                        <p className={'text-center'}>Все наши водители прошли курсы контраварийной подготовки до приема
                            на работу</p>
                    </div>
                    <div className={'bg-gray-200 p-2 rounded-md sm:w-[32.3%]'}>
                        <FaBusinessTime className={'text-4xl w-full'} style={{fill: "url(#gradient)"}}/>
                        <div className={'text-center font-bold mt-3'}>ВРЕМЯ-ДЕНЬГИ</div>
                        <p className={'text-center'}>Всегда отвечаем на звонок клиента или быстро перезваниваем на
                            пропущенный вызов</p>
                    </div>
                    <div className={'w-full bg-gray-200 p-2 rounded-md sm:w-[32.3%]'}>
                        <FaCompass className={'text-4xl w-full'} style={{fill: "url(#gradient)"}}/>
                        <div className={'text-center font-bold mt-3'}>ЗНАНИЕ ГОРОДА</div>
                        <p className={'text-center'}>Знаем город без использования систем навигации и путей оптимизации
                            маршрута!!</p>
                    </div>
                    <div className={'bg-gray-200 p-2 rounded-md sm:w-[32.3%]'}>
                        <FaSmileBeam className={'text-4xl w-full'} style={{fill: "url(#gradient)"}}/>
                        <div className={'text-center font-bold mt-3'}>ВЕЖЛИВОСТЬ</div>
                        <p className={'text-center'}>Поездка с нами будет максимально комфортной для Вас. Никакого
                            хамства и опозданий.</p>
                    </div>
                    <div className={'bg-gray-200 p-2 rounded-md sm:w-[32.3%]'}>
                        <FaRocket className={'text-4xl w-full'} style={{fill: "url(#gradient)"}}/>
                        <div className={'text-center font-bold mt-3'}>ВРЕМЯ ПРИБЫТИЯ ВОДИТЕЛЯ ГАРАНТИРОВАННО ЧЕРЕЗ 15-25
                            МИНУТ
                        </div>
                        <p className={'text-center'}>Готовность оказывать помощь клиенту в разных нестандартных
                            ситуациях</p>
                    </div>
                </div>
            </div>
            <div className={'max-w-[1440px] m-auto bg-black/80 py-20'}>
                <h2 className={'text-center font-bold text-4xl text-white'}>Заказать звонок</h2>
                <div className={'flex justify-center items-center w-full'}>
                    <Form/>
                </div>
            </div>
        </main>
    );
}
