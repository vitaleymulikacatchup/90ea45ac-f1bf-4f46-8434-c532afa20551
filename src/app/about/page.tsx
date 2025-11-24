"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Heart, ScrollText, Leaf, Home, Users, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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

      <div id="about" data-section="about">
        <SplitAbout
          title="Наша історія"
          description="Пузата Хата - це більше ніж ресторан. Це місце, де зберігаються та передаються традиції української кухні, де кожна страва готується з любов'ю та повагою до наших предків."
          tag="Про нас"
          tagIcon={Heart}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Автентичні рецепти",
              description: "Всі наші страви готуються за старовинними рецептами, передані з покоління в покоління",
              icon: ScrollText
            },
            {
              title: "Свіжі інгредієнти",
              description: "Ми використовуємо тільки найсвіжіші та найякісніші продукти від місцевих фермерів",
              icon: Leaf
            },
            {
              title: "Домашня атмосфера",
              description: "Наш ресторан створює затишну атмосферу українського дому",
              icon: Home
            }
          ]}
          imageSrc="https://pixabay.com/get/gfaa5c07089ba0833b9e33b530c95f1d388fb114777fc85d9677ab54fbd3ea2b670cead0196a36843c8bf92b8b8b4c14fa7cd053c8ccd1ee2ccda9c68881df8fc_1280.jpg"
          imageAlt="Українська традиційна кухня"
          imagePosition="right"
          buttons={[
            {
              text: "Дізнатись більше",
              href: "/blog"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Наша команда"
          description="Знайомтеся з професіоналами, які щодня створюють неповторні смаки української кухні"
          tag="Команда"
          tagIcon={Users}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Оксана Петренко",
              role: "Головний кухар",
              imageSrc: "https://pixabay.com/get/ga61258dce9fd4e0d741ae5a0b23d978ec420049f100fdd7701250d9a92ad4b66dd154485f401b1fd37ee232b22e4dd5b0992001810b7d97c3264654e258ba15f_1280.jpg",
              imageAlt: "Головний кухар Оксана Петренко"
            },
            {
              id: "2",
              name: "Михайло Коваленко",
              role: "Менеджер ресторану",
              imageSrc: "https://pixabay.com/get/gf31a99883a0012fcd6bcefce46d026fc1e81f946a4986ff5697dcbac7cc71b8a60035d1977329a79e2c83d65b4aeb069629e4c7968d5f0f71ccb6c11e416e819_1280.jpg",
              imageAlt: "Менеджер ресторану Михайло Коваленко"
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