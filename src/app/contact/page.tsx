"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
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
            { name: "Меню", id: "/" },
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

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Зв'язок"
          title="Забронювати столик"
          description="Залиште свої контакти, і ми зв'яжемося з вами для підтвердження бронювання. Також ви можете підписатися на наші новини та спеціальні пропозиції."
          tagIcon={Phone}
          inputPlaceholder="Ваш email"
          buttonText="Забронювати"
          termsText="Натискаючи кнопку, ви погоджуєтеся з нашою політикою конфіденційності."
          imageSrc="https://pixabay.com/get/gc9e62c850de619d2a058944342a4a9881d79c81a46203aefb49a62e9b4b321bcc83ccf9ae07be780d823b11bf6906b4abe2da62f5ffb6501fdeed09b07f0bb71_1280.jpg"
          imageAlt="Ресторан Пузата Хата зовні"
          mediaPosition="right"
        />
      </div>

      <FooterSocial
        brandName="Пузата Хата"
        copyrightText="© 2024 Пузата Хата. Всі права захищені."
        columns={[
          {
            title: "Меню",
            items: [
              { label: "Перші страви", href: "/" },
              { label: "Другі страви", href: "/" },
              { label: "Десерти", href: "/" },
              { label: "Напої", href: "/" }
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