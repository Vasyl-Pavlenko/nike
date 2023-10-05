import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div 
        className='
          flex
          justify-between
          items-start
          gap-20
          flex-wrap
          max-lg:flex-col
        '
      >
        <div 
          className='
            flex 
            flex-col 
            items-start
          '
        >
          <a href='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </a>

          <p 
            className='
              mt-6
              text-base
              leading-7
              font-montserrat
              text-white-400
              sm:max-w-sm
            '
          >
            Prepare your footwear for the upcoming term by visiting your nearest Nike store.
            Find your ideal size in-store and unlock rewards.
          </p>

          <div
            className='
              flex
              items-center
              gap-5
              mt-8
            '
          >
            {socialMedia.map(({src, alt, url}) => (
              <div
                className='
                  flex 
                  justify-center 
                  items-center 
                  w-12 
                  h-12 
                  bg-white 
                  rounded-full
                '
                key={alt}
              >
                <a href={url}>
                  <img
                  src={src}
                  alt={alt}
                  width={24}
                  height={24}
                />
                </a>
                
              </div>
            ))}
          </div>
        </div>

        <div 
          className='
            flex 
            flex-1 
            justify-between 
            lg:gap-10 
            gap-20 
            flex-wrap
          '
        >
          {footerLinks.map(({title, links}) => (
            <div key={title}>
              <h4 
                className='
                  font-montserrat 
                  text-2xl 
                  leading-normal 
                  font-medium mb-6 
                  text-white
                '
              >
                {title}
              </h4>

              <ul>
                {links.map(({name, link}) => (
                  <li
                    className='
                      mt-3 
                      font-montserrat 
                      text-base 
                      leading-normal 
                      text-white-400 
                      hover:text-slate-gray
                    '
                    key={name}
                  >
                    <a href={link}>
                      {name} 
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div 
        className='
          flex 
          justify-between 
          text-white-400 
          mt-24 
          max-sm:flex-col 
          max-sm:items-center
        '
      >
        <div 
          className='
            flex 
            flex-1 
            justify-start 
            items-center 
            gap-2 
            font-montserrat 
            cursor-pointer
          '
        >
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>
            Copyright. All rights reserved.
          </p>
        </div>

        <p
          className='
            font-montserrat
            cursor-pointer
          '
        >
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
