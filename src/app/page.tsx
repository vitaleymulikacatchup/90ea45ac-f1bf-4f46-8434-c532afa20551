"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ChefHat, Heart, ScrollText, Leaf, Home, UtensilsCrossed, Bowl, Cookie, Wheat, TrendingUp, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Меню", id: "menu" },
            { name: "Про нас", id: "/about" },
            { name: "Контакти", id: "/contact" },
            { name: "Блог", id: "/blog" }
          ]}
          brandName="Пузата Хата"
          button={{
            text: "Замовити",
            href: "/contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Автентична українська кухня"
          description="Відкрийте для себе смаки традиційної України в найзатишніших умовах нашого ресторану"
          tag="Ресторан"
          tagIcon={ChefHat}
          buttons={[
            {
              text: "Переглянути меню",
              href: "/menu"
            },
            {
              text: "Забронювати столик",
              href: "/contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g57179666273030b2cd1ffd995cca1a0cbc7bcefe7fd349e7c4c67976c51acef0e2eedbadb52a1916b5433888b49785b7f2c45c89875c19204aa341fe7efcd0c1_1280.jpg",
              imageAlt: "Інтер'єр ресторану Пузата Хата"
            },
            {
              imageSrc: "https://pixabay.com/get/gf8dd3f36758495ebb3c275d246d886b562ee753c23481462c6528356de695e3af88252b93ec7eda2d567cc42cbfa0d9954fe2d6a3cee8d680175bf4c29e65e08_1280.jpg",
              imageAlt: "Традиційний український борщ"
            },
            {
              imageSrc: "https://pixabay.com/get/g11a16e32d9e3744f3561b21d37323130eff9bfcd71fa74010db1aee84a2f476ae1fb42d22840605e5847a9ddddac191303a7ae33676d1297c15ca7bc661c9de7_1280.jpg",
              imageAlt: "Домашні вареники"
            },
            {
              imageSrc: "https://pixabay.com/get/gf25c0973f6eaf553cfa8e181208bd7f751451d1f6430a1cc5959ec95eafee3980cfc75ebf49b104933e327ba95cda711c7db89c55efa5a24370202423f7ca019_1280.jpg",
              imageAlt: "Котлета по-київськи"
            },
            {
              imageSrc: "https://pixabay.com/get/ga685ef7c70c97645908be05f1a5377e3d87e4db40ade5465dd019bc4c2888e65f091669f6ca0621eaa4010181aec85b9ffc1b4ab58171b8439043e2f58f86e33_1280.jpg",
              imageAlt: "Традиційне сало з хлібом"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Наші фірмові страви"
          description="Відкрийте для себе найкращі традиційні українські страви, приготовані нашими досвідченими кухарями"
          tag="Меню"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Борщ український",
              description: "Наш фірмовий борщ готується за старовинним рецептом з свіжих овочів та яловичини. Подається зі сметаною та пампушками з часником.",
              icon: Bowl
            },
            {
              title: "Вареники домашні",
              description: "Ліплені вручну вареники з картоплею, капустою, м'ясом або вишнею. Подаються зі сметаною та смаженою цибулею.",
              icon: Cookie
            },
            {
              title: "Котлета по-київськи",
              description: "Класична котлета з курячого філе з вершковим маслом та зеленню. Золотиста скоринка та ніжна серединка.",
              icon: ChefHat
            },
            {
              title: "Сало з чорним хлібом",
              description: "Традиційна українська закуска - солене сало з ароматним чорним хлібом, часником та маринованими огірками.",
              icon: Wheat
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Наші досягнення"
          description="Цифри, які говорять про якість нашого сервісу та любов наших гостей"
          tag="Статистика"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "15+",
              description: "років досвіду в ресторанному бізнесі"
            },
            {
              id: "2",
              value: "50000+",
              description: "задоволених гостей щорічно"
            },
            {
              id: "3",
              value: "120+",
              description: "традиційних страв в меню"
            },
            {
              id: "4",
              value: "4.8★",
              description: "середній рейтинг від наших відвідувачів"
            }
          ]}
        />
      </div>

      <FooterSocial
        brandName="Пузата Хата"
        copyrightText="© 2024 Пузата Хата. Всі права захищені."
        columns={[
          {
            title: "Меню",
            items: [
              { label: "Перші страви", href: "/menu" },
              { label: "Другі страви", href: "/menu" },
              { label: "Десерти", href: "/menu" },
              { label: "Напої", href: "/menu" }
            ]
          },
          {
            title: "Ресторан",
            items: [
              { label: "Про нас", href: "/about" },
              { label: "Наша команда", href: "/about" },
              { label: "Вакансії", href: "#" },
              { label: "Новини", href: "/blog" }
            ]
          },
          {
            title: "Контакти",
            items: [
              { label: "Адреса: вул. Хрещатик, 1", href: "#" },
              { label: "Телефон: +380 44 123 45 67", href: "tel:+380441234567" },
              { label: "Email: info@puzatahata.ua", href: "mailto:info@puzatahata.ua" },
              { label: "Робочі години: 9:00-23:00", href: "#" }
            ]
          }
        ]}
        socialLinks={[
          {
            icon: Facebook,
            href: "https://facebook.com",
            ariaLabel: "Facebook"
          },
          {
            icon: Instagram,
            href: "https://instagram.com",
            ariaLabel: "Instagram"
          },
          {
            icon: Twitter,
            href: "https://twitter.com",
            ariaLabel: "Twitter"
          }
        ]}
      />
    </ThemeProvider>
  );
}