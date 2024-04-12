import NavBar from "../../NavBar/NavBar";

const Reviews = () => {
    const reviews = [
        {
            from: 'Max',
            text: 'Fantastic service, my pet was well looked after. Highly recommended!',
        },
        {
            from: 'Lucy',
            text: 'Amazing clinic! Really professional staff and great care for my little puppy.',
        },
        {
            from: 'Charlie',
            text: 'Great experience! Will definitely be returning for future needs.',
        },
        {
            from: 'Jack',
            text: 'Highly skilled and friendly staff. My kitten got the best care possible.',
        }
    ];

  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <h2 class="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        Reviews
      </h2>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-4 pb-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => {
          return (
            <div
              key={`${review.from}${review.text.slice(-10)}`}
              className="h-30px flex w-full auto-rows-min flex-col items-start justify-start gap-4 rounded-md border-2 border-gray-300 bg-[#f2ffe2de] p-3 shadow-lg"
            >
              <div className="text-blckGreen text-xl font-bold">
                {review.from}:
              </div>
              <div>{review.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
