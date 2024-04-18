import styles from './styles/styles.module.css'
import Form from "@/app/Form";

// const sans_caption = PT_Sans_Caption({subsets: ['cyrillic', 'latin'], weight: ['400', '700']})
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
                        <h2 className={'text-orange-500 mt-8 text-lg'}>Занимаемся полезным делом уже более <span
                            className={'bg-orange-500 text-white rounded-md p-1 font-bold'}>10 лет</span></h2>
                    </div>
                    <Form/>
                </div>
            </div>

        </main>
    );
}
