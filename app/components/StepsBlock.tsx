'use client';
import styles from './page.module.scss'
import { projects } from '../data';
import Card from './Card';
import Image from 'next/image';

export default function StepsBlock() {

  return (
    <main className={styles.main}>
        {projects.map((project, i) => (
            <Card key={`p_${i}`} i={i}>
                <div className='flex flex-row h-full'>
                    <div className='flex flex-col w-3/6 justify-between'>
                        <div dangerouslySetInnerHTML={{__html: project.title}}></div>
                        <div dangerouslySetInnerHTML={{
                            __html: project.description
                        }}></div>
                    </div>
                    <div className='flex justify-center items-center w-3/6'>
                        <Image src={project.src} alt={"image"} width={300} height={300} style={{
                            width: '100%'
                        }}/>
                    </div>
                </div>
            </Card>
        ))}
    </main>

  )

}