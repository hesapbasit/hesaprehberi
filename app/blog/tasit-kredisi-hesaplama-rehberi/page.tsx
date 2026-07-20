import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, BadgeCheck, Banknote, BarChart3,
Calculator, CalendarClock, Car, Check, CheckCircle2, ChevronRight,
CircleDollarSign, Clock3, FileCheck2, Gauge, HandCoins, Info, Landmark,
ListChecks, Percent, ReceiptText, Scale, ShieldCheck, Sparkles,
TrendingDown, TrendingUp, WalletCards, } from "lucide-react";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetada";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
const PAGE_URL =
"https://www.hesaprehberi.com/blog/tasit-kredisi-hesaplama-rehberi";
const PAGE_TITLE =
"Taşıt Kredisi Hesaplama Rehberi 2026: Faiz, Taksit ve Toplam Maliyet";
const PAGE_DESCRIPTION =
"Taşıt kredisi hesaplama yöntemini; faiz, aylık taksit, vade, peşinat, kredi tahsis ücreti, kasko ve toplam geri ödeme üzerinden ayrıntılı biçimde öğrenin.";
export const metadata: Metadata = createCalculatorMetadata({
title: PAGE_TITLE, description: PAGE_DESCRIPTION,
path: "/blog/tasit-kredisi-hesaplama-rehberi", keywords: [
"taşıt kredisi hesaplama", "araç kredisi hesaplama",
"taşıt kredisi faiz hesaplama", "taşıt kredisi aylık taksit",
"taşıt kredisi toplam geri ödeme", "ikinci el araç kredisi",
"sıfır araç kredisi", "araç kredisi vade", "taşıt kredisi peşinat",
"taşıt kredisi masrafları", "taşıt kredisi dosya masrafı",
"taşıt kredisi erken kapama", ], openGraph: { type: "article",
locale: "tr_TR", url: PAGE_URL, title: PAGE_TITLE,
description: PAGE_DESCRIPTION, siteName: "HesapRehberi", images: [ {
url: "/og/tasit-kredisi-hesaplama-rehberi.jpg", width: 1200, height: 630,
alt: "Taşıt kredisi hesaplama rehberi", }, ], }, twitter: {
card: "summary_large_image", title: PAGE_TITLE,
description: PAGE_DESCRIPTION,
images: ["/og/tasit-kredisi-hesaplama-rehberi.jpg"], }, alternates: {
canonical: PAGE_URL, }, });
type TableOfContentsItem = { id: string; title: string;
description: string; };
type ScenarioRow = { label: string; loanAmount: string;
monthlyRate: string; term: string; installment: string;
totalPayment: string; totalInterest: string; };
type CostItem = { title: string; description: string; impact: string;
icon: typeof Banknote; };
type FaqItem = { question: string; answer: string; };
const tableOfContents: TableOfContentsItem[] = [ {
id: "tasit-kredisi-nedir", title: "Taşıt kredisi nedir?", description:
"Kredinin çalışma mantığını, teminat yapısını ve hangi araçlarda kullanılabildiğini öğrenin.",
}, { id: "hesaplama-formulu", title: "Taşıt kredisi nasıl hesaplanır?",
description:
"Aylık faiz, vade ve kredi tutarından taksit ile toplam geri ödeme hesabını görün.",
}, { id: "aylik-faiz-yillik-maliyet",
title: "Aylık faiz ve yıllık maliyet", description:
"İlan edilen faiz oranı ile gerçek toplam maliyet arasındaki farkı anlayın.",
}, { id: "pesinat-ve-kredi-orani", title: "Peşinat ve kredi oranı",
description:
"Araç bedelinin ne kadarının krediyle, ne kadarının öz kaynakla karşılanacağını planlayın.",
}, { id: "vade-secimi", title: "Doğru vade nasıl seçilir?", description:
"Kısa ve uzun vadenin aylık taksit, toplam faiz ve bütçe üzerindeki etkisini karşılaştırın.",
}, { id: "sifir-ikinci-el", title: "Sıfır ve ikinci el araç kredisi",
description:
"Araç yaşı, ekspertiz değeri ve kredi şartları bakımından temel farkları inceleyin.",
}, { id: "ek-masraflar", title: "Ek masraflar nelerdir?", description:
"Tahsis ücreti, rehin, sigorta, kasko ve diğer yan maliyetleri hesaba katın.",
}, { id: "ornek-hesaplamalar", title: "Örnek taşıt kredisi hesaplamaları",
description:
"Farklı kredi tutarı, faiz oranı ve vadelerle hazırlanmış gerçekçi senaryoları karşılaştırın.",
}, { id: "butce-plani", title: "Bütçe planı nasıl yapılır?", description:
"Aylık ödeme sınırınızı, gelir-gider dengenizi ve güvenli taksit seviyesini belirleyin.",
}, { id: "erken-kapama", title: "Erken kapama ve ara ödeme", description:
"Krediyi vadesinden önce kapatmanın olası avantajlarını ve dikkat noktalarını öğrenin.",
}, { id: "banka-karsilastirma",
title: "Banka teklifleri nasıl karşılaştırılır?", description:
"Sadece faiz oranına değil toplam maliyete bakarak daha sağlıklı karar verin.",
}, { id: "basvuru-belgeleri", title: "Başvuru belgeleri", description:
"Gelir belgesi, kimlik, ruhsat veya proforma fatura gibi temel belgeleri hazırlayın.",
}, { id: "sik-yapilan-hatalar", title: "Sık yapılan hatalar", description:
"Bütçeyi zorlayan, maliyeti artıran ve karar kalitesini düşüren hatalardan kaçının.",
}, { id: "sss", title: "Sık sorulan sorular", description:
"Taşıt kredisiyle ilgili en çok merak edilen soruların ayrıntılı cevaplarını okuyun.",
}, ];
const scenarioRows: ScenarioRow[] = [ { label: "Düşük tutar / kısa vade",
loanAmount: "300.000 TL", monthlyRate: "%3,49", term: "12 ay",
installment: "31.116 TL", totalPayment: "373.392 TL",
totalInterest: "73.392 TL", }, { label: "Orta tutar / 24 ay",
loanAmount: "500.000 TL", monthlyRate: "%3,69", term: "24 ay",
installment: "32.724 TL", totalPayment: "785.376 TL",
totalInterest: "285.376 TL", }, { label: "Orta tutar / 36 ay",
loanAmount: "500.000 TL", monthlyRate: "%3,69", term: "36 ay",
installment: "26.366 TL", totalPayment: "949.176 TL",
totalInterest: "449.176 TL", }, { label: "Yüksek tutar / 24 ay",
loanAmount: "750.000 TL", monthlyRate: "%3,79", term: "24 ay",
installment: "49.696 TL", totalPayment: "1.192.704 TL",
totalInterest: "442.704 TL", }, { label: "Yüksek tutar / 36 ay",
loanAmount: "750.000 TL", monthlyRate: "%3,79", term: "36 ay",
installment: "40.237 TL", totalPayment: "1.448.532 TL",
totalInterest: "698.532 TL", }, { label: "Uzun vade örneği",
loanAmount: "1.000.000 TL", monthlyRate: "%3,89", term: "48 ay",
installment: "49.779 TL", totalPayment: "2.389.392 TL",
totalInterest: "1.389.392 TL", }, ];
const costItems: CostItem[] = [ { title: "Kredi tahsis ücreti",
description:
"Bankanın kredi kullandırım sürecinde tahsil edebildiği ücret kalemidir. Yasal sınırlar ve bankanın güncel tarifesi çerçevesinde belirlenir.",
impact:
"Kredi tutarına göre değişir ve nakit çıkışı yarattığı için toplam başlangıç maliyetine eklenmelidir.",
icon: ReceiptText, }, { title: "Rehin ve tescil işlemleri", description:
"Taşıt kredilerinde araç üzerine banka lehine rehin tesis edilebilir. Noter, tescil veya ilgili operasyon giderleri oluşabilir.",
impact:
"Araç satış veya devir işlemlerini kredi kapanana kadar sınırlayabilir; işlem maliyetleri bankaya göre farklılaşabilir.",
icon: FileCheck2, }, { title: "Kasko sigortası", description:
"Banka, kredi süresince aracı güvence altına almak amacıyla kasko poliçesi talep edebilir. Poliçe kapsamı ve prim tutarı araca göre değişir.",
impact:
"Özellikle yüksek değerli araçlarda yıllık bütçeyi belirgin biçimde etkileyebilir.",
icon: ShieldCheck, }, { title: "Hayat sigortası", description:
"Bazı kredi paketlerinde borçlunun vefat veya belirli risklerine karşı hayat sigortası sunulabilir.",
impact:
"Prim; yaş, kredi tutarı, vade ve sağlık beyanı gibi unsurlara bağlı olarak değişebilir.",
icon: BadgeCheck, }, { title: "Ekspertiz ve değerleme", description:
"İkinci el araçlarda bankanın kabul edeceği kredi tutarı, aracın ekspertiz veya kasko değeri üzerinden sınırlandırılabilir.",
impact:
"Satış fiyatı ile değerleme sonucu arasındaki farkın daha yüksek peşinatla karşılanmasına yol açabilir.",
icon: Gauge, }, { title: "Zorunlu trafik sigortası", description:
"Kredi dışında da araç sahipliğinin zorunlu maliyetleri arasında yer alır. Prim; araç, şehir, hasar basamağı ve sürücü profiline göre değişir.",
impact:
"Kredi taksitine dahil değildir ancak araç edinme bütçesinde mutlaka yer almalıdır.",
icon: Car, }, ];
const faqItems: FaqItem[] = [ {
question: "Taşıt kredisi aylık taksiti nasıl hesaplanır?", answer:
"Aylık taksit; kredi tutarı, aylık faiz oranı ve vade kullanılarak eşit taksitli kredi formülüyle hesaplanır. Faiz oranı yükseldikçe veya vade uzadıkça toplam geri ödeme artar. Vade uzadığında aylık taksit genellikle düşse de daha fazla dönem boyunca faiz ödendiği için toplam maliyet yükselir.",
}, { question: "Taşıt kredisi için ne kadar peşinat gerekir?", answer:
"Gerekli peşinat; aracın değeri, sıfır veya ikinci el olması, bankanın kredi politikası ve yürürlükteki kredi-değer sınırlarına göre değişir. Bankanın finanse etmediği bölüm alıcı tarafından peşin karşılanır. Araç değeri yükseldikçe kredi oranı kademeli biçimde düşebileceği için peşinat ihtiyacı artabilir.",
}, { question: "İkinci el araçlara taşıt kredisi çıkar mı?", answer:
"Evet, bankalar belirledikleri yaş sınırları içinde kalan ikinci el araçlara kredi verebilir. Kredi tutarı çoğu zaman aracın satış bedelinden ziyade kasko veya ekspertiz değerine göre belirlenir. Araç yaşı arttıkça vade kısalabilir ya da kredi başvurusu kabul edilmeyebilir.",
}, { question: "Taşıt kredisi faiz oranı sabit midir?", answer:
"Bireysel taşıt kredilerinde faiz oranı genellikle sözleşme anında sabitlenir ve ödeme planı buna göre oluşturulur. Ancak kampanya, müşteri profili, kredi notu, gelir durumu, araç türü ve bankacılık ilişkisi teklif edilen oranı etkileyebilir.",
}, {
question: "Taşıt kredisi toplam maliyeti neden faizden daha yüksektir?",
answer:
"Toplam maliyet yalnızca anapara ve faizden oluşmaz. Kredi tahsis ücreti, sigorta primleri, rehin işlemleri ve diğer yasal veya operasyonel giderler toplam maliyete eklenebilir. Bu nedenle teklifler karşılaştırılırken yalnızca aylık faiz oranına değil toplam geri ödeme ve yıllık maliyet oranına bakılmalıdır.",
}, { question: "Taşıt kredisi erken kapatılabilir mi?", answer:
"Evet, tüketici kredileri genel olarak vadesinden önce kısmen veya tamamen kapatılabilir. Erken kapama sırasında kalan anapara, işlemiş faiz ve mevzuata uygun diğer tutarlar hesaplanır. Kapanış öncesinde bankadan yazılı erken kapama tutarı alınması doğru olur.",
}, { question: "Ara ödeme yapmak toplam faizi düşürür mü?", answer:
"Ara ödeme kalan anaparayı azalttığı için sonraki dönemlerde hesaplanacak faiz tutarını düşürebilir. Banka, ara ödeme sonrasında taksit tutarını azaltan veya vadeyi kısaltan yeni bir ödeme planı oluşturabilir. Hangi seçeneğin daha avantajlı olduğu nakit akışına göre değerlendirilmelidir.",
}, { question: "Taşıt kredisi için kredi notu kaç olmalı?", answer:
"Bankaların herkese açık tek bir asgari kredi notu sınırı yoktur. Kredi notunun yanı sıra düzenli gelir, mevcut borçlar, ödeme geçmişi, hesap hareketleri, istihdam durumu ve talep edilen kredi tutarı birlikte değerlendirilir. Daha güçlü finansal profil daha uygun oran alma ihtimalini artırabilir.",
}, { question: "Gelir belgesi olmadan taşıt kredisi alınabilir mi?",
answer:
"Bazı bankalar mevcut müşterilerinin hesap hareketlerini veya dijital gelir verilerini kullanarak ek belge istemeden değerlendirme yapabilir. Bununla birlikte kredi veren kuruluş, ödeme gücünü doğrulamak için maaş bordrosu, vergi levhası, gelir yazısı veya benzeri belgeler talep edebilir.",
}, { question: "Taşıt kredisi başvurusu ne kadar sürede sonuçlanır?",
answer:
"Ön değerlendirme dijital kanallarda kısa sürede tamamlanabilir. Nihai onay; gelir doğrulaması, araç bilgileri, proforma fatura, ekspertiz, rehin ve sigorta süreçlerine bağlı olarak uzayabilir. Belgelerin eksiksiz hazırlanması süreci hızlandırır.",
}, { question: "Kasko yaptırmak zorunlu mu?", answer:
"Kasko kanunen her araç için zorunlu değildir; ancak banka, krediyle finanse edilen aracı teminat altına almak amacıyla kasko poliçesi talep edebilir. Poliçenin bankadan alınması zorunlu tutulamaz; eşdeğer teminatları sağlayan farklı bir sigorta şirketi teklifi değerlendirilebilir.",
}, { question: "Taşıt kredisi mi ihtiyaç kredisi mi daha avantajlıdır?",
answer:
"Taşıt kredisi çoğu zaman araç rehni nedeniyle daha düşük faizli olabilir; buna karşılık kredi-değer oranı, araç yaşı ve rehin şartları bulunur. İhtiyaç kredisi daha esnek kullanım sağlayabilir fakat faiz ve vade koşulları farklı olabilir. Karar toplam maliyet, peşinat ve kullanım esnekliği birlikte değerlendirilerek verilmelidir.",
}, { question: "Taşıt kredisiyle alınan araç hemen satılabilir mi?",
answer:
"Araç üzerinde banka rehni varsa satıştan önce kredinin kapatılması ve rehnin kaldırılması gerekir. Bazı işlemlerde alıcı, satıcı ve banka koordinasyonuyla borç kapama ve devir aynı süreçte planlanabilir. İşlem öncesinde bankanın güncel prosedürü öğrenilmelidir.",
}, { question: "Taşıt kredisi başvurusu reddedilirse ne yapılmalı?",
answer:
"Ret nedeni kredi notu, yetersiz gelir, yüksek borçluluk, kısa çalışma süresi, araç yaşı veya değerleme sonucu olabilir. Daha düşük kredi tutarı, daha yüksek peşinat, ortak gelir gösterimi veya mevcut borçların azaltılması yeni değerlendirmede fayda sağlayabilir.",
}, { question: "Uzun vade her zaman daha mı avantajlıdır?", answer:
"Hayır. Uzun vade aylık taksiti azaltabilir ancak toplam faiz maliyetini yükseltir. Ayrıca uzun süreli borçluluk, aracın değer kaybı devam ederken kredi bakiyesinin yüksek kalmasına yol açabilir. En uygun vade, bütçeyi zorlamayan en kısa sürdürülebilir dönemdir.",
}, { question: "Taşıt kredisi hesaplamasında sigorta dahil midir?", answer:
"Standart kredi taksit hesaplamaları çoğu zaman yalnızca anapara ve faizi gösterir. Tahsis ücreti, hayat sigortası, kasko, rehin ve tescil giderleri ayrı kalabilir. Gerçek maliyet analizi yapılırken tüm ek ödemeler kredi toplamına eklenmelidir.",
}, { question: "Aylık faiz oranı yıllık faize nasıl çevrilir?", answer:
"Aylık oranı yalnızca 12 ile çarpmak nominal bir yaklaşım verir. Bileşik yıllık oran için aylık oranın her ay yeniden işlediği kabul edilir. Bu nedenle gerçek yıllık bileşik maliyet, aylık oranın 12 ile çarpımından daha yüksek çıkar.",
}, { question: "Taşıt kredisi kullanırken bütçe sınırı nasıl belirlenir?",
answer:
"Aylık taksit; düzenli gelirin, zorunlu giderlerin, mevcut borçların, sigorta, yakıt, bakım ve vergi gibi araç masraflarının ardından kalan tutarı aşmamalıdır. Acil durum fonu korunmalı ve gelirde geçici düşüş senaryosu da hesaba katılmalıdır.",
}, ];
const comparisonRows = [ { feature: "Teminat",
vehicleLoan: "Araç üzerinde rehin bulunabilir",
personalLoan: "Genellikle araç rehni bulunmaz", }, { feature: "Faiz oranı",
vehicleLoan: "Teminat nedeniyle görece daha uygun olabilir",
personalLoan: "Müşteri profiline göre daha yüksek olabilir", }, {
feature: "Kullanım amacı", vehicleLoan: "Araç alımıyla sınırlıdır",
personalLoan: "Serbest kullanım sağlar", }, { feature: "Peşinat",
vehicleLoan: "Kredi-değer sınırına göre gerekebilir",
personalLoan: "Kredi tutarı yeterliyse ayrıca şart olmayabilir", }, {
feature: "Araç yaşı", vehicleLoan: "Banka yaş sınırı uygulayabilir",
personalLoan: "Araç yaşı kredi türünü doğrudan etkilemez", }, {
feature: "Satış işlemi", vehicleLoan: "Rehin kaldırılması gerekebilir",
personalLoan: "Araç üzerinde kredi kaynaklı rehin olmayabilir", }, ];
const decisionChecklist = [
"Araç bedelini ve peşinat için ayırabileceğiniz net tutarı belirleyin.",
"Kredi taksitine ek olarak kasko, trafik sigortası, MTV, bakım ve yakıt giderlerini hesaplayın.",
"En az üç bankadan aynı kredi tutarı ve aynı vade için yazılı teklif alın.",
"Tekliflerde aylık faiz yerine toplam geri ödeme ve yıllık maliyet oranını karşılaştırın.",
"Kredi tahsis ücreti, sigorta ve rehin giderlerinin teklife dahil olup olmadığını sorun.",
"Aylık taksitin düzenli gelirinizi zorlamadığından emin olun.",
"Gelir düşüşü veya beklenmeyen gider durumunda en az üç aylık ödeme tamponu bırakın.",
"Uzun vadede aracın değer kaybını ve kredi bakiyesinin seyrini birlikte değerlendirin.",
"Ara ödeme veya erken kapama planınız varsa bankanın uygulamasını önceden öğrenin.",
"Sözleşme ve ödeme planını imzalamadan önce tüm kalemleri satır satır kontrol edin.",
];
const mistakes = [ { title: "Sadece aylık taksite odaklanmak", description:
"Düşük görünen aylık taksit, uzun vade nedeniyle çok daha yüksek toplam faiz anlamına gelebilir.",
solution:
"Her teklif için toplam geri ödeme, toplam faiz ve ek masrafları tek tabloda karşılaştırın.",
}, { title: "Araç giderlerini kredi bütçesinden ayrı düşünmek",
description:
"Kasko, trafik sigortası, vergi, yakıt ve bakım giderleri aylık bütçeyi ciddi biçimde etkiler.",
solution:
"Kredi taksitini değil, aracın toplam aylık sahip olma maliyetini hesaplayın.",
}, { title: "Peşinatın tamamını kullanmak", description:
"Tüm nakdi peşinata bağlamak, beklenmeyen masraflarda borçlanma ihtiyacını artırabilir.",
solution:
"Peşinat sonrası en az birkaç aylık zorunlu gideri karşılayacak acil durum fonu bırakın.",
}, { title: "Tek bankanın teklifini kabul etmek", description:
"Faiz, sigorta ve ücret kalemleri bankalar arasında önemli farklılık gösterebilir.",
solution:
"Aynı gün içinde aynı tutar ve vadeyle birden fazla teklif alın.", }, {
title: "Kampanya şartlarını okumamak", description:
"Düşük faiz kampanyaları belirli marka, model, müşteri segmenti veya sigorta şartına bağlı olabilir.",
solution:
"Kampanyanın geçerlilik süresi, zorunlu ürünleri ve toplam maliyeti yazılı olarak doğrulayın.",
}, { title: "İkinci el araç değerini satış fiyatı sanmak", description:
"Banka kredi tutarını ilan fiyatı yerine ekspertiz veya kasko değeri üzerinden belirleyebilir.",
solution:
"Kredi başvurusundan önce tahmini değerleme sonucunu ve oluşabilecek peşinat farkını hesaplayın.",
}, ];
const schemaData = { "@context": "https://schema.org", "@graph": [ {
"@type": "Article", headline: PAGE_TITLE, description: PAGE_DESCRIPTION,
inLanguage: "tr-TR", mainEntityOfPage: PAGE_URL, author: {
"@type": "Organization", name: "HesapRehberi", }, publisher: {
"@type": "Organization", name: "HesapRehberi", logo: {
"@type": "ImageObject", url: "https://www.hesaprehberi.com/logo.jpg", }, },
datePublished: "2026-07-18", dateModified: "2026-07-18", image:
"https://www.hesaprehberi.com/og/tasit-kredisi-hesaplama-rehberi.jpg", }, {
"@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem",
position: 1, name: "Ana Sayfa", item: "https://www.hesaprehberi.com", }, {
"@type": "ListItem", position: 2, name: "Blog",
item: "https://www.hesaprehberi.com/blog", }, { "@type": "ListItem",
position: 3, name: "Taşıt Kredisi Hesaplama Rehberi", item: PAGE_URL, }, ],
}, { "@type": "FAQPage", mainEntity: faqItems.map((item) => ({
"@type": "Question", name: item.question, acceptedAnswer: {
"@type": "Answer", text: item.answer, }, })), }, ], };
function HighlightCard({ icon: Icon, title, value, description, }: {
icon: typeof Banknote; title: string; value: string; description: string;
}) { return (
<div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5">
<div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 transition duration-300 group-hover:scale-125" />
<div className="relative">
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
<Icon className="h-6 w-6" aria-hidden="true" /> </div>
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
{title} </p>
<p className="mt-2 text-2xl font-black tracking-tight text-slate-950">
{value} </p>
<p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
</div> </div> ); }
function InfoBox({ title, children, tone = "blue", }: { title: string;
children: React.ReactNode; tone?: "blue" | "amber" | "emerald" | "slate";
}) {
const toneClasses = { blue: "border-blue-200 bg-blue-50/80 text-blue-950",
amber: "border-amber-200 bg-amber-50/80 text-amber-950",
emerald: "border-emerald-200 bg-emerald-50/80 text-emerald-950",
slate: "border-slate-200 bg-slate-50 text-slate-950", };
const iconClasses = { blue: "bg-blue-600 text-white",
amber: "bg-amber-500 text-white", emerald: "bg-emerald-600 text-white",
slate: "bg-slate-900 text-white", }; return ( <aside
className={`my-8 rounded-3xl border p-6 shadow-sm ${toneClasses[tone]}`} >
<div className="flex items-start gap-4"> <div
className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${iconClasses[tone]}`}
> <Info className="h-5 w-5" aria-hidden="true" /> </div> <div>
<h3 className="text-lg font-black tracking-tight">{title}</h3>
<div className="mt-2 text-sm leading-7 opacity-90">{children}</div> </div>
</div> </aside> ); }
function FormulaCard() { return (
<div className="my-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-2xl shadow-slate-950/15">
<div className="border-b border-white/10 bg-white/5 px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500">
<Calculator className="h-6 w-6" aria-hidden="true" /> </div> <div>
<p className="text-sm font-semibold text-blue-200">
Eşit taksitli kredi formülü </p>
<h3 className="text-xl font-black">Aylık taksit hesabı</h3> </div> </div>
</div> <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
<div>
<div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/20 p-5">
<p className="min-w-[560px] text-center font-mono text-lg font-bold leading-10 text-blue-100 md:text-xl">
Taksit = Anapara × [r × (1 + r)<sup>n</sup>] ÷ [(1 + r) <sup>n</sup> − 1]
</p> </div> <p className="mt-5 text-sm leading-7 text-slate-300">
Formülde faiz oranı yüzde olarak değil ondalık biçimde kullanılır.
Örneğin aylık yüzde 3,49 oranı hesaplamada 0,0349 olarak yazılır.
Vade ise toplam ay sayısıdır. </p> </div> <dl className="space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<dt className="font-bold text-blue-200">Anapara</dt>
<dd className="mt-1 text-sm leading-6 text-slate-300">
Bankadan kullanılan net kredi tutarıdır. </dd> </div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<dt className="font-bold text-blue-200">r</dt>
<dd className="mt-1 text-sm leading-6 text-slate-300">
Aylık faiz oranının ondalık karşılığıdır. </dd> </div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<dt className="font-bold text-blue-200">n</dt>
<dd className="mt-1 text-sm leading-6 text-slate-300">
Kredinin toplam vade sayısıdır. </dd> </div> </dl> </div> </div> ); }
function SectionLead({ children }: { children: React.ReactNode }) {
return (
<p className="text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
{children} </p> ); }
function MiniStat({ label, value, note, }: { label: string; value: string;
note: string; }) { return (
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
{label} </p>
<p className="mt-2 text-2xl font-black tracking-tight text-slate-950">
{value} </p>
<p className="mt-2 text-sm leading-6 text-slate-600">{note}</p> </div> ); }
export default function TasitKredisiHesaplamaRehberiPage() { return ( <>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
/>

<CalculatorLayout
  title={PAGE_TITLE}
  category="Taşıt Kredisi"
  description={PAGE_DESCRIPTION}
  canonicalPath="/blog/tasit-kredisi-hesaplama-rehberi"
  showShareButtons={false}
>
  <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
<Breadcrumb items={[ { label: "Ana Sayfa", href: "/" },
{ label: "Blog", href: "/blog" }, {
label: "Taşıt Kredisi Hesaplama Rehberi",
href: "/blog/tasit-kredisi-hesaplama-rehberi", }, ]} /> </div>
<header className="relative overflow-hidden border-y border-slate-200 bg-slate-950">
<div className="absolute inset-0">
<div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
<div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
</div>
<div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
<Sparkles className="h-4 w-4" aria-hidden="true" />
2026 kapsamlı taşıt kredisi rehberi </div>
<h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
Taşıt kredisi hesaplama:
<span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
faiz, taksit ve gerçek maliyet </span> </h1>
<p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
Araç kredisi kullanmadan önce aylık taksiti değil, toplam geri
ödemeyi ve araca sahip olmanın bütün maliyetlerini görmeniz
gerekir. Bu rehber; kredi formülünden peşinat planına, banka
tekliflerinin karşılaştırılmasından erken kapamaya kadar
ihtiyaç duyacağınız temel noktaları tek yerde toplar. </p>
<div className="mt-8 flex flex-wrap items-center gap-4"> <Link
href="/hesaplamalar/tasit-kredisi-hesaplama"
className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400/30"
> Taşıt kredisi hesapla
<ArrowRight className="h-4 w-4" aria-hidden="true" /> </Link> <a
href="#ornek-hesaplamalar"
className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10"
> Örnek tabloları incele
<ChevronRight className="h-4 w-4" aria-hidden="true" /> </a> </div>
<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
<span className="inline-flex items-center gap-2"> <CheckCircle2
className="h-4 w-4 text-emerald-400" aria-hidden="true" /> Formüllü anlatım
</span> <span className="inline-flex items-center gap-2"> <CheckCircle2
className="h-4 w-4 text-emerald-400" aria-hidden="true" />
Gerçekçi karşılaştırmalar </span>
<span className="inline-flex items-center gap-2"> <CheckCircle2
className="h-4 w-4 text-emerald-400" aria-hidden="true" /> 18 ayrıntılı SSS
</span> </div> </div> <div className="self-center">
<div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
<div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6">
<div className="flex items-center justify-between"> <div>
<p className="text-sm font-semibold text-slate-400"> Örnek kredi özeti </p>
<p className="mt-1 text-2xl font-black text-white"> 500.000 TL </p> </div>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
<Car className="h-6 w-6" aria-hidden="true" /> </div> </div>
<div className="mt-6 grid grid-cols-2 gap-3"> <MiniStat label="Aylık faiz"
value="%3,69" note="Örnek oran" />
<MiniStat label="Vade" value="24 ay" note="Örnek süre" /> <MiniStat
label="Aylık taksit" value="32.724 TL" note="Yaklaşık" /> <MiniStat
label="Toplam ödeme" value="785.376 TL" note="Masraflar hariç" /> </div>
<div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
<div className="flex gap-3"> <AlertTriangle
className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
<p className="text-sm leading-6 text-amber-100">
Örnek değerler bilgilendirme amaçlıdır. Güncel banka
teklifi; müşteri profili, araç ve kampanya koşullarına göre değişir. </p>
</div> </div> </div> </div> </div> </div> </header>
<main className="bg-white">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"> <HighlightCard
icon={Calculator} title="Temel hesap" value="Taksit + faiz"
description="Kredi tutarı, aylık faiz ve vadeye göre ödeme planını değerlendirin."
/> <HighlightCard icon={WalletCards} title="Gerçek maliyet"
value="Tüm masraflar"
description="Sigorta, tahsis, rehin ve diğer ek giderleri toplam bütçeye ekleyin."
/> <HighlightCard icon={Scale} title="Karşılaştırma"
value="Aynı tutar ve vade"
description="Banka tekliflerini aynı koşullarda karşılaştırarak yanıltıcı sonuçları önleyin."
/> <HighlightCard icon={ShieldCheck} title="Güvenli bütçe"
value="Sürdürülebilir taksit"
description="Aylık ödemenin gelir-gider dengenizi bozmadığından emin olun."
/> </div>
<div className="mt-12 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
<aside className="lg:sticky lg:top-24 lg:self-start"> <nav
aria-label="İçindekiler"
className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-950/5"
>
<div className="border-b border-slate-200 bg-slate-950 px-5 py-5 text-white">
<div className="flex items-center gap-3">
<ListChecks className="h-5 w-5 text-blue-300" /> <div>
<p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
Rehber navigasyonu </p>
<h2 className="mt-1 text-lg font-black">İçindekiler</h2> </div> </div>
</div> <ol className="max-h-[70vh] space-y-1 overflow-y-auto p-3">
{tableOfContents.map((item, index) => ( <li key={item.id}> <a
href={`#${item.id}`}
className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-blue-50"
>
<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 transition group-hover:bg-blue-600 group-hover:text-white">
{index + 1} </span> <span>
<span className="block text-sm font-bold leading-5 text-slate-800 group-hover:text-blue-700">
{item.title} </span>
<span className="mt-1 hidden text-xs leading-5 text-slate-500 xl:block">
{item.description} </span> </span> </a> </li> ))} </ol> </nav>
<div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
<p className="text-sm font-black text-slate-950"> Bu rehberi paylaşın </p>
<p className="mt-2 text-xs leading-5 text-slate-600">
Araç kredisi planlayan yakınlarınızın toplam maliyeti daha
doğru değerlendirmesine yardımcı olun. </p> <div className="mt-4">
<ShareButtons
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
/> </div> </div> </aside>
<article className="min-w-0">
<CalculatorContentSection id="tasit-kredisi-nedir"
title="Taşıt kredisi nedir?" > <SectionLead>
Taşıt kredisi; sıfır veya ikinci el otomobil, hafif ticari
araç ya da bankanın kabul ettiği diğer araçların satın
alınmasını finanse etmek için kullanılan bireysel kredi
türüdür. Kredi doğrudan araç alımına bağlıdır ve çoğu
durumda satın alınan araç banka lehine rehin edilir. </SectionLead> <p>
Taşıt kredisi, ihtiyaç kredisinden farklı olarak belirli bir
varlığın finansmanına yöneliktir. Banka, aracın faturası,
proforma belgesi, ruhsat bilgisi, yaşı, kasko değeri,
ekspertiz sonucu ve satış bedeli gibi unsurları inceler.
Kredi tutarı yalnızca müşterinin gelirine göre değil,
finanse edilen aracın kabul edilen değerine göre de sınırlanabilir. </p>
<p> Bu yapı bankaya ek güvence sağladığı için taşıt kredisi
faizleri bazı dönemlerde ihtiyaç kredisine göre daha
avantajlı olabilir. Buna karşılık araç üzerinde rehin
bulunması, satış ve devir işlemlerinin kredi kapanana kadar
bankanın prosedürlerine bağlı olmasına neden olur. </p>
<InfoBox title="Taşıt kredisi yalnızca taksitten ibaret değildir"> <p>
Araç satın alırken kredi taksitine ek olarak peşinat,
noter, tescil, zorunlu trafik sigortası, kasko, motorlu
taşıtlar vergisi, bakım, lastik, otopark ve yakıt gibi
giderleri de planlamalısınız. Sağlıklı karar, kredinin
değil aracın toplam sahip olma maliyetinin hesaplanmasıyla verilir. </p>
</InfoBox> <div className="grid gap-5 md:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<Car className="h-8 w-8 text-blue-600" aria-hidden="true" />
<h3 className="mt-4 text-lg font-black text-slate-950">
Araca bağlı finansman </h3>
<p className="mt-2 text-sm leading-7 text-slate-600">
Kredi, belirli bir aracın satın alınması amacıyla
kullandırılır ve araç bilgileri başvurunun parçasıdır. </p> </div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<Landmark className="h-8 w-8 text-blue-600" aria-hidden="true" />
<h3 className="mt-4 text-lg font-black text-slate-950">
Banka değerlendirmesi </h3>
<p className="mt-2 text-sm leading-7 text-slate-600">
Gelir, kredi notu, mevcut borçlar ve aracın niteliği
birlikte değerlendirilir. </p> </div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<FileCheck2 className="h-8 w-8 text-blue-600" aria-hidden="true" />
<h3 className="mt-4 text-lg font-black text-slate-950">
Rehin ve belge süreci </h3>
<p className="mt-2 text-sm leading-7 text-slate-600">
Kredi kapanana kadar araç üzerinde banka rehni
bulunabilir ve satış için rehin kaldırma gerekir. </p> </div> </div>
</CalculatorContentSection>
<CalculatorContentSection id="hesaplama-formulu"
title="Taşıt kredisi nasıl hesaplanır?" > <SectionLead>
Taşıt kredisi hesabının temelinde üç değişken vardır:
kullanılan kredi tutarı, aylık faiz oranı ve vade. Banka
eşit taksitli ödeme planı oluşturduğunda her taksit içinde
hem anapara hem faiz bulunur. </SectionLead> <p>
İlk taksitlerde kalan anapara yüksek olduğu için faiz payı
daha büyüktür. Ödemeler ilerledikçe anapara azalır ve
taksit içindeki faiz payı düşerken anapara payı artar.
Taksit tutarı sabit kalsa bile taksidin iç dağılımı her ay değişir. </p>
<FormulaCard />
<h3 className="mt-10 text-2xl font-black tracking-tight text-slate-950">
Hesaplama adımları </h3> <ol className="mt-6 space-y-4"> {[ {
title: "Kredi tutarını belirleyin",
text: "Araç bedelinden peşinatı çıkarın. Bankanın kredi-değer sınırı nedeniyle kullanabileceğiniz tutarın daha düşük olabileceğini unutmayın.",
}, { title: "Aylık faiz oranını ondalığa çevirin",
text: "Örneğin aylık yüzde 3,69 faiz oranını hesaplamada 0,0369 olarak kullanın.",
}, { title: "Vadeyi ay cinsinden yazın",
text: "24 ay, 36 ay veya bankanın onayladığı farklı bir süreyi toplam dönem sayısı olarak alın.",
}, { title: "Formülle aylık taksiti bulun",
text: "Anapara, aylık oran ve dönem sayısını eşit taksit formülüne yerleştirin.",
}, { title: "Toplam geri ödemeyi hesaplayın",
text: "Aylık taksiti vade ile çarpın. Bu sonuç genellikle anapara ve faizi gösterir.",
}, { title: "Ek masrafları ekleyin",
text: "Tahsis, sigorta, rehin, tescil ve diğer giderleri toplam ödeme rakamına ekleyerek gerçek maliyeti bulun.",
}, ].map((step, index) => ( <li key={step.title}
className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
>
<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white">
{index + 1} </span> <div> <h4 className="font-black text-slate-950">
{step.title} </h4> <p className="mt-1 text-sm leading-7 text-slate-600">
{step.text} </p> </div> </li> ))} </ol>
<InfoBox title="Hesap makinesi sonucu ile banka teklifi neden farklı olabilir?">
<p> Hesaplama araçları genellikle faiz, tutar ve vadeden
hareket eder. Banka teklifinde ise vergi uygulamaları,
tahsis ücreti, sigorta primleri, ödeme tarihi, küsurat
yuvarlamaları ve kampanya koşulları bulunabilir. Bu
nedenle hesaplama sonucu yaklaşık, banka ödeme planı ise bağlayıcıdır. </p>
</InfoBox>
</CalculatorContentSection>
<CalculatorContentSection id="aylik-faiz-yillik-maliyet"
title="Aylık faiz oranı ve yıllık maliyet arasındaki fark" > <SectionLead>
Taşıt kredisi reklamlarında çoğunlukla aylık faiz oranı öne
çıkar. Ancak iki teklifin gerçekten hangisinin daha ucuz
olduğunu anlamak için yıllık maliyet oranı ve toplam geri
ödeme birlikte incelenmelidir. </SectionLead> <p>
Aylık faiz oranını 12 ile çarpmak yalnızca nominal yıllık
oran hakkında kabaca fikir verir. Faizin her ay kalan
anapara üzerinden işlemesi ve krediye bağlı diğer
masrafların bulunması gerçek maliyetin daha farklı oluşmasına yol açar.
</p>
<div className="my-8 overflow-hidden rounded-3xl border border-slate-200">
<div className="overflow-x-auto">
<table className="w-full min-w-[760px] border-collapse text-left">
<thead className="bg-slate-950 text-white"> <tr>
<th className="px-5 py-4 text-sm font-black"> Gösterge </th>
<th className="px-5 py-4 text-sm font-black"> Ne anlatır? </th>
<th className="px-5 py-4 text-sm font-black"> Karar verirken önemi </th>
</tr> </thead> <tbody className="divide-y divide-slate-200 bg-white"> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Aylık faiz oranı </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Bir aylık dönemde kalan anaparaya uygulanan orandır. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Taksit hesabının temel girdisidir ancak tek başına
toplam maliyeti göstermez. </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Nominal yıllık oran
</td> <td className="px-5 py-4 text-sm leading-6 text-slate-600">
Aylık oranın 12 ile çarpılmasıyla elde edilen basit göstergedir. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Bileşik etkiyi ve masrafları tam yansıtmaz. </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Yıllık maliyet oranı
</td> <td className="px-5 py-4 text-sm leading-6 text-slate-600">
Faiz ve krediyle doğrudan bağlantılı maliyetleri
yıllıklaştırılmış biçimde gösterir. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Farklı bankaların tekliflerini ortak ölçekte karşılaştırmayı kolaylaştırır.
</td> </tr> <tr> <td className="px-5 py-4 font-bold text-slate-950">
Toplam geri ödeme </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Vade boyunca ödenecek taksitlerin toplamını gösterir. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Bütçeden çıkacak ana tutarı görmenizi sağlar. </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950">
Toplam sahip olma maliyeti </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Krediye ek olarak sigorta, vergi, bakım, yakıt ve
diğer araç giderlerini kapsar. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Aracın gerçekten bütçenize uygun olup olmadığını gösteren en geniş ölçüdür.
</td> </tr> </tbody> </table> </div> </div> <InfoBox
title="En düşük faiz her zaman en ucuz teklif değildir" tone="amber" > <p>
Düşük faizli bir kredi, yüksek sigorta primi veya ek ürün
şartı içeriyorsa toplam maliyeti daha yüksek olabilir.
Aynı kredi tutarı ve vade için tüm ücretlerin dahil
edildiği yazılı ödeme planlarını karşılaştırın. </p> </InfoBox>
</CalculatorContentSection>
<CalculatorContentSection id="pesinat-ve-kredi-orani"
title="Peşinat ve kredi-değer oranı nasıl planlanır?" > <SectionLead>
Banka çoğu durumda araç bedelinin tamamını finanse etmez.
Krediyle karşılanamayan bölüm peşinat olarak ödenir. Bu
nedenle araç seçmeden önce ulaşılabilir kredi tutarı ile
hazır peşinatın birlikte değerlendirilmesi gerekir. </SectionLead> <p>
Kredi-değer oranı, kullanılabilecek kredinin aracın kabul
edilen değerine bölünmesiyle bulunur. Örneğin banka
1.000.000 TL değerindeki bir araç için 600.000 TL kredi
onaylarsa kredi-değer oranı yüzde 60, gerekli öz kaynak ise
en az 400.000 TL olur. Noter, sigorta ve diğer başlangıç
giderleri bu peşinata eklenir. </p>
<div className="my-8 grid gap-5 md:grid-cols-2">
<div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
<div className="flex items-center gap-3"> <CircleDollarSign
className="h-7 w-7 text-blue-700" aria-hidden="true" />
<h3 className="text-xl font-black text-blue-950">
Daha yüksek peşinatın etkisi </h3> </div>
<ul className="mt-5 space-y-3 text-sm leading-7 text-blue-950/80">
<li className="flex gap-3"> <Check className="mt-1 h-4 w-4 shrink-0" />
Daha düşük kredi tutarı ve daha düşük aylık taksit </li>
<li className="flex gap-3"> <Check className="mt-1 h-4 w-4 shrink-0" />
Vade boyunca daha az toplam faiz </li> <li className="flex gap-3">
<Check className="mt-1 h-4 w-4 shrink-0" />
Kredi onay ihtimalinde olası iyileşme </li> <li className="flex gap-3">
<Check className="mt-1 h-4 w-4 shrink-0" />
Aracın değer kaybına karşı daha güçlü öz kaynak oranı </li> </ul> </div>
<div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
<div className="flex items-center gap-3"> <AlertTriangle
className="h-7 w-7 text-amber-700" aria-hidden="true" />
<h3 className="text-xl font-black text-amber-950">
Tüm nakdi peşinata bağlamayın </h3> </div>
<p className="mt-5 text-sm leading-7 text-amber-950/80">
Peşinatı artırmak faiz maliyetini azaltabilir; ancak
nakit rezervinin tamamen tükenmesi beklenmeyen bakım,
sağlık, taşınma veya gelir kaybı durumunda yeni borç
ihtiyacı doğurabilir. Peşinat sonrası acil durum fonunu koruyun. </p>
</div> </div>
<h3 className="text-2xl font-black tracking-tight text-slate-950">
Peşinat planı için örnek bütçe </h3>
<div className="my-6 overflow-hidden rounded-3xl border border-slate-200">
<div className="overflow-x-auto">
<table className="w-full min-w-[720px] text-left">
<thead className="bg-slate-950 text-white"> <tr>
<th className="px-5 py-4 text-sm font-black"> Kalem </th>
<th className="px-5 py-4 text-sm font-black"> Tutar </th>
<th className="px-5 py-4 text-sm font-black"> Açıklama </th> </tr> </thead>
<tbody className="divide-y divide-slate-200"> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Araç satış bedeli </td>
<td className="px-5 py-4 font-bold text-slate-950"> 1.200.000 TL </td>
<td className="px-5 py-4 text-sm text-slate-600">
Satıcıyla anlaşılan örnek fiyat </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Kullanılacak kredi
</td> <td className="px-5 py-4 font-bold text-slate-950"> 700.000 TL </td>
<td className="px-5 py-4 text-sm text-slate-600">
Bankanın onayladığı varsayılan tutar </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Araç için peşinat </td>
<td className="px-5 py-4 font-bold text-slate-950"> 500.000 TL </td>
<td className="px-5 py-4 text-sm text-slate-600">
Satış bedeli ile kredi farkı </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950">
İlk yıl sigorta ve işlemler </td>
<td className="px-5 py-4 font-bold text-slate-950"> 65.000 TL </td>
<td className="px-5 py-4 text-sm text-slate-600">
Kasko, trafik, noter ve diğer örnek giderler </td> </tr>
<tr className="bg-blue-50">
<td className="px-5 py-4 font-black text-blue-950"> Gerekli başlangıç nakdi
</td> <td className="px-5 py-4 font-black text-blue-950"> 565.000 TL </td>
<td className="px-5 py-4 text-sm font-semibold text-blue-900">
Acil durum fonu hariç </td> </tr> </tbody> </table> </div> </div>
</CalculatorContentSection>
<CalculatorContentSection id="vade-secimi"
title="Taşıt kredisi vadesi nasıl seçilir?" > <SectionLead>
En doğru vade, bütçeyi zorlamayan en kısa sürdürülebilir
süredir. Uzun vade aylık taksiti azaltabilir; ancak toplam
faiz maliyetini yükseltir ve borcun araç değerine göre daha
uzun süre yüksek kalmasına neden olabilir. </SectionLead> <p>
Vade seçerken yalnızca bugünkü geliri değil, kredinin tüm
süresini düşünün. İş değişikliği, kira artışı, aile
giderleri, sağlık harcamaları ve aracın bakım masrafları
gelecekte ödeme kapasitesini etkileyebilir. Taksit
bütçesinin içinde mutlaka güvenlik payı bırakılmalıdır. </p>
<div className="my-8 grid gap-6 lg:grid-cols-3">
<div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
<TrendingDown className="h-8 w-8 text-emerald-700" aria-hidden="true" />
<h3 className="mt-4 text-xl font-black text-emerald-950"> Kısa vade </h3>
<p className="mt-3 text-sm leading-7 text-emerald-950/80">
Aylık taksit daha yüksektir; buna karşılık toplam faiz
daha düşük kalır ve borç daha hızlı kapanır. </p> </div>
<div className="rounded-3xl border border-blue-200 bg-blue-50 p-6"> <Scale
className="h-8 w-8 text-blue-700" aria-hidden="true" />
<h3 className="mt-4 text-xl font-black text-blue-950"> Dengeli vade </h3>
<p className="mt-3 text-sm leading-7 text-blue-950/80">
Taksit bütçeyi zorlamadan toplam maliyeti kontrol altında
tutuyorsa çoğu kullanıcı için daha sürdürülebilir olabilir. </p> </div>
<div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
<TrendingUp className="h-8 w-8 text-amber-700" aria-hidden="true" />
<h3 className="mt-4 text-xl font-black text-amber-950"> Uzun vade </h3>
<p className="mt-3 text-sm leading-7 text-amber-950/80">
Aylık ödeme düşer; ancak daha fazla dönem faiz
ödendiğinden toplam geri ödeme belirgin şekilde artar. </p> </div> </div>
<InfoBox title="Vade kararında stres testi uygulayın" tone="slate"> <p>
Aylık net gelirinizin yüzde 15 azalması veya zorunlu
giderlerinizin yüzde 20 artması halinde taksiti ödeyip
ödeyemeyeceğinizi kontrol edin. Cevap hayırsa daha yüksek
peşinat, daha ucuz araç veya daha düşük kredi tutarı değerlendirin. </p>
</InfoBox>
</CalculatorContentSection>
<CalculatorContentSection id="sifir-ikinci-el"
title="Sıfır ve ikinci el araç kredisi arasındaki farklar" > <SectionLead>
Sıfır ve ikinci el taşıt kredileri aynı temel formülle
hesaplanır; ancak belge, değerleme, araç yaşı, kredi oranı
ve vade bakımından farklı koşullar içerebilir. </SectionLead>
<div className="my-8 overflow-hidden rounded-3xl border border-slate-200">
<div className="overflow-x-auto">
<table className="w-full min-w-[840px] text-left">
<thead className="bg-slate-950 text-white"> <tr>
<th className="px-5 py-4 text-sm font-black"> Başlık </th>
<th className="px-5 py-4 text-sm font-black"> Sıfır araç </th>
<th className="px-5 py-4 text-sm font-black"> İkinci el araç </th> </tr>
</thead> <tbody className="divide-y divide-slate-200 bg-white"> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Değer belgesi </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Proforma fatura veya nihai fatura esas alınabilir. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Kasko değeri, ekspertiz veya banka değerlemesi dikkate alınabilir. </td>
</tr> <tr> <td className="px-5 py-4 font-bold text-slate-950"> Araç yaşı
</td> <td className="px-5 py-4 text-sm leading-6 text-slate-600">
Yaş sınırlaması bakımından sorun bulunmaz. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Banka azami araç yaşı ve kredi bitiş yaşı uygulayabilir. </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Kredi süreci </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Bayi ve banka entegrasyonu süreci hızlandırabilir. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Ruhsat, satıcı bilgisi ve değerleme süreci ek zaman alabilir. </td> </tr>
<tr> <td className="px-5 py-4 font-bold text-slate-950"> Kampanya </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Marka finansmanı veya bayi destekli kampanyalar bulunabilir. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Kampanyalar daha sınırlı olabilir; bankanın genel oranları uygulanabilir.
</td> </tr> <tr> <td className="px-5 py-4 font-bold text-slate-950">
Değer riski </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
İlk yıllardaki değer kaybı daha hızlı olabilir. </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
Araç geçmişi, bakım durumu ve hasar kaydı daha önemlidir. </td> </tr>
</tbody> </table> </div> </div>
<InfoBox title="İkinci el araçta satış fiyatı ile kredi değeri farklı olabilir" tone="amber">
<p> Satıcı 1.000.000 TL talep etse bile bankanın kabul ettiği
değer 900.000 TL olabilir. Kredi oranı bu düşük değer
üzerinden uygulanırsa peşinat ihtiyacınız planladığınızdan
daha fazla çıkar. </p> </InfoBox>
</CalculatorContentSection>
<CalculatorContentSection id="ek-masraflar"
title="Taşıt kredisinde ek masraflar nelerdir?" > <SectionLead>
Gerçek maliyet hesabı yapılırken yalnızca anapara ve faiz
yeterli değildir. Krediye bağlı ücretler ile aracın satın
alma anında doğan giderleri ayrı ayrı yazmak gerekir. </SectionLead>
<div className="my-8 grid gap-5 md:grid-cols-2"> {costItems.map((item) => {
const Icon = item.icon; return ( <div key={item.title}
className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" >
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
<Icon className="h-6 w-6" aria-hidden="true" /> </div>
<h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">
{item.title} </h3> <p className="mt-3 text-sm leading-7 text-slate-600">
{item.description} </p>
<div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-950">
<strong>Bütçe etkisi:</strong> {item.impact} </div> </div> ); })} </div>
<div className="my-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
<h3 className="text-2xl font-black tracking-tight text-slate-950">
Toplam araç edinme maliyeti formülü </h3>
<div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
<p className="min-w-[680px] text-center font-mono text-base font-bold leading-8 text-slate-800 md:text-lg">
Toplam maliyet = Peşinat + Kredi taksitleri + Kredi
ücretleri + Sigortalar + Tescil giderleri + İlk bakım bütçesi </p> </div>
<p className="mt-5 text-sm leading-7 text-slate-600">
Yakıt ve düzenli kullanım giderleri satın alma maliyetine
ek olarak aylık araç bütçesinde ayrıca izlenmelidir. </p> </div>
</CalculatorContentSection>
<CalculatorContentSection id="ornek-hesaplamalar"
title="Örnek taşıt kredisi hesaplamaları" > <SectionLead>
Aşağıdaki senaryolar, vade ve faiz değişiminin aylık taksit
ile toplam geri ödeme üzerindeki etkisini göstermek amacıyla
hazırlanmıştır. Rakamlar yaklaşık değerlerdir ve ek
masraflar dahil değildir. </SectionLead>
<div className="my-8 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
<div className="overflow-x-auto">
<table className="w-full min-w-[1100px] text-left">
<thead className="bg-slate-950 text-white"> <tr>
<th className="px-5 py-4 text-sm font-black"> Senaryo </th>
<th className="px-5 py-4 text-sm font-black"> Kredi tutarı </th>
<th className="px-5 py-4 text-sm font-black"> Aylık faiz </th>
<th className="px-5 py-4 text-sm font-black"> Vade </th>
<th className="px-5 py-4 text-sm font-black"> Aylık taksit </th>
<th className="px-5 py-4 text-sm font-black"> Toplam ödeme </th>
<th className="px-5 py-4 text-sm font-black"> Toplam faiz </th> </tr>
</thead> <tbody className="divide-y divide-slate-200 bg-white">
{scenarioRows.map((row) => ( <tr key={row.label}
className="transition hover:bg-blue-50/50" >
<td className="px-5 py-4 font-bold text-slate-950"> {row.label} </td>
<td className="px-5 py-4 text-sm font-semibold text-slate-800">
{row.loanAmount} </td> <td className="px-5 py-4 text-sm text-slate-600">
{row.monthlyRate} </td> <td className="px-5 py-4 text-sm text-slate-600">
{row.term} </td> <td className="px-5 py-4 text-sm font-bold text-blue-700">
{row.installment} </td>
<td className="px-5 py-4 text-sm font-bold text-slate-950">
{row.totalPayment} </td>
<td className="px-5 py-4 text-sm font-bold text-rose-700">
{row.totalInterest} </td> </tr> ))} </tbody> </table> </div> </div>
<InfoBox title="Tabloyu nasıl yorumlamalısınız?" tone="emerald"> <p>
500.000 TL kredi örneğinde 24 aydan 36 aya geçildiğinde
aylık taksit düşerken toplam faiz belirgin biçimde artar.
Bu fark, uzun vadenin aylık rahatlık sağlarken toplam
maliyeti neden yükselttiğini açıkça gösterir. </p> </InfoBox>
<h3 className="mt-10 text-2xl font-black tracking-tight text-slate-950">
500.000 TL kredi için vade karşılaştırması </h3>
<div className="my-6 grid gap-5 md:grid-cols-2">
<div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
<p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
24 ay </p> <p className="mt-3 text-3xl font-black text-emerald-950">
32.724 TL </p> <p className="mt-1 text-sm text-emerald-900">
Yaklaşık aylık taksit </p>
<div className="mt-5 border-t border-emerald-200 pt-5">
<p className="text-sm leading-7 text-emerald-950/80">
Toplam ödeme yaklaşık 785.376 TL, toplam faiz yaklaşık 285.376 TL olur.
</p> </div> </div>
<div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
<p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">
36 ay </p> <p className="mt-3 text-3xl font-black text-amber-950">
26.366 TL </p> <p className="mt-1 text-sm text-amber-900">
Yaklaşık aylık taksit </p>
<div className="mt-5 border-t border-amber-200 pt-5">
<p className="text-sm leading-7 text-amber-950/80">
Toplam ödeme yaklaşık 949.176 TL, toplam faiz yaklaşık 449.176 TL olur.
</p> </div> </div> </div> <p>
Bu örnekte 36 aylık vade, aylık taksiti yaklaşık 6.358 TL
azaltırken toplam faizi yaklaşık 163.800 TL artırır. Karar
verirken bu iki etkinin bütçeniz açısından hangisinin daha
önemli olduğunu değerlendirmelisiniz. </p>
</CalculatorContentSection>
<CalculatorContentSection id="butce-plani"
title="Taşıt kredisi için güvenli bütçe planı" > <SectionLead>
Kredi onayı alabilmek ile krediyi rahatça ödeyebilmek aynı
şey değildir. Banka krediyi onaylasa bile aylık ödeme
bütçenizde yeterli esneklik bırakmıyorsa daha düşük tutarlı
bir araç seçmek daha sağlıklı olabilir. </SectionLead> <p>
Güvenli bütçe planı, net gelirden zorunlu yaşam giderleri,
mevcut kredi ve kart ödemeleri, tasarruf hedefleri ve aracın
aylık kullanım maliyetleri çıkarıldıktan sonra yapılır.
Kalan tutarın tamamını kredi taksidine ayırmak yerine
beklenmeyen harcamalar için pay bırakılmalıdır. </p>
<div className="my-8 overflow-hidden rounded-3xl border border-slate-200">
<div className="overflow-x-auto">
<table className="w-full min-w-[820px] text-left">
<thead className="bg-slate-950 text-white"> <tr>
<th className="px-5 py-4 text-sm font-black"> Aylık bütçe kalemi </th>
<th className="px-5 py-4 text-sm font-black"> Örnek tutar </th>
<th className="px-5 py-4 text-sm font-black"> Açıklama </th> </tr> </thead>
<tbody className="divide-y divide-slate-200"> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Net hane geliri </td>
<td className="px-5 py-4 font-bold text-slate-950"> 95.000 TL </td>
<td className="px-5 py-4 text-sm text-slate-600">
Düzenli ve belgelenebilir gelir </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Zorunlu yaşam giderleri
</td> <td className="px-5 py-4 font-bold text-slate-950"> 48.000 TL </td>
<td className="px-5 py-4 text-sm text-slate-600">
Kira, gıda, faturalar, eğitim ve sağlık </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Mevcut borç ödemeleri
</td> <td className="px-5 py-4 font-bold text-slate-950"> 8.000 TL </td>
<td className="px-5 py-4 text-sm text-slate-600">
Kredi kartı ve diğer krediler </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950"> Araç kullanım gideri
</td> <td className="px-5 py-4 font-bold text-slate-950"> 12.000 TL </td>
<td className="px-5 py-4 text-sm text-slate-600">
Yakıt, sigorta payı, bakım ve vergi rezervi </td> </tr> <tr>
<td className="px-5 py-4 font-bold text-slate-950">
Tasarruf ve güvenlik payı </td>
<td className="px-5 py-4 font-bold text-slate-950"> 10.000 TL </td>
<td className="px-5 py-4 text-sm text-slate-600">
Acil durum ve düzenli birikim </td> </tr> <tr className="bg-blue-50">
<td className="px-5 py-4 font-black text-blue-950"> Taksit için kalan tutar
</td> <td className="px-5 py-4 font-black text-blue-950"> 17.000 TL </td>
<td className="px-5 py-4 text-sm font-semibold text-blue-900">
Güvenli üst sınır olarak değerlendirilebilir </td> </tr> </tbody> </table>
</div> </div>
<InfoBox title="Kredi taksitini gelir oranıyla sınırlamak tek başına yeterli değildir">
<p> Aynı gelire sahip iki hanenin kira, çocuk, sağlık,
ulaşım ve mevcut borç giderleri farklı olabilir. Bu
nedenle genel oranlar yalnızca başlangıç noktasıdır; asıl
karar kişisel nakit akışı üzerinden verilmelidir. </p> </InfoBox>
<h3 className="mt-10 text-2xl font-black tracking-tight text-slate-950">
Satın alma öncesi kontrol listesi </h3> <div className="mt-6 grid gap-3">
{decisionChecklist.map((item, index) => ( <div key={item}
className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4"
>
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-xs font-black text-white">
{index + 1} </span> <p className="pt-1 text-sm leading-7 text-slate-700">
{item} </p> </div> ))} </div>
</CalculatorContentSection>
<CalculatorContentSection id="erken-kapama"
title="Erken kapama ve ara ödeme nasıl değerlendirilir?" > <SectionLead>
Taşıt kredisini vadesinden önce tamamen kapatmak veya belirli
bir ara ödeme yapmak, kalan anapara üzerinden oluşacak
gelecekteki faiz yükünü azaltabilir. Ancak karar verirken
nakit rezervi ve alternatif kullanım maliyeti birlikte düşünülmelidir.
</SectionLead> <p> Erken kapama talebinde banka, kapama tarihindeki kalan
anaparayı, o tarihe kadar işlemiş faizi ve mevzuata uygun
diğer kalemleri hesaplar. Tam tutar gün bazında
değişebileceği için ödeme yapılacak gün için resmi kapama
yazısı alınmalıdır. </p> <div className="my-8 grid gap-5 md:grid-cols-2">
<div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
<HandCoins className="h-8 w-8 text-blue-700" aria-hidden="true" />
<h3 className="mt-4 text-xl font-black text-blue-950"> Ara ödeme </h3>
<p className="mt-3 text-sm leading-7 text-blue-950/80">
Kalan anaparayı azaltır. Banka yeni ödeme planında
taksit tutarını düşürebilir veya vadeyi kısaltabilir.
Vade kısaltma çoğu durumda toplam faiz tasarrufunu artırabilir. </p> </div>
<div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
<CheckCircle2 className="h-8 w-8 text-emerald-700" aria-hidden="true" />
<h3 className="mt-4 text-xl font-black text-emerald-950"> Tam kapama </h3>
<p className="mt-3 text-sm leading-7 text-emerald-950/80">
Kredi borcu tamamen sona erer. Araç üzerindeki rehnin
kaldırılması için bankanın ilgili prosedürü takip edilmelidir. </p> </div>
</div>
<InfoBox title="Nakit rezervinizi tüketmeden karar verin" tone="amber"> <p>
Erken kapama faiz tasarrufu sağlayabilir; ancak tüm
birikimi kullanmak acil durumda daha pahalı borçlanmaya
yol açabilir. En az birkaç aylık zorunlu gideri
karşılayacak rezervi korumak daha dengeli olabilir. </p> </InfoBox>
</CalculatorContentSection>
<CalculatorContentSection id="banka-karsilastirma"
title="Banka taşıt kredisi teklifleri nasıl karşılaştırılır?" >
<SectionLead> Sağlıklı karşılaştırma için bütün bankalardan aynı gün,
aynı kredi tutarı ve aynı vade üzerinden teklif alın.
Şartlar farklı olduğunda yalnızca faiz oranına bakmak
yanıltıcı sonuç verir. </SectionLead>
<div className="my-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
<h3 className="text-2xl font-black tracking-tight text-slate-950">
Teklifte kontrol edilecek 8 kalem </h3>
<div className="mt-6 grid gap-4 md:grid-cols-2"> {[ "Aylık faiz oranı",
"Yıllık maliyet oranı", "Aylık taksit", "Toplam geri ödeme",
"Kredi tahsis ücreti", "Hayat sigortası primi",
"Kasko şartı ve poliçe bedeli", "Erken kapama ve ara ödeme prosedürü",
].map((item, index) => ( <div key={item}
className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
>
<span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-xs font-black text-white">
{index + 1} </span> <span className="text-sm font-bold text-slate-800">
{item} </span> </div> ))} </div> </div>
<h3 className="text-2xl font-black tracking-tight text-slate-950">
Taşıt kredisi ve ihtiyaç kredisi karşılaştırması </h3>
<div className="my-6 overflow-hidden rounded-3xl border border-slate-200">
<div className="overflow-x-auto">
<table className="w-full min-w-[820px] text-left">
<thead className="bg-slate-950 text-white"> <tr>
<th className="px-5 py-4 text-sm font-black"> Özellik </th>
<th className="px-5 py-4 text-sm font-black"> Taşıt kredisi </th>
<th className="px-5 py-4 text-sm font-black"> İhtiyaç kredisi </th> </tr>
</thead> <tbody className="divide-y divide-slate-200 bg-white">
{comparisonRows.map((row) => ( <tr key={row.feature}>
<td className="px-5 py-4 font-bold text-slate-950"> {row.feature} </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
{row.vehicleLoan} </td>
<td className="px-5 py-4 text-sm leading-6 text-slate-600">
{row.personalLoan} </td> </tr> ))} </tbody> </table> </div> </div>
<InfoBox title="Karşılaştırmayı yazılı teklif üzerinden yapın" tone="emerald">
<p> Telefon veya reklam ekranındaki oran yerine, toplam geri
ödeme ve tüm ücretleri gösteren resmi teklif formunu
isteyin. Teklifin geçerlilik süresini ve kampanya
şartlarını da kontrol edin. </p> </InfoBox>
</CalculatorContentSection>
<CalculatorContentSection id="basvuru-belgeleri"
title="Taşıt kredisi başvurusunda istenebilecek belgeler" > <SectionLead>
Banka ve müşteri profiline göre belge listesi değişebilir.
Dijital kanallarda bazı bilgiler otomatik doğrulansa da araç
ve gelir belgelerinin hazırlanması süreci hızlandırır. </SectionLead>
<div className="my-8 grid gap-5 md:grid-cols-2"> {[ { icon: FileCheck2,
title: "Kimlik ve iletişim bilgileri",
text: "Geçerli kimlik belgesi, adres ve iletişim bilgilerinin güncel olması gerekir.",
}, { icon: Banknote, title: "Gelir belgesi",
text: "Ücretliler için bordro veya gelir yazısı; serbest meslek sahipleri için vergi levhası ve mali belgeler istenebilir.",
}, { icon: Car, title: "Araç belgesi",
text: "Sıfır araçta proforma fatura, ikinci elde ruhsat ve satıcı bilgileri talep edilebilir.",
}, { icon: Gauge, title: "Ekspertiz veya kasko değeri",
text: "İkinci el araçlarda banka kredi tutarını değerleme sonucuna göre belirleyebilir.",
}, { icon: WalletCards, title: "Mevcut borç bilgileri",
text: "Kredi kartları ve diğer krediler, ödeme gücü değerlendirmesinde dikkate alınır.",
}, { icon: ShieldCheck, title: "Sigorta belgeleri",
text: "Kasko ve diğer poliçeler kredi kullandırımından önce veya aynı süreçte düzenlenebilir.",
}, ].map((item) => {
const Icon = item.icon; return ( <div key={item.title}
className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" >
<Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
<h3 className="mt-4 text-lg font-black text-slate-950"> {item.title} </h3>
<p className="mt-2 text-sm leading-7 text-slate-600"> {item.text} </p>
</div> ); })} </div>
<InfoBox title="Belgeler eksiksiz olsa da kredi onayı garanti değildir" tone="slate">
<p> Banka; gelir, kredi notu, borçluluk oranı, çalışma süresi,
hesap hareketleri, araç niteliği ve kendi risk
politikalarını birlikte değerlendirir. Ön onay, nihai
kullandırım anlamına gelmeyebilir. </p> </InfoBox>
</CalculatorContentSection>
<CalculatorContentSection id="sik-yapilan-hatalar"
title="Taşıt kredisi kullanırken sık yapılan hatalar" > <SectionLead>
Hataların çoğu, aylık taksiti tek karar ölçütü olarak
görmekten ve araçla ilgili yan giderleri küçümsemekten kaynaklanır.
</SectionLead> <div className="my-8 space-y-5">
{mistakes.map((item, index) => ( <div key={item.title}
className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
> <div className="grid md:grid-cols-[220px_1fr]">
<div className="flex items-center gap-3 bg-slate-950 p-6 text-white">
<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-500 text-sm font-black">
{index + 1} </span> <h3 className="font-black">{item.title}</h3> </div>
<div className="grid gap-4 p-6 lg:grid-cols-2"> <div>
<p className="text-xs font-black uppercase tracking-[0.18em] text-rose-600">
Sorun </p> <p className="mt-2 text-sm leading-7 text-slate-600">
{item.description} </p> </div> <div>
<p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
Daha doğru yaklaşım </p>
<p className="mt-2 text-sm leading-7 text-slate-600"> {item.solution} </p>
</div> </div> </div> </div> ))} </div>
</CalculatorContentSection>
<section className="my-14 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-1 shadow-2xl shadow-blue-700/20">
<div className="rounded-[1.8rem] bg-slate-950 px-6 py-10 text-white md:px-10 md:py-12">
<div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"> <div>
<div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
<Calculator className="h-4 w-4" aria-hidden="true" />
Ücretsiz hesaplama aracı </div>
<h2 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
Kendi taşıt kredisi senaryonuzu hesaplayın </h2>
<p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
Kredi tutarı, faiz oranı ve vadeyi girerek aylık
taksit, toplam geri ödeme ve toplam faiz yükünü saniyeler içinde görün.
</p> </div> <Link href="/hesaplamalar/tasit-kredisi-hesaplama"
className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-950 shadow-xl transition hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/20"
> Hemen hesapla <ArrowRight className="h-4 w-4" aria-hidden="true" />
</Link> </div> </div> </section>
<CalculatorContentSection id="sss"
title="Taşıt kredisi hakkında sık sorulan sorular" > <SectionLead>
Taşıt kredisi hesaplama, başvuru, peşinat, vade, sigorta ve
erken kapama hakkında en çok merak edilen soruları aşağıda
ayrıntılı biçimde yanıtladık. </SectionLead>
<div className="mt-8 space-y-4"> {faqItems.map((item) => (
<CalculatorFaqItem key={item.question} question={item.question}
answer={item.answer} /> ))} </div>
</CalculatorContentSection>
<section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
<Info className="h-6 w-6" aria-hidden="true" /> </div> <div>
<h2 className="text-xl font-black tracking-tight text-slate-950">
Önemli bilgilendirme </h2>
<p className="mt-3 text-sm leading-7 text-slate-600">
Bu içerik genel bilgilendirme amacıyla hazırlanmıştır;
finansal danışmanlık, kredi onayı veya banka teklifi
niteliği taşımaz. Faiz oranları, kredi sınırları,
vergiler, ücretler ve bankaların değerlendirme
kriterleri zaman içinde değişebilir. Kredi
kullanmadan önce bankanın güncel sözleşmesini, ödeme
planını ve toplam maliyet formunu inceleyin. </p> </div> </div> </section>
<div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
<div> <p className="text-sm font-bold text-slate-950"> Son güncelleme </p>
<p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-500">
<CalendarClock className="h-4 w-4" aria-hidden="true" /> 18 Temmuz 2026
</p> </div>
<div className="flex items-center gap-2 text-sm text-slate-500">
<Clock3 className="h-4 w-4" aria-hidden="true" />
Yaklaşık 18 dakika okuma süresi </div> </div> </article> </div> </div>
</main> </CalculatorLayout> </> ); }