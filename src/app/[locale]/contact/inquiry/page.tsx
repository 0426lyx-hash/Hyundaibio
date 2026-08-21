import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/inquiry-form";
import { isLocale, type Locale } from "@/i18n/config";

const inquiryCopy: Record<Locale, {
  eyebrow: string;
  title: string;
  description: string;
  company: string;
  country: string;
  phone: string;
  type: string;
  email: string;
  message: string;
  select: string;
  options: string[];
  submit: string;
  sending: string;
  success: string;
  error: string;
}> = {
  en: {
    eyebrow: "BUSINESS INQUIRY",
    title: "Tell us about your business.",
    description: "Share your product, wholesale, or distribution inquiry with the Hyundai Bio team.",
    company: "Company name or your name",
    country: "Country",
    phone: "Phone",
    type: "Business type",
    email: "E-mail",
    message: "Message",
    select: "Select a business type",
    options: ["Wholesale", "Product inquiry", "Distribution partnership", "Other"],
    submit: "Send inquiry",
    sending: "Sending…",
    success: "✅ Your inquiry has been sent. We will get back to you soon!",
    error: "Failed to send. Please try again or email us directly.",
  },
  zh: {
    eyebrow: "商务咨询",
    title: "请告诉我们您的业务需求。",
    description: "欢迎向 Hyundai Bio 团队提交产品、批发或经销合作咨询。",
    company: "公司名称或您的姓名",
    country: "国家",
    phone: "电话",
    type: "业务类型",
    email: "电子邮件",
    message: "咨询内容",
    select: "请选择业务类型",
    options: ["批发合作", "产品咨询", "经销合作", "其他"],
    submit: "发送咨询",
    sending: "发送中…",
    success: "✅ 咨询已发送，我们会尽快回复您！",
    error: "发送失败，请稍后重试，或直接邮件联系我们。",
  },
  ko: {
    eyebrow: "비즈니스 문의",
    title: "비즈니스 요구사항을 알려주세요.",
    description: "제품, 도매 또는 유통 파트너십 문의를 현대바이오 팀에 보내주세요.",
    company: "회사명 또는 성함",
    country: "국가",
    phone: "전화번호",
    type: "비즈니스 유형",
    email: "이메일",
    message: "문의 내용",
    select: "비즈니스 유형을 선택하세요",
    options: ["도매", "제품 문의", "유통 파트너십", "기타"],
    submit: "문의 보내기",
    sending: "전송 중…",
    success: "✅ 문의가 전송되었습니다. 곧 회신해 드리겠습니다!",
    error: "전송에 실패했습니다. 잠시 후 다시 시도하거나 이메일로 문의해 주세요.",
  },
  ru: {
    eyebrow: "БИЗНЕС-ЗАПРОС",
    title: "Расскажите о вашем бизнесе.",
    description: "Отправьте запрос команде Hyundai Bio по продукции, оптовой торговле или дистрибуции.",
    company: "Название компании или ваше имя",
    country: "Страна",
    phone: "Телефон",
    type: "Тип бизнеса",
    email: "Эл. почта",
    message: "Сообщение",
    select: "Выберите тип бизнеса",
    options: ["Оптовая торговля", "Запрос по продукту", "Партнёрство по дистрибуции", "Другое"],
    submit: "Отправить запрос",
    sending: "Отправка…",
    success: "✅ Ваш запрос отправлен. Мы свяжемся с вами в ближайшее время!",
    error: "Не удалось отправить. Попробуйте ещё раз или напишите нам по электронной почте.",
  },
};

export default async function InquiryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = inquiryCopy[locale];

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="page-container">
          <p className="section-kicker light">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>
      <section className="inquiry-section page-container">
        <InquiryForm copy={copy} />
      </section>
    </>
  );
}
