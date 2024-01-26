import dynamic from 'next/dynamic';

const HomeButton = dynamic(() =>
  import('../components/HomeButton/HomeButton').then((m) => m.HomeButton),
);
const MenuLink = dynamic(() =>
  import('../components/MenuLink/MenuLink').then((m) => m.MenuLink),
);
const HeroContent = dynamic(() =>
  import('../components/HeroContent/HeroContent').then((m) => m.HeroContent),
);
const Logo = dynamic(() =>
  import('../components/Logo/Logo').then((m) => m.Logo),
);

export function Hero() {
  return (
    <section id="" className="flex justify-between flex-col w-[342px] h-full">
      <HomeButton content="inicio" />
      <div className="flex flex-col xl:flex-row md:w-[690px] xl:w-[1016px]  ">
        <nav className="w-[300px]">
          <MenuLink content="sobre" anchor="sobre" pt="40" />
          <MenuLink content="serviços" anchor="servicos" />
          <MenuLink content="contato" anchor="contato" />
        </nav>
        <HeroContent
          content="Capi resolve desafios de visibilidade e vendas com projetos
          personalizados, impulsionando seus resultados."
        />
      </div>
      <Logo content="CAPIC®" />
    </section>
  );
}
