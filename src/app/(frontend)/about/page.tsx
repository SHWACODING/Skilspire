import Footer from "@/components/Footer";
import Header from "@/components/Header"
import Image from "next/image";
import Link from "next/link";
import partner_1 from "@/assets/partner_1.jpg";
import partner_2 from "@/assets/partner_2.jpg";

export default function About() {

  return (
    <div>
      <Header />

      <section className="text-center pt-12 pb-2 px-6 bg-curlyBackground bg-no-repeat bg-cover bg-bottom w-full h-full">
        <h1 className="font-extrabold text-3xl md:text-4xl text-white mb-6">SKILSPIRE من نحن و ما الهدف من </h1>
        <div>
          <p className="font-semibold text-gray-300 text-center text-2xl leading-loose">
            هو فريق شبابي يهدف إلى تمكين الشباب وتطوير مهاراتهم
            يقدم الفريق ورش عمل ودورات تدريبية يف مجالات متعددة مثل التسويق الرقمي البرمجة، والبحث العلمي، لمساعدة الشباب علي النجاح في حياتهم الشخصية والمهنية
            يتعاون الفريق مع خبراء متخصصين لضمان تقديم أفضل مستوى من الجودة وفتح فرص جديدة للشباب لتحقيق أحلامهم. الهدف الأساسي هو بناء جيل واع ومبدع قادر علي تطوير مجتمعه
          </p>
          <p className="font-semibold text-gray-300 text-center text-2xl leading-loose mb-7">Digital Horizontal Forum (DH) بدأ الفريق بمبادرة</p>
          <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSfKDAGVhi6VABs3E1sdXyOoUF9eqZZh8SIUkYDPN8u8DD0aHA/viewform?usp=sf_link'} className="py-2 px-3 space-y-6 rounded-md border-2 border-[#589dd1] hover:bg-[#589dd1] hover:text-white">Join Our Community</Link>
          <p className="font-semibold text-gray-200 text-right text-3xl leading-loose py-4 mt-4">
            : الي SKILSPIRE يهدف فريق  
            <span className="font-semibold text-gray-300 px-5 text-2xl leading-loose block">
              بناء مجتمع شبابي متميز ومبدع قادر على مواجهه التحديات وتحقيق. التميز في مختلف المجالات
              تطوير مهارات الشباب وتمكينهم من خلال برامج تدريبيه وورش عمل تفاعليه
              .تحفيز الشباب علي الابداع والابتكار وتقديم حلول مستدامه في المشاكل و المجتمع
            </span>
            <span className="font-semibold text-gray-300 px-5 text-2xl leading-loose block">
              .تقدم المبادرة مجموعه من الدورات وورش العمل لتزويد الشباب بالمعرفه والمهاراتاللازمه للتطور في العصر الرقمي
            </span>
            <span className="font-semibold text-gray-300 px-5 text-2xl leading-loose block">
              .تسعى المبادره الي توسيع مدارك الشباب وزياده وعيهم باهميه التطوع واثره الايجابي علي المجتمع
            </span>
            <span className="font-semibold text-gray-300 px-5 text-2xl leading-loose block">
              .تستهدف المبادره بشكل اكبر المناطق الريفيه في مصر
            </span>
            <span className="font-semibold text-gray-300 px-5 text-2xl leading-loose block">
              .تتضمن المبادرة تنظيم ورش عمل اوفلاين في مختلف المدارس والجامعات الشرح اهميه العمل التطوعي وكيفيه الاشتراك في الانشطة الطلابيه
            </span>
          </p>
          <p className="font-semibold text-gray-300 text-right text-3xl leading-loose py-4">
            : SKILSPIRE الكورسات التي يقدمها
            <span className="font-semibold text-gray-400 px-5 text-2xl leading-loose block">Human Resourses (HR)  الموارد البشرية  -</span>
            <span className="font-semibold text-gray-400 px-5 text-2xl leading-loose block">Graphic Design  التصميم  -</span>
            <span className="font-semibold text-gray-400 px-5 text-2xl leading-loose block">Digital Marketing  التسويق  -</span>
            <span className="font-semibold text-gray-400 px-5 text-2xl leading-loose block">Freelancing  العمل الحر  -</span>
            <span className="font-semibold text-gray-400 px-5 text-2xl leading-loose block">Leaderships  رياة الاعمال  -</span>
            <span className="font-semibold text-gray-400 px-5 text-2xl leading-loose block">Sybersecurity  الامن السيبراني  -</span>
            <span className="font-semibold text-gray-400 px-5 text-2xl leading-loose block mb-4">Programming  البرمجة -</span>
            <Link href={'/courses'} className="text-white bg-[#589dd1] hover:bg-[#589dd1df] rounded-md px-3 py-2 mr-14">
              <button>Our Courses</button>
            </Link>
          </p>
          <h3 className="text-3xl font-bold py-2 px-3 rounded-md">SKIL<span className="text-2xl">SPIRE</span> PARTNERS</h3>
          <div className="m-auto mt-6 mb-6 w-fit">
            <div>
            <p className="font-bold text-xl pb-6">علي دعمه الكبير للفريق ومساعدتة تكوين مقر أوفلاين CODESPARK بجزيل الشكر الي فريق SKILSPIRE يتقدم فريق</p>
            <Image src={partner_1} alt="Partner" width={200} height={200}  className="m-auto ring-2 ring-[#589dd1]" />
            </div>
            <div className="pt-10">
              <p className="font-bold text-xl pb-6">
              .ضمن برنامجهم المميز.الفريق الرائد في مجال حماية البيئة والاستدامة،في جميع أنحاء العالم GreenAura بكل فخر بنعلن عن شراكتنا مع فريق
              </p>
              <Image src={partner_2} alt="Partner" width={200} height={200}  className="m-auto ring-2 ring-[#589dd1]" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}