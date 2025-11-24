"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookOpen, Handshake, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
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

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Наш блог"
          description="Цікаві статті про українську кухню, рецепти та традиції"
          tag="Блог"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="opacity"
          blogs={[
            {
              id: "1",
              category: "Рецепти",
              title: "Секрети приготування ідеального борщу",
              excerpt: "Розкриваємо всі таємниці приготування найсмачнішого українського борщу за нашим фірмовим рецептом",
              imageSrc: "https://pixabay.com/get/g36bfca41baa0ad4b5c143daea616a72688d0734e8f1618230dabbbe825a4d7e073eeb0355814dd0a589ac44d4651660386247071af8fe50d7cedfe0652aed4de_1280.jpg",
              imageAlt: "Рецепт українського борщу",
              authorName: "Оксана Петренко",
              authorAvatar: "https://pixabay.com/get/ga61258dce9fd4e0d741ae5a0b23d978ec420049f100fdd7701250d9a92ad4b66dd154485f401b1fd37ee232b22e4dd5b0992001810b7d97c3264654e258ba15f_1280.jpg",
              date: "15 листопада 2024"
            },
            {
              id: "2",
              category: "Традиції",
              title: "Українська кухня крізь віки",
              excerpt: "Подорож історією української кулінарії від давніх часів до сучасності",
              imageSrc: "https://pixabay.com/get/g49fc9bf19a38c7e72b3aa359d96ca50bbf8adc06e044fc6e69aefaf5f9fce5a522c4591ac4d760c059cdb6bc69978a2c904a0b9941528405b162b6dfc5e14744_1280.jpg",
              imageAlt: "Українські традиції",
              authorName: "Михайло Коваленко",
              authorAvatar: "https://pixabay.com/get/gf31a99883a0012fcd6bcefce46d026fc1e81f946a4986ff5697dcbac7cc71b8a60035d1977329a79e2c83d65b4aeb069629e4c7968d5f0f71ccb6c11e416e819_1280.jpg",
              date: "10 листопада 2024"
            },
            {
              id: "3",
              category: "Інгредієнти",
              title: "Сезонні продукти в українській кухні",
              excerpt: "Як правильно обирати та використовувати сезонні інгредієнти для приготування традиційних страв",
              imageSrc: "https://pixabay.com/get/g49ced4bbb61d787f2838f6588878ceb88b7f9c45b1e682f5bbb27f59c5bbe7359a6da13e885e092bb090c040ee4e325a7ff2b90fc2b63b2cea83c8a7f944baf5_1280.jpg",
              imageAlt: "Сезонні українські продукти",
              authorName: "Оксана Петренко",
              authorAvatar: "https://pixabay.com/get/ga61258dce9fd4e0d741ae5a0b23d978ec420049f100fdd7701250d9a92ad4b66dd154485f401b1fd37ee232b22e4dd5b0992001810b7d97c3264654e258ba15f_1280.jpg",
              date: "5 листопада 2024"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Нам довіряють"
          description="Ми співпрацюємо з найкращими платформами для вашої зручності"
          tag="Партнери"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g5d41d9729b3b4836c3bf71cac1fe23c17c2cc40968ff10c5c720af9e54763e2d7aa69f8eab6ebe55b6497ade108e40be0211065951718e3d295bff81663e48d7_1280.jpg",
            "https://pixabay.com/get/g726bc4f9a0383468daefc7728b6dca525607144082098ec050cd714dce1553b94caf2f1580268d9981631841ccde98ee1664fb7326e167b82fe448c517f5ae2e_1280.jpg",
            "https://pixabay.com/get/ga5e428cabdf0378173a75116eed8cea675e1e09ec77f3102bc14a871df95161062a8057f8cdcadd5fe7a73a5e99044ed009be97560ce034bf2b27c4ab2ad73c5_1280.jpg",
            "https://pixabay.com/get/g76ccf3ca33afddc97c30c44046a313af78e95ec1cc485349a0d15e9a8d4f530cfa89d3d19b453f9d282c4ef698c8260c52fbf0d54d8332918efaf36dca193442_1280.jpg",
            "https://pixabay.com/get/ga9463f200dd702fc4823f2a402dbac1f0b9b6c49b1f879d2d4ffbf35ad97cc114d5ae70b759d962b4e7e67c4b1c62fa265e8bc08d6457d517dbe8ee416efa37d_1280.jpg",
            "https://pixabay.com/get/g43f566cd300effb3f68e538ec051e00dac6387fa5b210f9493250fd182b38f2ac2d01a0cdafb3cd17ff7729adf6dc60cb5fb4eb9f5a849fa755f4cd7427d3915_1280.jpg",
            "https://pixabay.com/get/g8349ee05ac9d7c4bac9ca4dae91c36f3020cb0cc9b7bda0a063d74b329176b1725309e406238d5e93a37ba920a63ba83436e9c1b85a1c681d257d309362fa028_1280.jpg"
          ]}
          speed={50}
          showCard={true}
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