import { useWindowScroll } from '@/lib/hooks/use-window-scroll';
import Logo from '@/components/ui/logo';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useDrawer } from '@/components/drawer-views/context';
import Hamburger from '@/components/ui/hamburger';
import { MenuItems } from '@/layouts/_layout-menu';
import WalletConnect from '@/components/common/wallet-connect';


function HeaderRightArea() {
  const { openDrawer, isOpen } = useDrawer();
  return (
    <div className="order-last flex shrink-0 items-center">

      <div className="hidden gap-3 sm:gap-6 lg:flex lg:gap-8">
        <WalletConnect />
      </div>

      <div className="flex items-center lg:hidden">
        <Hamburger
          isOpen={isOpen}
          onClick={() => openDrawer('DRAWER_MENU')}
          color="white"
          className="shadow-main ltr:ml-3.5 rtl:mr-3.5 dark:border dark:border-solid dark:border-gray-700 dark:bg-light-dark dark:text-white ltr:sm:ml-5 rtl:sm:mr-5"
        />
      </div>
    </div>
  );
}

export function Header() {
  const windowScroll = useWindowScroll();
  const breakpoint = useBreakpoint();
  const isMounted = useIsMounted();
  const { openDrawer, isOpen } = useDrawer();

  return (
    <nav
      className={`fixed top-0 z-30 flex w-full items-center justify-between px-4 transition-all duration-300 ltr:right-0 rtl:left-0 sm:px-6 lg:px-8 xl:px-10 3xl:px-12 ${
        isMounted && windowScroll.y > 10
          ? 'h-16 bg-gradient-to-b from-white to-white/80 shadow-card backdrop-blur dark:from-dark dark:to-dark/80 sm:h-20'
          : 'h-16 bg-body dark:bg-dark sm:h-24'
      }`}
    >
      {/* <div className="w-80 2xl:w-[368px]"></div> */}
      <div className="flex items-center">
        <div className="hidden lg:mr-6 lg:block xl:hidden">
          <Hamburger
            isOpen={isOpen}
            onClick={() => openDrawer('DRAWER_MENU')}
            color="white"
            className="shadow-main dark:border dark:border-solid dark:border-gray-700 dark:bg-light-dark dark:text-white"
          />
        </div>
        <Logo />
        {isMounted && ['xs', 'sm', 'md', 'lg'].indexOf(breakpoint) == -1 && (
          <MenuItems />
        )}
      </div>

      <HeaderRightArea />
    </nav>
  );
}

interface LayoutProps {}

export default function Layout({
  children,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className="bg-light-100 dark:bg-dark-100 flex min-h-screen flex-col">
      <Header />
      <main className="mb-12 flex flex-grow flex-col pt-16 sm:pt-24">
        {children}
      </main>
    </div>
  );
}
