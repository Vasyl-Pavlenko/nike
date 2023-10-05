import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section
      className='
        flex
        justify-between
        items-center
        max-xl:flex-col-reverse
        gap-10
        max-container
      '
    >
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>

      <div
        className='
          flex
          flex-1
          flex-col
        '
      >
        <h2
          className='
            text-4xl
            font-palanquin
            font-bold
          '
        >
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>

        <p className='mt-4 info-text'>
          Embark on a shopping adventure that transforms your experience with unbeatable deals. From our premium selections to astounding savings, we offer unmatched value that sets us apart.
        </p>

        <p className='mt-6 info-text'>
          Step into a realm of possibilities carefully tailored to fulfill your unique desires, surpassing even the highest expectations. Your journey with us is truly extraordinary.
        </p>

        <div
          className='
            mt-11
            flex
            flex-wrap
            gap-4
          '
        >
          <Button
            label='Shop now'
            iconURL={arrowRight}
          />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
