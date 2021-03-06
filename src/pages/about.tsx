import { BsDiscord, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

import Image from '../components/image';
import Link from '../components/link';
import { DefaultMetaData } from '../components/seo';
import config from '../data/config.json';

export default function AboutPage() {
  return (
    <>
      <DefaultMetaData
        description="Hello, I am Chan Ka Tsun which is a energetic boy living in Hong Kong SAR, I love programming and reading!"
        title="About Me"
      />
      <div className="flex flex-col items-center">
        <h1 className="mb-5 text-6xl">About Me</h1>
        <div className="mb-10 max-w-2xl space-y-10 text-left">
          <div className="mb-7 text-2xl">
            <div
              className="mb-4 flex flex-row items-center justify-start border-b-2 border-gray-500"
              id="bio">
              <Image
                lightboxEnabled
                alt="ckt"
                src="/media/ckt-face.png"
                height={1850 / 15}
                width={1470 / 15}
              />
              <h2 className="text-4xl ">👍BIO</h2>
            </div>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <p>Hello!</p>
              <p>My name is Chan Ka Tsun (also called Kelvin).</p>
              <p>I live and was born in Hong Kong SAR.</p>
              <p>
                I love programming, I can feel a sense of accomplishment when I
                am coding, especially on this website. Also, I have learned how
                to tackle numerous issues and bugs with patients.
              </p>
              <p>Reading is also my second hobby, I love philosophy.</p>
            </div>
          </div>
          <div className="mb-7 text-2xl">
            <div
              className="mb-4 flex flex-row items-center justify-start border-b-2 border-gray-500"
              id="status">
              <h2 className="text-4xl ">🤔Current Sttaus</h2>
            </div>
            <div className="space-y-2 text-purple-500 dark:text-purple-400">
              <p>Studying in Secondary School in Hong Kong (4 years)</p>

              <p className="text-red-500">RUSHING for HKDSE</p>
            </div>
          </div>
          <div className="mb-7">
            <h2
              className="mb-4 border-spacing-y-9 border-b-2 border-gray-500 text-4xl"
              id="social-media">
              🐋Social Media
            </h2>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <div className="flex flex-row items-center justify-between space-x-20 text-2xl">
                <div className="flex flex-row space-x-1">
                  <BsInstagram />
                  <p>Instagram:</p>
                </div>
                <Link enableExternalIcon href={config.author.social.instagram}>
                  @cktidy.1031
                </Link>
              </div>
              <div className="flex flex-row items-center justify-between space-x-20 text-2xl">
                <div className="flex flex-row space-x-1">
                  <BsDiscord />
                  <p>Discord:</p>
                </div>
                <Link
                  enableExternalIcon
                  href={config.author.social.discordServer}>
                  wHVPbYHG
                </Link>
              </div>
              <div className="flex flex-row items-center justify-between space-x-20 text-2xl">
                <div className="flex flex-row space-x-1">
                  <BsTwitter />
                  <p>Twitter:</p>
                </div>
                <Link enableExternalIcon href={config.author.social.twitter}>
                  @cktsun1031
                </Link>
              </div>
              <div className="flex flex-row items-center justify-between space-x-20 text-2xl">
                <div className="flex flex-row space-x-1">
                  <BsGithub />
                  <p>Github:</p>
                </div>
                <Link enableExternalIcon href={config.author.social.github}>
                  @cktsun1031
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-7">
            <h2 className="mb-4 border-b-2 border-gray-500 text-4xl">
              🔋Equipments
            </h2>
            <div className="space-y-2 text-2xl text-gray-600 dark:text-gray-400">
              <div className="flex flex-row justify-between space-x-10">
                <p>Mobile:</p>
                <p>Xiaomi 10T Pro 5G (8+256GB)</p>
              </div>
              <div className="flex flex-row justify-between space-x-10">
                <p>Tablet:</p>
                <p>Apple iPad 6 (Wi-Fi 128GB)</p>
              </div>
              <div className="flex flex-row justify-between space-x-10">
                <p>Desktop:</p>
                <p>IdeaCentre 3 07IAB7 + LC24F390FHCXXK 24&quot; CF39</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 border-b-2 border-gray-500 text-4xl">
              🦣Value of LIFE
            </h2>
            <div className="space-y-2 text-2xl text-gray-600 dark:text-gray-400">
              <p>三萬六千日 夜夜當秉燭</p>
              <p>
                Our life is so short. Seize the day you can play! Enjoy chasing
                your DREAM!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
