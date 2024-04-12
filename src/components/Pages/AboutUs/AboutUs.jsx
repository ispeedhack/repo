import NavBar from "../../NavBar/NavBar";

const AboutUs = () => {
  return (
    <div className="bg-bgGreen md:min-h-screen">
      <NavBar />
      <h2 class="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        Про Нас
      </h2>
      <div className="md:container">
        <div className="mx-auto flex max-w-[1280px] flex-col-reverse items-center md:mt-10 md:flex-row md:items-start md:gap-10 md:pb-10">
          <div className="container mt-5 px-4">
            <p className="text-justify text-gray-500 md:text-left lg:text-lg">
              <span className="font-bold">&#9642; Ласкаво просимо</span> до нашої
              ветеринарну клініку, де здоров'я і благополуччя вашого пухнастого
              друга є нашим головним пріоритетом. Наша досвідчена та співчутлива команда
              ветеринарних спеціалістів присвячує себе наданню
              високоякісного, комплексного догляду за всіма потребами вашого улюбленця. У
              нашій клініці ми пропонуємо широкий спектр послуг для задоволення різноманітних
              потреб наших пацієнтів, включаючи планові огляди, вакцинацію,
              діагностичні дослідження, хірургічні процедури та багато іншого. Наш
              сучасний центр оснащений найсучаснішим обладнанням
              та інструментами для забезпечення найкращого догляду за вашим улюбленцем. Ми
              розуміємо особливий зв'язок, який існує між домашнім улюбленцем та його
              власником, і ми прагнемо будувати міцні, довготривалі
              відносини з усіма нашими клієнтами
            </p>
          </div>
          <div className="container w-full px-4">
            <img
              src="/assets/about-us/dog.jpg"
              alt="dog"
              className="rounded-md opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
