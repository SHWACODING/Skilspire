import Header from "@/components/Header";
import Image from "next/image";
import skillspire_logo from "@/assets/skillspire-logo.jpg";
import Link from "next/link";
import { Button } from "@headlessui/react";
import main from "@/assets/main.jpg";
import courses from "@/assets/courses.jpg";
import scholarships from "@/assets/shcolarships.jpg";
import programs from "@/assets/programs.jpg";
import teamwork from "@/assets/family.jpg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <div>
        <Image
          src={main}
          alt="Skillspire"
          className="mt-7 w-full sm:h-[400px] md:h-[520px]"
        />
      </div>

      <div className="bg-gray-200 text-[#0357a1] h-auto mx-auto text-center font-bold py-7">
        <Link
          href={"/about"}
          className="flex items-center justify-center space-x-4"
        >
          <Image
            src={skillspire_logo}
            className="rounded-full"
            alt="skillspire logo"
            width={50}
            height={50}
          />
          <h1 className="sm:text-xl md:text-3xl py-5">SKILSPIRE Community</h1>
        </Link>
        <div className="md:flex md:items-start md:justify-between px-8 md:px-16 py-6 text-gray-600">
          <p className="text-center sm:text-xl/tight md:text-3xl/relaxed px-8 py-5 border-2 border-[#0357a1] rounded-md mt-4">
            فریقنا هو فریق شبابي یهدف إلی تمکین الشباب وتطویر مهاراتهم. یقدم
            الفریق ورش عمل ودورات تدریبیة يف مجالات متعددة مثل التسویق الرقمي،
            البرمجة، والبحث العلمي، لمساعدة الشباب یلع النجاح يف حیاتهم الشخصیة
            والمهنیة. یتعاون الفریق مع خبراء متخصصین لضمان تقدیم أیلع مستوى من
            الجودة وفتح فرص جدیدة للشباب لتحقیق أحلامهم. الهدف الأساسي هو بناء
            جیل واع ومبدع قادر یلع تطویر مجتمعه.
          </p>
        </div>
        <div className="pb-6 pt-2">
          <Link href={"/about"}>
            <Button
              type="button"
              className={
                "bg-inherit border rounded-2xl px-4 py-2 border-[#0357a1] hover:bg-[#0357a1] hover:text-white"
              }
            >
              Overview
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-300 text-[#0357a1] h-auto mx-auto font-bold py-7">
        <Link
          href={"/courses"}
          className="flex items-center justify-center space-x-4 hover:text-[#0357a1da]"
        >
          <Image
            src={skillspire_logo}
            className="rounded-full"
            alt="skillspire logo"
            width={50}
            height={50}
          />
          <h1 className="sm:text-xl md:text-3xl py-5">SKILSPIRE Courses</h1>
        </Link>
        <div className="md:flex md:items-center md:justify-between sm:grid sm:grid-cols-1 sm:mx-auto px-4 py-6 text-gray-600">
          <Image
            src={courses}
            alt="Courses"
            className="w-[560px] h-[250px] md:h-[320px] md:hidden"
          />
          <p className="md:w-[600px] text-right sm:text-lg md:text-xl md:pr-8 md:pl-3 pt-3 sm:block">
            !نوفر لك مجموعة واسعة من الكورسات التي تغطي مختلف المجالات، بدءًا من
            المهارات التقنية مثل البرمجة والتصميم إلى المهارات الشخصية مثل إدارة
            الوقت والتواصل. كل كورس يتم تقديمه من قبل خبراء في المجال لضمان جودة
            المحتوى والتعلم الفعال. بالإضافة إلى ذلك، تحتوي الكورسات على مواد
            تفاعلية واختبارات لتعزيز تجربة التعلم. هدفنا هو تزويدك بمعرفة عميقة
            تساعدك في التطور وتحقيق نجاح دائم. ابدأ رحلتك التعليمية الآن
          </p>
          <Image
            src={courses}
            alt="Courses"
            className="w-[560px] h-[250px] md:h-[320px] pr-8 hidden md:inline-block"
          />
        </div>
      </div>

      <div className="bg-gray-200 text-[#0357a1] h-auto mx-auto font-bold py-7">
        <Link
          href={"/programs"}
          className="flex items-center justify-center space-x-4 pr-3"
        >
          <Image
            src={skillspire_logo}
            className="rounded-full"
            alt="skillspire logo"
            width={50}
            height={50}
          />
          <h1 className="sm:text-xl md:text-3xl py-5">SKILSPIRE Programs</h1>
        </Link>
        <div className="md:flex md:items-center md:justify-between sm:grid sm:grid-cols-1 sm:mx-auto px-4 py-6 text-gray-600">
          <Image
            src={programs}
            alt="Programs"
            className="w-[560px] h-[250px] md:h-[320px] md:pl-20 md:pr-3 pb-3 sm:block"
          />
          <p className="md:w-[600px]  text-right sm:text-lg md:text-xl md:pr-8 md:pl-3 pt-3 sm:block">
            !برامجنا مصممة لتلبية احتياجاتك التعليمية والمهنية في مجالات متعددة.
            من التدريب العملي وورش العمل إلى البرامج المكثفة، نوفر لك محتوى
            تعليمي متنوع يدعم تطورك الشخصي والمهني. تشمل البرامج مجالات مثل
            البرمجة، التسويق الرقمي، القيادة، وغيرها الكثير. سواء كنت تبحث عن
            أساسيات جديدة أو تريد تطوير مهاراتك الحالية، فإن برامجنا تقدم لك
            الأدوات اللازمة لتحقيق أهدافك. انضم إلينا واستثمر في مهاراتك اليوم
          </p>
        </div>
      </div>

      <div className="bg-gray-300 text-[#0357a1] h-auto mx-auto font-bold py-7">
        <Link
          href={"/shcolarships"}
          className="flex items-center justify-center space-x-4 hover:text-[#0357a1da]"
        >
          <Image
            src={skillspire_logo}
            className="rounded-full"
            alt="skillspire logo"
            width={50}
            height={50}
          />
          <h1 className="sm:text-xl md:text-3xl py-5">
            SKILSPIRE Scholarships
          </h1>
        </Link>
        <div className="md:flex md:items-center md:justify-between sm:grid sm:grid-cols-1 sm:mx-auto px-4 py-6 text-gray-600">
          <Image
            src={scholarships}
            alt="Scholarships"
            className="w-[560px] h-[250px] md:h-[320px] md:hidden"
          />
          <p className="md:w-[600px]  text-right sm:text-lg md:text-xl md:pr-8 md:pl-3 pt-3 sm:block">
            !نسعى لمساعدتك في الوصول إلى أفضل فرص التعليم من خلال توفير معلومات
            شاملة عن المنح الدراسية المتاحة عالميًا ومحليًا. ستجد لدينا تفاصيل
            دقيقة عن متطلبات التقديم، الفئات المستهدفة، وكيفية إعداد مستنداتك
            بشكل احترافي. بالإضافة إلى ذلك، نقدم نصائح تساعدك في كتابة خطابات
            التحفيز وملء النماذج المطلوبة. هدفنا هو أن يكون لديك فرصة عادلة
            لتحقيق حلمك الأكاديمي. اكتشف فرصًا تغير حياتك وابدأ رحلتك نحو مستقبل
            أكثر إشراقًا
          </p>
          <Image
            src={scholarships}
            alt="Scholarships"
            className="w-[560px] h-[250px] md:h-[320px] pr-8 hidden md:inline-block"
          />
        </div>
      </div>

      <div className="bg-gray-200 text-[#0357a1] h-auto mx-auto font-bold py-7">
        <Link
          href={"/teamwork"}
          className="flex items-center justify-center space-x-4"
        >
          <Image
            src={skillspire_logo}
            className="rounded-full"
            alt="skillspire logo"
            width={50}
            height={50}
          />
          <h1 className="sm:text-xl md:text-3xl py-5">SKILSPIRE Teamwork</h1>
        </Link>
        <div className="md:flex md:items-center md:justify-between sm:grid sm:grid-cols-1 sm:mx-auto px-4 py-6 text-gray-600">
          <Image
            src={teamwork}
            alt="Teamwork"
            className="w-[560px] h-[250px] md:h-[320px] md:pl-20 md:pr-3 pb-3 sm:block"
          />
          <div>
            <p className="md:w-[600px] text-right sm:text-lg md:text-xl md:pr-8 md:pl-3 pt-3 sm:block pb-6">
              !فريقنا مجموعة من الشباب المتحمسين الذين يؤمنون بقدرة التعليم
              والتطوع على تغيير العالم. نعمل بجد لتقديم محتوى قيم وبرامج مبتكرة
              تدعم الشباب في تحقيق أحلامهم. نحن هنا لنرشدك في كل خطوة، من اختيار
              المنحة المناسبة إلى تحسين مهاراتك من خلال الكورسات. رؤيتنا هي
              تمكين الأفراد من التميز وإحداث تأثير إيجابي في مجتمعهم. انضم إلينا
              لتكون جزءًا من هذا الإنجاز
            </p>
            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSfKDAGVhi6VABs3E1sdXyOoUF9eqZZh8SIUkYDPN8u8DD0aHA/viewform?usp=sf_link"
              }
              className="flex justify-center py-2 px-3 space-y-6 rounded-md border-2 border-[#0357a1] hover:bg-[#0357a1] hover:text-white"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
