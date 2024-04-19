import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../public/images/logo.svg'
import styles from './Logo.module.scss'

export default function Logo() {
  return (
    <>
      <Image
        src={logoImage}
        // className={styles.logo}
        // layout="responsive"
        // objectFit="scale-down"
        // objectPosition={"center center"}
        height={540}
        width={640}
        // sizes="640w 750w"
        // alt={name}
        unoptimized
        priority
      />
    </>
  )
}
